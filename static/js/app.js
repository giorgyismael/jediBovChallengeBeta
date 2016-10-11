angular.module("jetForce", ["ngMessages", "backand", "ngCookies" ,"angular.filter", 'chart.js']);
angular.module("jetForce").config(function (BackandProvider) {
    BackandProvider.setAppName('JetJedi');
})

angular.module("jetForce").factory('token', function() {
    var token = "Bearer PLNy95TAERMm2gcUOWIFtu7iD_PkDJGHE2CSxTAljJEzYCPdYE69ozRntqAz70XIAYZdc61bqTiwQCQFbAyoCv8BIH8Wlj9z9g7JWTKxZvOMUU5BGjtjbbYh_yAnxOoBCDsTOUxODLqfRCWKnPcgWXN5ehHDgtokwApvK5_NOo-y2gV9IryF4l2jKAieDwSY2O3F0KfYwFyCSkG0mkc5fR95bLisHkbNGxJyAVtI0NPj2_BqRyuO1VF556WfbN9-3-4wOAjFxaEO-eRzNDyYtA";
    return {
      getValue: function() {
        return token;
      },
    };
})

angular.module("jetForce").factory('UpdateJedi', function() {
      return {
          getId: function () {
              return data.idJedi;
          },
          setId: function (idJedi) {
              data.idJedi = idJedi;
          }
      };
  });
