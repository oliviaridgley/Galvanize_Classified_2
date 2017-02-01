(function() {
  'use strict';
  console.log("SHOW-POST");

  angular.module('app')
    .component('showPost', {
      controller: controller,
      templateUrl: "/js/show-post/show-post.template.html"
    });

  controller.$inject = ['$http']

  function controller($http) {
    const vm = this;
    vm.$onInit = onInit;
    vm.posts = [];

    function onInit() {
      console.log('I am running, too');
      $http.get('/classifieds').then(function(response) {
        console.log(response);
        vm.posts = response.data;
      });
    }
  }

}())
