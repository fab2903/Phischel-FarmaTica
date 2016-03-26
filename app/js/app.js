/**
 * Created by pablo on 3/25/16.
 */
'use strict';

angular.module('farmaApp', [ 'farmaApp.controllers']).

config(['$routeProvider', function($routeProvider,FarmaCtrl) {

    $routeProvider.when('/', { controller: 'FarmaCtrl'});

    $routeProvider.otherwise({redirectTo: '/'});

}]);
