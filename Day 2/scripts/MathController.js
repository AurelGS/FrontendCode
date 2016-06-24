/**
 * Created by Aurel on 6/24/2016.
 */
app.controller("MathController", function($scope) {
    $scope.add = function() {
        $scope.result =  parseFloat($scope.NumberA) + parseFloat($scope.NumberB);
        $scope.operation = "Addition";
    };
    $scope.subtract = function() {
        $scope.result =  parseFloat($scope.NumberA) - parseFloat($scope.NumberB);
        $scope.operation = "Subtraction";
    };
    $scope.multiply = function() {
        $scope.result =  parseFloat($scope.NumberA) * parseFloat($scope.NumberB);
        $scope.operation = "Multiplication";
    };
    $scope.divide = function() {
        $scope.result =  parseFloat($scope.NumberA) / parseFloat($scope.NumberB);
        $scope.operation = "Division";
    };
});