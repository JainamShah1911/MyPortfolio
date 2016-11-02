angular.module('myPortfolio').config(function($routeProvider){
    
    $routeProvider
    
        .when ('/#portfolio', {
        
            templateUrl: 'pages/portfolio',
            controller: 'homecontroller'
    })

});