var myTvGuide = angular.module('myTvGuide', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria']);

myTvGuide.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('amber');
});

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

myTvGuide.controller('filters', function ($scope, $http) {});

myTvGuide.controller('login', function ($scope, $http, $window, $location, $rootScope) {
    $scope.vm = {
        formData: {
            email: 'hello@patternry.com',
            password: 'foobar'
        }
    };
    $scope.validateLogin = function () {
        var url = 'http://ec2-54-90-148-109.compute-1.amazonaws.com/login';
        var dataObj = {
            username: $scope.myEmail,
            password: $scope.myPassword
        };
        $http.post(url, dataObj).success(function (data, status) {
            if (data == true) {
                $rootScope.loggedIn = true;
                $location.path('/liveTv');
            } else {
                $window.alert("Wrong Credentials. Please try again!");
            }
        });
    };
});
