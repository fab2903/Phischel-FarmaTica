

angular.module('FarmaApp', ['ui.bootstrap'])
    .controller('FarmaController', function($scope) {
        var farma = this;
        farma.appName = "Caso de Estudio Phischel-FarmaTica"
        farma.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];
        $scope.isCollapsed = false;


    });


