var angular = require('angular');

var module_name = 'module_name';

angular.module(module_name, [])
	.controller('FunCtrl', function ($scope) {
		$scope.fun = "Im Having Fun!";
	});



module.exports = module_name;