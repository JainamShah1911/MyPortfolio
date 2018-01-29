angular.module('myPortfolio').config(function($routeProvider){
    
    $routeProvider
    
        .when ('/', {
        
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
    })
    
        .when ('/portfolio', {
        
            templateUrl: 'pages/experience.htm',
            controller: 'portfolioController'
    })
    
        .when ('/skills', {
        
            templateUrl: 'pages/aboutme.htm',
            controller: 'aboutmeController'
    })   
    
        .when ('/connect', {
        
            templateUrl: 'pages/connect.htm',
            controller: 'connectController'
    }) 
    
        .when ('/portfolio/experience', {
        
            templateUrl: 'pages/experience.htm',
            controller: 'portfolioController'
        
    })
    
        .when ('/portfolio/projects', {
        
            templateUrl: 'pages/projects.htm',
            controller: 'portfolioController'
        
    })
    
        .when ('/portfolio/certifications', {
        
            templateUrl: 'pages/certifications.htm',
            controller: 'portfolioController'
        
    })
    
        .when ('/portfolio/resume', {
        
            templateUrl: 'pages/resume.htm',
            controller: 'portfolioController'
        
    })

});