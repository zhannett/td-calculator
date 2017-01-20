/**
 * Created by janetkulyk on 2017-01-18.
 */
(function () {
    "use strict";
    angular.module("CalculatorApp", [])
        .controller("CalculatorController", CalculatorController);

    CalculatorController.$inject = ["$scope"];

    function CalculatorController($scope) {
        $scope.loan = "12,500";
        $scope.duration = 33;
        $scope.interest = 2.75;
        $scope.custominput = {
            "color": "#09a305"
        }
        $scope.calculateMonthlyPayment = function () {
            var payment = $scope.interest / 1200.0 * parseInt($scope.loan.replace(",", ""), 10) / (1.0 - Math.pow(1.0 + $scope.interest / 1200, -1.0 * $scope.duration));
            return payment;
        };
    }
}());