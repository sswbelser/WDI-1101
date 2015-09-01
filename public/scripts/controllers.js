var app = angular.module('controllers', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.test = "MainCtrl works"
}]);

app.controller('AnswersCtrl', ['$scope', function ($scope) {
	$scope.test ="AnswersCtrl works"
}]);