angular.module('myPortfolio').controller('homeController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Jainam Shah';
    
    $scope.traits = [
        
        'Software Engineer',
        'Web Developer',
        'Designer'
        
    ];
    
    $scope.test1 = 'Designer';
    
    $timeout(function(){
        
        $scope.test2 = ', a Web Developer';
        
            $timeout(function(){
                
                $scope.test3 = " and a Software Engineer!";
                
            }, 3000);
        
    }, 3000);

}]);