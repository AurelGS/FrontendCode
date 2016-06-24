/**
 * Created by Aurel on 6/24/2016.
 */
app.controller("ScopesController", function($scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
});