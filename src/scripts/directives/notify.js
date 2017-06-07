 
/* DIRECTIVE   */
web.directive('notify', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/notify.html'
  }; 
});