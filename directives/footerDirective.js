angular.module('myPortfolio').directive('footerDirective', function() {
    
    return {
        restrict: 'EA',
        template: '<div class="mastfoot"><div class="inner"><p>Copyright © <a href="#">Jainam Shah</a> since 2016.</p></div></div>'
        
    };

});