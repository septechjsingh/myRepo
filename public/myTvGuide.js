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

myTvGuide.controller('filters', function ($scope, $http) {

    var myJsonReq = {
        method: 'GET',
        url: 'http://localhost:3000/database.json'
    }
    $http(myJsonReq).then(function (response) {
        $scope.tvChannels = response.data.admin;
    }, function () {
        window.alert("Request Failed. Try again later or don't, what the hell do I know");
    });
});

myTvGuide.controller('login', function ($scope, $window, $location, $rootScope) {
    $scope.vm = {
        formData: {
            email: 'hello@patternry.com',
            password: 'foobar'
        }
    };
    $scope.validateLogin = function () {
        if ($scope.myEmail == "admin" && $scope.myPassword == "admin") {
            $rootScope.loggedIn = true;
            $location.path('/liveTv');
        }
    };
});
