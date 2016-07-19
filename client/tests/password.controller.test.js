
describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;
  var $httpBackend ;
  var $scope, controller;

  beforeEach(inject(function(_$controller_,_$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $scope = {};
    controller = $controller('PasswordController', { $scope: $scope });
  }));



//Testing Controller
  describe('$scope.grade', function() {
  
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });
  });
  
  
  
  //Testing Filter
  
  describe('length filter', function() {

  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns 0 when given null', function() {
    var length = $filter('length');
    expect(length(null)).toEqual(0);
  });

  it('returns the correct value when given a string of chars', function() {
    var length = $filter('length');
    expect(length('abc')).toEqual(3);
  });
});
  

//Testing Directives
describe('Unit testing great quotes', function() {
  var $compile,
      $rootScope;

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  });
});



it('should demonstrate using when and expect (200 status)', inject(function($http) {


        
      var testData = {
          query: {
            terminator: [{'Title':'Terminator 2: Judgment Day'}, {'Title':'The Terminator'}],
            starwars: [{'Title':'Star Wars: Episode IV - A New Hope'},{'Title':'Star Wars: Episode V - The Empire Strikes Back'}]
          }
        };
        
      $httpBackend.when('GET', 'http://www.omdbapi.com/?s=terminator')
              .respond({ Search: testData.query.terminator });
      
      $scope.getMovieData();
       
      
      $httpBackend.flush();
      //When we call flush(), all the when configurations are resolved giving us synchronous 
      //control over the asynchronous $http.get function in the code under test.
              
      expect($scope.movies).toEqual(testData.query.terminator);
     

}));


  
});


