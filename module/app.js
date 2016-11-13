var myPortfolio = angular.module('myPortfolio', ['ngRoute']);

myPortfolio.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
