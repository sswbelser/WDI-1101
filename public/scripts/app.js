var app = angular.module('questionApp', ['controllers', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/templates/main.html',
		controller: 'MainCtrl'
	})
	.when('/answers', {
		templateUrl: 'views/templates/answers.html',
		controller: 'AnswersCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	// use the HTML5 History API
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);