/**
 * Created by hyt on 2016/7/27.
 */
define(['angular'], function () {

  //angular会自动根据controller函数的参数名，导入相应的服务
  return function($scope){
    $scope.info = 'Account';      //向view/模版注入数据
  };
});
