angular.module('myPortfolio').controller('aboutmeController', ['$scope', function($scope) {
    
    $scope.name = 'Jainam';
    
    $scope.questionaire = {
        
        'education': 'New Jersey Institute of Technology',
        'degree': 'Masters Computer Science',
        'expectedGraduation': 'December 2017',
        'interests': '["Coding", "Design", "Music", "Dancing", "Travelling"]',
        'workExperience.latest': 'Company: "Hilin Life Products Inc."',
        'jobTitle': 'Software Engineer',
        'email': '#',
        'cellNo': '+1 732.614.6164'
}

}]);