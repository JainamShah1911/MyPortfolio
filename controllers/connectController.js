angular.module('myPortfolio').controller('connectController', ['$scope', function($scope) {
    
    $scope.name = 'Jainam Shah'; 
    $scope.cellNo = '+1 732.614.6164';
    $scope.address = '25 Senate Pl, ';
    $scope.apt = 'Unit 408, ';
    $scope.city = 'Jersey City, NJ - 07306';
    $scope.email = 'JainamShah1911@gmail.com';
    $scope.location = 'https://goo.gl/maps/N2MWZDhnBNq';
    $scope.mailTo = 'mailto:JainamShah1911@gmail.com?subject=Nice to meet you ';
    $scope.school = 'New Jersey Institute of Technology';
    $scope.degree = 'Masters in Computer Science';
    $scope.resumePDF = 'assets/resume/JainamShah_Resume.pdf';

}]);