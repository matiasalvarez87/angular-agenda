
var app = angular.module('app', [
	'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true).hashPrefix('!');

	$routeProvider.
		when('/edit/:id', { templateUrl: 'angular-agenda/app/partials/form.html' } ).
		when('/new', { templateUrl: 'angular-agenda/app/partials/form.html' } ).
		when('/home', { templateUrl: 'angular-agenda/app/partials/list.html' } ).
		otherwise({ redirectTo: '/home' });
}]);