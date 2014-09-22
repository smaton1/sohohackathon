(function() {  
  var app = angular.module('yahooWeatherApp', []); 

   app.controller('WeatherController' , ["$scope", "$http", function($scope, $http) {

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20Gb%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.london = data
      $scope.londontemp = $scope.london.query.results.channel.item.condition.temp
    });

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Berlin%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.berlin = data
      $scope.berlintemp = $scope.berlin.query.results.channel.item.condition.temp

    });

    $scope.higher = function(){
      if ($scope.berlintemp > $scope.londontemp){
        alert('correct')
      }else{
        alert('wrong')
      }
    };

    $scope.lower = function(){
      if ($scope.berlintemp < $scope.londontemp){
        alert('correct')
      }else{
        alert('wrong')
      }
    };





   }])
})();