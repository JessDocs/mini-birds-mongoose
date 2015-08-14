app.service('dataService', function($http, $q) {
    
    this.createBird = function(bird) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/sighting',
            data: bird
        }).then(function(res) {
            console.log("dataService ln 23 - res", res);
            deferred.resolve(res);
            
        })
        return deferred.promise;
    };

    this.getBirdData = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/sighting'
        }).then(function(res) {
            console.log("This is the data coming from the server", res.data);
            var birdstring = res.data;
            deferred.resolve(birdstring);
        })
        return deferred.promise;
    };

    this.deleteBirdData = function(id) {
        var deferred = $q.defer();
        $http({
            method: "DELETE",
            url: '/sighting/' + id,
        }).then(function(res) {
            console.log(res)
            deferred.resolve(res);
        });
        return deferred.promise
    }
    
    
    
    
    
});