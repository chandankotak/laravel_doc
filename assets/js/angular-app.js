function highlight_all(){
        // SyntaxHighlighter.config.bloggerMode = true;
        // SyntaxHighlighter.config.clipboardSwf = 'assets/syntxhl/clipboard.swf';
    $("pre").each (function() {
        SyntaxHighlighter.highlight ({}, this);
    });
    console.log("SyntaxHighlighter");
}
function highlight_all_slow(time){
    if(!time){time=50;}
    setTimeout(highlight_all,time);
}
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl : "templates/Home.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Home";}})
    .when("/Introduction", {templateUrl : "templates/Introduction.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Introduction";}})
    .when("/Popularity", {templateUrl : "templates/Popularity.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Popularity";}})
    .when("/Installation", {templateUrl : "templates/Installation.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Installation";}})
    .when("/Routing", {templateUrl : "templates/Routing.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Routing";}})
    .when("/Controller", {templateUrl : "templates/Controller.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Controller";}})
    .when("/Artisan", {templateUrl : "templates/Artisan.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Artisan";}})
    .when("/Database", {templateUrl : "templates/Database.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Database";}})
    .when("/Migrations", {templateUrl : "templates/Migrations.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Database: Migrations";}})
    .when("/Model", {templateUrl : "templates/Model.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Model";}})
    .when("/View", {templateUrl : "templates/View.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="View";}})
    .when("/Blade", {templateUrl : "templates/Blade.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Blade Templates";}})
    .when("/Releases", {templateUrl : "templates/Releases.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Release History";}})
    .when("/Validation", {templateUrl : "templates/old/main.htm",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Validation";}})
    .when("/CSRF", {templateUrl : "templates/CSRF.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="CSRF";}})
    .when("/Conclusion", {templateUrl : "templates/Conclusion.html",controller:function($rootScope,$scope,$location,$route,$rootScope){$rootScope.title="Thanks";}})
    ;
});
app.directive('activeLink', ['$location', function (location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var clazz = attrs.activeLink;
        var path = attrs.href;
        path = path.substring(1); //hack because path does not return including hashbang
        scope.location = location;
        scope.$watch('location.path()', function (newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }}}]);
app.run(function($rootScope, $location) {
   $rootScope.highlight_all=function(){highlight_all()};
   $rootScope.$watch(function() { 
      return $location.path(); 
    },
    function(a){  
      highlight_all_slow(100);
    });
});