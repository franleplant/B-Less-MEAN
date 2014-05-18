var angular = require('angular');


angular.module('main', [])
	.controller('AppCtrl', function ($scope) {
		$scope.title="Im Angular! Im your friend";
	});