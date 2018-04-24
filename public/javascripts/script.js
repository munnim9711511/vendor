var app = angular.module("app",["ngRoute","mainApp"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl :"./main/main.html",
        controller:"mainAppCTL"
    });
});

