angular.module("jetForce").controller("cadastroJetForceCtrl", function ($scope, $http, Backand, UpdateJedi, token) {
	$scope.app = "Jet Force";
	$scope.titlePage = "Cadastro de Jedi";
	$scope.page = "cadastroJetForce";
	$scope.token = token.getValue();

	$scope.addJedi = function (newJedi) {
		var baseUrl = '/1/objects/';
		var objectName = 'jedi';
		return $http({
		method: 'POST',
		url : Backand.getApiUrl() + baseUrl + objectName,
		headers: {"Authorization": $scope.token },
		data: newJedi,
		params: {
		  returnObject: true
		}
		}).then(function(response) {
			delete $scope.jedi;
			alert("Novo Jedi Cadastrado!");
			return response.data;
		});
	};


	$scope.clearForm = function(jedi){
		return delete $scope.jedi;
	}

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
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

	getStatusJeds();
});
