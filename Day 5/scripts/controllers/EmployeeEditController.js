hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        EmployeeService.findAllDepartments()
            .then(function (response){
                $scope.departments = response.data;
            }, function (error){
                alert("Error! " +  error);
            })

        EmployeeService.findAllEmployees()
            .then(function (response){
                $scope.managers = response.data;
            }, function (error){
                alert("Error! " +  error);
            })

        EmployeeService.findAllJobs()
            .then(function (response){
                $scope.jobs = response.data;
            }, function (error){
                alert("Error! " +  error);
            })
        EmployeeService.findById($routeParams.employeeId)
            .then(function (response) {
                $scope.employee = response.data;
            }, function (error) {
                console.log("Error at employees/findOne: " + error);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);