'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'localization']).
  config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/onix-books', {templateUrl: 'partials/books-form.php', controller: 'MessageCtrl'});
    //$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
    $routeProvider.when('/products', {templateUrl: 'partials/products.html'});
    $routeProvider.when('/products/:id/edit',
    	{
    		templateUrl: 'partials/edit.html',
    		controller: 'ProductCtrl'
    	}
    );
    $routeProvider.otherwise({redirectTo: '/onix-books'});
  }]);
