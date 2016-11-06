angular.module('myPortfolio').controller('homeController', ['$scope', '$interval', function($scope, $interval) {
    
    $scope.name = 'Jainam Shah';
    
    $scope.traits = [
        
        'Software Engineer',
        'Web Developer',
        'Designer',
        'Tech-Enthusiast',
        'Music Lover'
        
    ];
    
    $scope.showedItem = 0;

        $interval(function() {
            $scope.showedItem = ++$scope.showedItem % $scope.traits.length;
        }, 1000);

}]);