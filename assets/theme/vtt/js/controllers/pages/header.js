var he = null;
vttApp.controller('headerController', function headerController ($scope, $rootScope, $location, $routeParams) {
      he = $scope;

      $scope.menu = {
        0:{title:"Television Gratis"},
        1:{title:"Videos"},
        2:{title:"Peliculas"},
        3:{title:"Karaoke"},
        4:{title:"Programas"},
        5:{title:"Canales Premium"},
        6:{title:"Como Funciona"}
    };

      $scope.isHome = function(){
        return $location.path()==="/";
      }

      $scope.search = function(){
          $scope.go('/search/'+document.getElementById("search").value);

      }

      $scope.go = function(path){
          $location.path(path);
      }

      $scope.userRegister = {
          email: '',
          password: '',
          first_name:'',
          last_name:''
    };

});

var finished_login = function(data){
  $("[ng-controller=headerController]").scope().finished_login(data);

};
