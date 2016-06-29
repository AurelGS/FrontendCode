hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){

    // TODO #12 - load menu items from Value
    $scope.employeeActionList = [{
        url: '#/employeeslist',
        label: 'Employee List'
    },
    {
        url: '#/employeeadd',
        label: 'Add employee'
    }];

    $scope.currentDate = new Date();

}]);
