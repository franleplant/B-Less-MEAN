var angular = require('angular');


angular.module('main', [require('./module_a')])
	.controller('AppCtrl', function ($scope) {
		$scope.title="Im Angular! Im your friend.";
	});