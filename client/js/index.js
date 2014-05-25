var angular = require('angular');


require('./templates');



angular.module('main', [require('./module_a'), "templates"])
	.controller('AppCtrl', function ($scope) {
		$scope.title="Im Angular! Im your friend.";
	});