/**
 * list.js
 **/

app.controller('listCtl', function($scope, $location, contactService) {

	$scope.all = function() {
		return contactService.getAll();
	};

	$scope.edit = function(item) {
		$location.path('/edit/' + item.id);
	};

});