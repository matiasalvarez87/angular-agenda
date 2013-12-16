/**
 * form.js
 **/

app.controller('formCtl', function($scope, $location, $routeParams, contactService) {


	var contactId = ($routeParams.id) ? parseInt($routeParams.id, 10) : null;

	$scope.contact = (contactId) ? contactService.get(contactId) : new Contact();
	$scope.title = ($scope.contact.isNew()) ? 'Add New Contact' : 'Edit Contact';
	$scope.types = CONTACT_TYPES;

	$scope.saveAction = function() {
		if ($scope.contactForm.$valid) {
			contactService.save($scope.contact);
			$location.path('/');
		}
	};

});