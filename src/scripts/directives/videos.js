 
/* DIRECTIVE   */
web.directive('videos', function() { 
  return { 
    restrict: 'AE', 
    scope: { 
      open: '=',
      info: '='
    }, 
    link: function(scope,el,attr){
        if(scope.open == 0){
            //closed
            el.attr.class = '.closed';
        }
    },
    templateUrl: '../../../views/templates/videos.html'
  }; 
});