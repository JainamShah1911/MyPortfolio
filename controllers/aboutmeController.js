angular.module('myPortfolio').controller('aboutmeController', ['$scope', function($scope) {
    
    $scope.name = 'Jainam';
    
    $scope.questionaire = {
        
        'education': 'New Jersey Institute of Technology',
        'degree': 'Masters',
        'major': 'Computer Science',
        'expectedGraduation': 'December 2017',
        'interests': '["Coding", "Design", "Music", "Dancing", "Travelling"]',
        'workExperience.latest': 'Company: "Hilin Life Products Inc."',
        'jobTitle': 'Software Engineer',
        'workExperience.current': 'Company: "Schmitt & Associates"',
        'jobTitle.current': 'Software Developer',
        'email':'JainamShah1911@gmail.com',
        'cellNo': '+1 732.614.6164'
}

}]);