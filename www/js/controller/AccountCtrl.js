/**
 * Created by hyt on 2016/7/27.
 */
define(['angular','service/test'], function () {
  //angular会自动根据controller函数的参数名，导入相应的服务
  return function ($scope,$timeout,aService){
    $scope.info = 'AccountCtrl.js';
    $timeout(function(){
      $scope.info = aService.test;
    },1000);
  };
});
