// Define the `phonecatApp` module
'use strict';

angular.module('phonecatApp', [
  // ...which depends on the `phoneList` module
  'phoneList',
  'ngRoute',
  'phoneDetail',
  'ngAnimate',
  'core'
]);