angular.module("jetForce").controller("dashboardJedisForceCtrl", function ($scope, $timeout, $http, token, Backand) {
	$scope.app = "Jet Force";
	$scope.titlePage = "DashBoard";
	$scope.page = "dashboardJetForce";
	$scope.token = token.getValue();
	$scope.GraphJedByStatus =[]
	$scope.GraphJedByPlanets =[]


	var getListJeds = function () {
	  var baseUrl = '/1/objects/';
	  var objectName = 'jedi';
      return $http({
        method: 'GET',
        url: Backand.getApiUrl() + baseUrl + objectName,
		headers: {"Authorization": $scope.token }
      }).then(function(response) {
				$scope.jedis = response.data.data;
				makeGraphJedByStatus($scope.GraphJedByStatus);
				makeGraphJedByPlanets($scope.GraphJedByPlanets);

				});
    };

	var makeGraphJedByStatus = function (GraphJedByStatus) {
		angular.forEach($scope.jedis, function(value, key){

			var length = $scope.jedis.filter(function (jedi) {
				if (jedi.status == value.status) return jedi;
			}).length;
				console.log(value.status);
				console.log(GraphJedByStatus);
				console.log((GraphJedByStatus.hasOwnProperty(value.status)));
				if (!GraphJedByStatus.hasOwnProperty(value.status)){
				console.log('entrei');
					this.push({'data':value.status, 'value':length})};
		}, GraphJedByStatus);
		$scope.GraphJedByStatus = GraphJedByStatus;
	}

	var makeGraphJedByPlanets = function (GraphJedByPlanets) {
		angular.forEach($scope.jedis, function(value, key){

			var length = $scope.jedis.filter(function (jedi) {
				if (jedi.planet == value.planet) return jedi;
			}).length;

				if (!GraphJedByPlanets.hasOwnProperty(value.planet))
					this.push({'data':value.planet, 'value':length});
		}, GraphJedByPlanets);
		$scope.GraphJedByPlanets = GraphJedByPlanets;
	}

	$scope.getDataForGraph = function (dataList) {
		var newDataList = []
		angular.forEach(dataList, function(value, key){
			this.push(value.data);
	}, newDataList)
		return newDataList};

		$scope.getLabelForGraph = function (dataList) {
			var newDataList = []
			angular.forEach(dataList, function(value, key){
				this.push(value.value);
		}, newDataList)
			return newDataList};

		var getStatusJeds = function () {
			var baseUrl = '/1/objects/';
			var objectName = 'status';
				return $http({
					method: 'GET',
					url: Backand.getApiUrl() + baseUrl + objectName,
			headers: {"Authorization": $scope.token }
				}).then(function(response) {
				 $scope.listStatusJedis = response.data.data;
				});
			};
		getStatusJeds();
		getListJeds();
});
