 
/* DIRECTIVE   */
web.directive('userProfile', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/user-profile.html'
  }; 
});