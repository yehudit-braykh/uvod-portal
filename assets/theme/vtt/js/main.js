'use strict';
var vttApp = angular.module('vtt', ['ngRoute','ngTouch', 'ngAnimate'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
}]);
// Declare app level module which depends on views, and components

vttApp.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/assets/theme/vtt/html/pages/home.html',
        controller: 'homeController'
    })
    .when('/Television Gratis', {
        templateUrl: '/assets/theme/vtt/html/pages/television-gratis.html',
        controller: 'televisionGratisController'
    })
    .when('/Videos', {
        templateUrl: '/assets/theme/vtt/html/pages/videos.html',
        controller: 'videosController'
    })
    .when('/Peliculas', {
        templateUrl: '/assets/theme/vtt/html/pages/peliculas.html',
        controller: 'peliculasController'
    })
    .when('/Karaoke', {
        templateUrl: '/assets/theme/vtt/html/pages/karaoke.html',
        controller: 'karaokeController'
    })
    .when('/Programas', {
        templateUrl: '/assets/theme/vtt/html/pages/programas.html',
        controller: 'programasController'
    })
    .when('/Canales Premium', {
        templateUrl: '/assets/theme/vtt/html/pages/canales-premium.html',
        controller: 'canalesPremiumController'
    })
    .when('/Como Funciona', {
        templateUrl: '/assets/theme/vtt/html/pages/como-funciona.html',
        controller: 'comoFuncionaController'
    })
    .otherwise({
        redirectTo: '/'
    });;
});