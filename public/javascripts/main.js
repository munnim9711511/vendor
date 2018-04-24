var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainAppCTL",["$scope","$http",function($scope,$http){
    $scope.vendorData;
    $http.get("/vendor-info").then(function(res){

        $scope.vendorData = res.data;

    });
}]);