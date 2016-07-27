// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
define(['angular'],function(){
  var app = angular.module('starter', ['ionic']);

  app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider,$controllerProvider,$provide,$filterProvider,$compileProvider) {
      app.services = {factory:$provide.factory,service:$provide.service};//注册服务
      app.filters = {filter:$filterProvider.register};//注册锅过滤器
      app.constants = {constant:$provide.constant};//注册全局变量
      app.directives = {directive:$compileProvider.directive};//注册指令
      function loadCtrl (url,name) {
        return {
          deps:['$q',function ($q) {
            var deferred = $q.defer();
            require([url], function (controller) {
              $controllerProvider.register(name, controller);      //由于是动态加载的controller，所以要先注册，再使用
              deferred.resolve();
            });
            return deferred.promise;
          }]
        }
      }
      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        // setup an abstract state for the tabs directive
        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:

        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl',
              resolve:loadCtrl('ctrl/DashCtrl','DashCtrl')
            }
          }
        })

        .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl',
              resolve:loadCtrl('ctrl/ChatsCtrl','ChatsCtrl')
            }
          }
        })

        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl',
              resolve:loadCtrl('ctrl/AccountCtrl','AccountCtrl')
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/dash');

    });
  return app;
});

