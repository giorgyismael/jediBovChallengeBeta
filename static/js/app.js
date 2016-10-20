angular.module("jetForce", ["ngMessages", "backand", "ngCookies" ,"angular.filter", 'chart.js']);
angular.module("jetForce").config(function (BackandProvider) {
    BackandProvider.setAppName('JetJedi');
})

angular.module("jetForce").factory('token', function() {
    var token = "Bearer wgLJM4aVW3iIl-DdDBlfEjfYMuD9bvZgZtg-kNDJMSjDGNEVLIHImvymyHz41YAMqC8vAlg6E4g4tF1ZERAt1DtG2kB3j63-iL2ZaVfhKMEVlXXfuBmLidob1rlfKgsX-Nja7hoiwvltmmmGQxHn-v0BEUBzdOvOU5tBKNQSuYbVdbCzxStEwOqIuic4k1eUh-griNr99X6Bq-NVoX319iC_olfsXLb4Rb3_g-IoMnJOmAy_TQpPZzzpgv9mhRFsjRMCy_ivYXW6jUPtqtKNYQ";
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
