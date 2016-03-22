(function customApp() {
	
	"use strict";

	angular
		.module('customMod', [])
		.factory('customFactory', ['customFactory', function(){
			function getData() {
				return $http.get('folder/data.json');
			}

			return {
				getData: getData			
			}
		}]);
})();

/*
 * <script type="text/javascript" src="folder/customMod.fac.js"></script>
 *
 * customCtrl :  customFactory as controller dependecy
 *
 * customFactory.getData().success(function(info){
 * $scope.info = data.info;
 *
 })
*/