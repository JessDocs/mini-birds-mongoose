app.controller('MainCtrl', function($scope, dataService) {
    
 $scope.birds;  
    
    $scope.createBird = function(bird, cb) {
    	console.log("MainCtrl ln 6 - bird object: ", bird);
    	dataService.createBird(bird).then(function(res) {
    		console.log("res from MainCtrl ln - 8: ", res)
    	});
        dataService.getBirdData().then(function(res) {
            $scope.birds = res;
             console.log("MainCtrl: data result from server ", $scope.birds);
         });
    };

    

 
    

    $scope.getBirds = function() {
        dataService.getBirdData().then(function(res) {
            $scope.birds = res;
            console.log("MainCtrl: data result from server ", $scope.birds);
        });
    };

    





    $scope.deleteBird = function(index) {
        var id = $scope.birds[index]._id
        dataService.deleteBirdData(id).then(function(res) {
            console.log(res);
            $scope.getBirds();
        })
    };
    
    
    
});