angular.module('myPortfolio').directive('headerNavDirective', function() {
    
    return {
        restrict: 'EA',
        template: '<div class="masthead clearfix"><div class="inner"><h3 class="masthead-brand"><a href="#/">{.js}</a></h3><nav><ul class="nav masthead-nav"><li class="active"><a href="#/">Home</a></li><li><a href="#/aboutme">About Me</a></li><li><a href="#/portfolio">Portfolio</a></li><li><a href="#/connect">Connect</a></li></ul></nav></div></div>'
        
    };

});