var myTvGuide = angular.module('myTvGuide', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngRoute']);

myTvGuide.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'login'
        })
        .when('/liveTv', {
            templateUrl: 'liveTv.html',
            controller: 'filters'
        })
        .otherwise({
            redirectTo: '/'
        })
});

myTvGuide.controller('filters', function ($scope) {
    $scope.tvChannels = [
        {
            name: 'HBO',
            liveTv: 'Subscription'
        },
        {
            name: 'SHOWTIME',
            liveTv: 'Subscription'
        },
        {
            name: 'STARZ',
            liveTv: 'Subscription'
        }
    ];
});

myTvGuide.controller('login', function ($scope, $window, $location) {
    $scope.validateLogin = function () {
        $location.url('/liveTv');
    }
});
