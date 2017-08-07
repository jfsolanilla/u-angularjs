(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DashboardController', DashboardController);

  function DashboardController($stateParams) {
    var vm = this;

    // Adding a new parameter
    vm.usr = $stateParams.usrvalue;

  }
})();
