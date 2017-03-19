angular.module('myPortfolio').directive('footerDirective', function() {
    
    return {
        restrict: 'EA',
        template: '<div class="mastfoot"><div class="inner"><div class="socialss" style="margin-bottom: 5px;"><span class="socials" style="margin-right: 10px;"><a href="https://twitter.com/Jnum19/" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="https://www.facebook.com/jainam.shah.1000/" target="_blank"><i class="fa fa-facebook fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="https://www.instagram.com/j_n_u_m/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="https://www.linkedin.com/in/jainamshah19/" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="https://plus.google.com/u/0/112578734955749076830/" target="_blank"><i class="fa fa-google-plus fa-2x"></i></a></span><span class="socials" style="margin-right: 10px;"><a href="https://github.com/JainamShah1911/" target="_blank"><i class="fa fa-github fa-2x"></i></a></span></div><p>Copyright © <a href="#/">Jainam Shah</a> since 2017.</p></div></div>'
        
    };

});