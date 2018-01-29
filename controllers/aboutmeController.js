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
    $scope.frontend = ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Angular 4', 'React JS', 'Ajax', 'Bootstrap 3/4', 'Angular material 2']
    $scope.backend = ['PHP', 'Python', 'JAVA', 'Scala', 'C', 'C++', 'C#', '.NET core', 'Selenium Web driver', 'REST API', 'dynamic deadbolt']
    $scope.framework = ['Joomla', 'WordPress', 'Moodle LMS', 'Play Framework', 'Amazon AWS', 'Google Cloud Platform', 'Jenkins CI', 'Circle CI', 'Snap CI']
    $scope.database = ['MySQL', 'SQLite', 'Mongo DB', 'MS SQL', 'Java Bean', 'Apache', 'IIS', 'Node JS']
    $scope.webtools = ['Docker', 'NPM', 'Webpack2', 'Angular CLI', 'dotnet CLI', 'Google Analytics']
    $scope.webapi = ['Google developer APIs', 'Facebook API', 'SCORM', 'Twitter API', 'FEMA API']

}]);