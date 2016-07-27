/**
 * Created by hyt on 2016/7/27.
 */
define(['app','service/test2'],function(app){
  app.services.factory("aService",
    function (test2) {
      return {
        test: test2.test
      };
    });
});
