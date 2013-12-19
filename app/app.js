
var app = angular.module('app', [
	'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true).hashPrefix('!');

	$routeProvider.
		when('/edit/:id', { templateUrl: '/app/partials/form.html' } ).
		when('/new', { templateUrl: '/app/partials/form.html' } ).
		when('/home', { templateUrl: '/app/partials/list.html' } ).
		otherwise({ redirectTo: '/home' });
}]);