hrApp.controller('RequestController', function($scope, $http) {

//  TODO #10 - make AJAX call

    $http.get("http://hrapp-zth.rhcloud.com/hrapp/jobs")
        .then(function(response) {
            //First function handles success
            $scope.jobList = response.data;
        }, function(response) {
            //Second function handles error
            alert("Something went wrong");
        });
});


/*
    $http("http://hrapp-zth.rhcloud.com/hrapp/jobs", "GET")
        .success(function(data, status, headers, config) {
            //$scope.jobList = data;
            alert(data);
        })
        .error (function(data, status, headers, config){
            alert("Error: " + status);
        });
}]);*/
