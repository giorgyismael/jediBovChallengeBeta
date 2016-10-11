angular.module("jetForce").controller("listaJediForceCtrl", function ($rootScope, $cookies ,$scope, $http, Backand, UpdateJedi, token) {
	$scope.app = "Jet Force";
	$scope.titlePage = "Lista de Jedis";
	$scope.page = "updateJetForce";
	$scope.token = token.getValue();
	$scope.jedis = null;

	var getListJeds = function () {
	  var baseUrl = '/1/objects/';
	  var objectName = 'jedi';
      return $http({
        method: 'GET',
        url: Backand.getApiUrl() + baseUrl + objectName,
		headers: {"Authorization": $scope.token }
      }).then(function(response) {
        $scope.jedis = response.data.data;
      });
    };

	$scope.isSelectedJedi = function (jedis) {
		if (jedis != null && jedis.length > 1)
			return jedis.some(function (jedi) {
				return jedi.selecionado;
			});
	};

	$scope.toUpdate = function (jedis) {
		var result = jedis.filter(function (jedi) {
			if (jedi.selecionado) return jedi;
		});

	 if (result.length != 1){
			alert("Você deve escolher apenas uma RESGISTRO por vez!");
			return false;
		}
		 debugger
		 $cookies.put('jediForUpdate','bla');
		 debugger

		};


	$scope.countSelect = function (jedis) {
		return jedis.filter(function (jedi) {
			if (jedi.selecionado) return jedi;
		}).length;
	};


	$scope.toDelete = function (jedis) {
		var result = jedis.filter(function (jedi) {
			if (jedi.selecionado) return jedi;
		});

		decisao = confirm("Você está excluindo ("+result.length+") Jedi(s)! Deseja prosseguir?")
		if (decisao){
			for (i = 0; i < result.length; i++)
				$scope.deleteJedi(result[i]);

			$scope.jedis = jedis.filter(function (jedi) {
				if (!jedi.selecionado) return jedi;
			});
		};
	};

	$scope.deleteJedi =  function(jedi){
		var baseUrl = '/1/objects/';
		var objectName = 'jedi';
		return $http({
        method: 'DELETE',
        url : Backand.getApiUrl() + baseUrl + objectName + '/' + jedi.id,
				headers: {"Authorization": $scope.token }
      }).then(function(response) {
        return response.data;
      });
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	getListJeds();
});
