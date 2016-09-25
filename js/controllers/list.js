// (function(){
// 	angular.module('turtleFacts').controller('listCtrl', ListController);
// 	function ListController($scope){
// 		$scope.dummyData="Hello Data";
// 	}
// })();
app.controller('listCtrl', ['$scope', function($scope){
	$scope.dummyData="Hello Data";
}]);