 
/* DIRECTIVE   */
web.directive('videos', function() { 
  return { 
    restrict: 'AE', 
    scope: { 
      open: '=',
      info: '='
    }, 
    link: function(scope,el,attr){
        scope.moreVideos = function(){
            scope.videosMore = !scope.videosMore; 
        }
        console.log(scope.videosMore);
        scope.$watch('videosMore', function(){
            if(scope.videosMore == true){
                scope.videosLimit = null;
                scope.btnTxt = "Ver menos";
                scope.btnIcon = 'up';
                console.log(el);
            }else{
                scope.videosLimit = 5;
                scope.btnTxt = "Ver mais";
                scope.btnIcon = 'down';
            }
        });
    },
    templateUrl: '../../../views/templates/videos.html'
  }; 
});