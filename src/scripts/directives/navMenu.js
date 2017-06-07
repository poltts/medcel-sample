 
/* SLIDE DIRECTIVE   */
web.directive('navMenu', function() { 
  return { 
    restrict: 'AE',
    replace: true, 
    scope: { 
      data: '='
    }, 
    templateUrl: '../../../views/templates/nav-menu.html'
  }; 
});