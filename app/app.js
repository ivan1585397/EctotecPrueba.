'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version','ngMaterial', 'ngMessages', 'locator'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
angular.module('myApp', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});


it('should initialize to model', function() {
  var usuarioNombre = element(by.binding('usuarioNombre'));
  var valid = element(by.binding('myForm.input.$valid'));

  expect(usuarioNombre.getText()).toContain('guest');
  expect(valid.getText()).toContain('true');
});

it('should be invalid if empty', function() {
  var usuarioNombre = element(by.binding('usuarioNombre'));
  var valid = element(by.binding('myForm.input.$valid'));
  var userInput = element(by.model('usuarioNombre'));

  userInput.clear();
  userInput.sendKeys('');

  expect(usuarioNombre.getText()).toEqual('usuarioNombre =');
  expect(valid.getText()).toContain('false');
});





