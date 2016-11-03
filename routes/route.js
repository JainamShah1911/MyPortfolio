angular.module('myPortfolio').config(function($routeProvider){
    
    $routeProvider
    
        .when ('/', {
        
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
    })
    
        .when ('/portfolio', {
        
            templateUrl: 'pages/portfolio.htm',
            controller: 'portfolioController'
    })
    
        .when ('/aboutme', {
        
            templateUrl: 'pages/aboutme.htm',
            controller: 'aboutmeController'
    })   
    
        .when ('/connect', {
        
            templateUrl: 'pages/connect.htm',
            controller: 'connectController'
    })

});