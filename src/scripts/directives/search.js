 
/* DIRECTIVE   */
web.directive('search', function() { 
  return { 
    restrict: 'AE',
    replace: true,
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/search.html'
  }; 
});