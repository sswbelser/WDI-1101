var app = angular.module('controllers', []);

app.controller('MainCtrl', ['$scope', 'Question', function ($scope, Question) {
	$scope.test = "MainCtrl works";
	// $http.get('/api/questions')
	$scope.allQuestions = Question.query();
	$scope.question = {};
	$scope.createQuestion = function () {
		Question.save($scope.question);
		$scope.allQuestions.push($scope.question);
		viewForm = false;
	}
}]);

app.controller('AnswersCtrl', ['$scope', function ($scope) {
	$scope.test ="AnswersCtrl works";
}]);