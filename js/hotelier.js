var app = angular.module('hotelier', ["mobile-angular-ui", "ngRoute", "ngTouch", "ngSanitize"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "home.html"
    });
    $routeProvider.when('/post', {
        templateUrl: "post.html"
    });
    
});

var app = angular.module('hotelier', ["mobile-angular-ui", "ngRoute", "ngTouch", "ngSanitize"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "home.html"
    });
    $routeProvider.when('/post', {
        templateUrl: "post.html"
    });
    $routeProvider.when('/market', {
        templateUrl: "market.html"
    });
    $routeProvider.when('/lobby', {
        templateUrl: "lobby.html"
    });
    $routeProvider.when('/magazine', {
        templateUrl: "magazine.html"
    });
    $routeProvider.when('/tips', {
        templateUrl: "tips.html"
    });
    $routeProvider.when('/events', {
        templateUrl: "events.html"
    });
    $routeProvider.when('/inloco', {
        templateUrl: "inloco.html"
    });
});

app.controller('MainController', function ($rootScope, $scope, $http, $q, $sce, $location, $anchorScroll, UtilService) {
    $scope.post = {};
    $scope.news = [];
    $scope.market = [];
    $scope.lobby = [];
    $scope.magazine = [];
    $scope.trip = [];
    $scope.inloco = [];

    document.addEventListener('deviceready', function () {
        
    });

    
  
});
