angular.module('myPortfolio').directive('socialDirective', function() {
    
    return {
        restrict: 'EA',
        template: '<div class="socialss"><span class="socials" style="margin-right: 10px;"><a href="#" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="#" target="_blank"><i class="fa fa-facebook fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="#" target="_blank"><i class="fa fa-instagram fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="#" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="#" target="_blank"><i class="fa fa-google-plus fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="#" target="_blank"><i class="fa fa-github fa-2x"></i></a></span></div>'
        
    };

});