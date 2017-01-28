var myTvGuide = angular.module('myTvGuide', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngRoute']);

myTvGuide.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

myTvGuide.controller('languages', function ($scope) {
    $scope.language = [
        {
            name: 'C++',
            extension: '.cpp'
        },
        {
            name: 'PHP',
            extension: '.php'
        },
        {
            name: 'JAVA',
            extension: '.java'
        }
    ];

    $scope.showExtension = function (myLan) {
        $scope.myFavLanguage = myLan.name;
        $scope.myFavExtension = myLan.extension;
    }
});

myTvGuide.controller('filters', function ($scope) {

});

angular.module('ui.bootstrap.demo').controller('ButtonsCtrl', function ($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function () {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function (value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });
});
