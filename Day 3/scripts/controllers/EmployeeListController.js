hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactoryBackup',
    function ($scope, $http, $location, commonResourcesFactoryBackup ) {
//      TODO #HR2 - inject commonResourcesFactory
        url = commonResourcesFactoryBackup.findAllEmployeesUrl;

//      TODO #HR3 Load employee list from server using commonResourcesFactory
        $http.get(url)
            .then(function(response) {
                //First function handles success
                $scope.employees = response.data; // Employee list
            }, function(response) {
                //Second function handles error
                alert("Something went wrong");
            });

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);