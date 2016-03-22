(function UserApp() {
  "use strict";
  
  angular
	  .module('skillsMod', [])
	    .directive('skillsDir', function() {
	      return {
	        templateUrl: "feature/skills_accordion.html",
	        restrict: "AE",
	        controller: "skillsCtrl"
	      }
    	})
})();