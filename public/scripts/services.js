var app = angular.module('services', ['ngResource']);

app.service('Question', ['$resource', function ($resource) {
	return $resource('/api/questions/:id', {id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]);