var myTvGuide = angular.module('myTvGuide', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngRoute']);

myTvGuide.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'login'
        })
        .when('/liveTv', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'liveTv.html',
            controller: 'filters'
        })
        .otherwise({
            redirectTo: '/'
        })
});

myTvGuide.controller('userInput', function ($scope, $http) {});

myTvGuide.controller('filters', function ($scope, $http) {

    var myJsonReq = {
        method: 'GET',
        url: 'http://192.168.0.11:3000/database.json'
    }
    $http(myJsonReq).then(function (response) {
        $scope.tvChannels = response.data.admin;
    }, function () {

    });
});

myTvGuide.controller('login', function ($scope, $window, $location, $rootScope) {
    $scope.validateLogin = function () {
        if ($scope.email == "admin" && $scope.password == "admin") {
            $rootScope.loggedIn = true;
            $location.path('/liveTv');
        }
    }
});
