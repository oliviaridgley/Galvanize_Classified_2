(function() {
  'use strict';
  console.log("CREATE-POST");

  angular.module('app')
    .component('createPost', {
      controller: controller,
      templateUrl: "/js/create-post/create-post.template.html"
    });

  controller.$inject = ['$http']

  function controller($http) {
    const vm = this;
    vm.$onInit = onInit;


    function onInit() {
      console.log('I am running, as well');
      $http.get('/classifieds').then(function(response) {
        console.log(response);
        vm.posts = response.data;
      });
    }
  }

}())
