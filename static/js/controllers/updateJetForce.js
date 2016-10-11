angular.module("jetForce").controller("updateJetForceCtrl", function ($rootScope,$cookies, $scope, $http, Backand, UpdateJedi, token) {
	$scope.app = "Jet Force";
	$scope.titlePage = "Editar Jedi";
	$scope.page = "updateJetForce";
	$scope.token = token.getValue();
	$scope.jedi = $cookies.get('jediForUpdate');


	$scope.update = function (Jedi) {
		var baseUrl = '/1/objects/';
		var objectName = 'jedi';get
		return $http({
		method:  'PUT',
		url : Backand.getApiUrl() + baseUrl + objectName + '/' + Jedi.id,
		headers: {"Authorization": $scope.token },
		data: Jedi,
		params: {
		  returnObject: true
		}
		}).then(function(response) {
			alert("Cadastro Atualizado!");
			return response.data;
		});
	};


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

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	getStatusJeds();
});
