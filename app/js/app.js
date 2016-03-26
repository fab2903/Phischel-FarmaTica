/**
 * Created by pablo on 3/25/16.
 */
'use strict';

angular.module('FarmaApp', []).

config(['$routeProvider', function($routeProvider,FarmaController) {

    $routeProvider.when('/', { controller: 'FarmaController'});

    $routeProvider.otherwise({redirectTo: '/'});

}]);
