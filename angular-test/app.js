(function angApp() {

angular
	.module('angApp', ['skillsMod'])
		.controller("FirstCtrl", 
			['$http', function($http)
		{
			var vm = this;

			$http.get('data/data.json').success(
				function(data){
					vm.items = data;
		})
	}]);
})();


/*

	angular
	.module('angApp', ['skillsMod'])
		.controller("mainCtrl", 
			['$scope', '$http', function($scope, $http)
		{
		$http.get('data/data.json').success(
			function(data){
				$scope.names = data;
		})
	}]);

*/