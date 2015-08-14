app.controller('MainCtrl', function($scope, dataService) {
    
// $scope.birds;  
    
    $scope.createBird = function(bird) {
    	console.log("MainCtrl ln 6 - bird object: ", bird);
    	dataService.createBird(bird).then(function(res) {
    		console.log("res from MainCtrl ln - 8: ", res)
    	});
    };
    
    $scope.getBirds = function() {
        dataService.getBirdData().then(function(res) {
            $scope.birds = res;
            console.log("MainCtrl ln 8 - $scope.birds: ", $scope.birds);
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