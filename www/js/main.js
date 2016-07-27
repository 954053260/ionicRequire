/**
 * Created by tz on 2016/7/25.
 */
(function(){
  requirejs.config({
    baseUrl:'',
    paths:{
      'angular':'lib/ionic/js/ionic.bundle.min',
      'app':'js/app',
      'ctrl':'js/controller',//controller目录路径
      'service':'js/service'//service目录路径
    }
  });
  require(['angular','app'],function () {
    angular.bootstrap(document, ['starter']);
  });
})();


