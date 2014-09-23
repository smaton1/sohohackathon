(function() {  
  var app = angular.module('yahooWeatherApp', []); 

   app.controller('WeatherController' , ["$scope", "$http", function($scope, $http) {

    $scope.countries = {

      Afghanistan: "Kabul", 
      Albania: "Tirana",
      Algeria: "Algiers",
      Andorra: "Andorra la Vella",
      Angola: "Luanda",
      Antigua_and_Barbuda: "St. John's",
      Argentina: "Buenos Aires",
      Armenia: "Yerevan",
      Australia: "Canberra",
      Austria: "Vienna",
      Azerbaijan: "Baku",
      Bahamas: "Nassau",
      Bahrain: "Manama",
      Bangladesh: "Dhaka",
      Barbados: "Bridgetown",
      Belarus: "Minsk",
      Belgium: "Brussels",
      Belize: "Belmopan",
      Benin: "Porto-Novo",
      Bhutan: "Thimphu",
      Bolivia: "Sucre",
      Bosnia_and_Herzegovina: "Sarajevo",
      Botswana: "Gaborone",
      Brazil: "Brasília",
      Brunei: "Bandar Seri Begawan",
      Bulgaria: "Sofia",
      Burkina_Faso: "Ouagadougou",
      Burma: "Naypyidaw (Pyinmana)",
      Burundi: "Bujumbura",
      Cambodia: "Phnom Penh",
      Cameroon: "Yaoundé",
      Canada: "Ottawa",
      Cape_Verde: "Praia",
      Central_African_Republic: "Bangui",
      Chad: "N'Djamena",
      Chile: "Santiago",
      China: "Beijing",
      Colombia: "Bogotá",
      Comoros: "Moroni",
      Congo: "Kinshasa",
      Costa_Rica: "San José",
      Croatia: "Zagreb",
      Cuba: "Havana",
      Cyprus: "Nicosia",
      Czech_Republic: "Prague",
      Denmark: "Copenhagen",
      Djibouti: "Djibouti",
      Dominica: "Roseau",
      Dominican_Republic: "Santo Domingo",
      East_Timor: "Dili",
      Ecuador: "Quito",
      Egypt: "Cairo",
      El_Salvador: "San Salvador",
      Equatorial_Guinea: "Malabo",
      Eritrea: "Asmara",
      Estonia: "Tallinn",
      Ethiopia: "Addis Ababa",
      Fiji: "Suva",
      Finland: "Helsinki",
      France: "Paris",
      Gabon: "Libreville",
      Gambia: "Banjul",
      Georgia: "Tbilisi",
      Germany: "Berlin",
      Ghana: "Accra",
      Greece: "Athens",
      Grenada: "St. George's",
      Guatemala: "Guatemala City",
      Guinea: "Conakry",
      Guinea_Bissau: "Bissau",
      Guyana: "Georgetown",
      Haiti: "Port-au-Prince",
      Honduras: "Tegucigalpa",
      Hungary: "Budapest",
      Iceland: "Reykjavík",
      India: "New Delhi",
      Indonesia: "Jakarta",
      Iran: "Tehran",
      Iraq: "Baghdad",
      Ireland: "Dublin",
      Israel: "Jerusalem",
      Italy: "Rome",
      Ivory_Coast: "Yamoussoukro",
      Jamaica: "Kingston",
      Japan: "Tokyo",
      Jordan: "Amman",
      Kazakhstan: "Astana",
      Kenya: "Nairobi",
      Kiribati: "South Tarawa",
      Korea_North: "Pyongyang",
      Korea_South: "Seoul",
      Kuwait: "Kuwait City",
      Kyrgyzstan: "Bishkek",
      Laos: "Vientiane",
      Latvia: "Riga",
      Lebanon: "Beirut",
      Lesotho: "Maseru",
      Liberia: "Monrovia",
      Libya: "Tripoli",
      Liechtenstein: "Vaduz",
      Lithuania: "Vilnius",
      Luxembourg: "Luxembourg City",
      Macedonia: "Skopje",
      Madagascar: "Antananarivo",
      Malawi: "Lilongwe",
      Malaysia: "Kuala Lumpur",
      Maldives: "Malé",
      Mali: "Bamako",
      Malta: "Valletta",
      Marshall_Islands: "Majuro",
      Mauritania: "Nouakchott",
      Mauritius: "Port Louis",
      Mexico: "Mexico City",
      Micronesia: "Federated States of Palikir",
      Moldova: "Chi_in_u",
      Monaco: "Monaco",
      Mongolia: "Ulan Bator",
      Montenegro: "Podgorica",
      Morocco: "Rabat",
      Mozambique: "Maputo",
      Namibia: "Windhoek",
      Nepal: "Kathmandu",
      Netherlands: "Kingdom of the Amsterdam",
      New_Zealand: "Wellington",
      Nicaragua: "Managua",
      Niger: "Niamey",
      Nigeria: "Abuja",
      Norway: "Oslo",
      Oman: "Muscat",
      Pakistan: "Islamabad",
      Palau: "Ngerulmud",
      Palestine: "Jerusalem",
      Panama: "Panama City",
      Papua_New_Guinea: "Port Moresby",
      Paraguay: "Asunción",
      Peru: "Lima",
      Philippines: "Manila",
      Poland: "Warsaw",
      Portugal: "Lisbon",
      Qatar: "Doha",
      Romania: "Bucharest",
      Russia: "Moscow",
      Rwanda: "Kigali",
      Saint_Kitts_and_Nevis: "Basseterre",
      Saint_Lucia: "Castries",
      Saint_Vincent_and_the_Grenadines: "Kingstown",
      Samoa: "Apia",
      San_Marino: "San Marino",
      Sao_Tome_and_Principe: "São Tomé",
      Saudi_Arabia: "Riyadh",
      Senegal: "Dakar",
      Serbia: "Belgrade",
      Seychelles: "Victoria",
      Sierra_Leone: "Freetown",
      Singapore: "Singapore",
      Slovakia: "Bratislava",
      Slovenia: "Ljubljana",
      Solomon_Islands: "Honiara",
      Somalia: "Mogadishu",
      South_Africa: "Pretoria",
      South_Sudan: "Juba",
      Spain: "Madrid",
      Sri_Lanka: "Sri Jayawardenepura Kotte",
      Sudan: "Khartoum",
      Suriname: "Paramaribo",
      Swaziland: "Mbabane",
      Sweden: "Stockholm",
      Switzerland: "Bern",
      Syria: "Damascus",
      Tajikistan: "Dushanbe",
      Tanzania: "Dodoma",
      Thailand: "Bangkok",
      Togo: "Lomé",
      Tonga: "Nuku_alofa",
      Trinidad_and_Tobago: "Port of Spain",
      Tunisia: "Tunis",
      Turkey: "Ankara",
      Turkmenistan: "Ashgabat",
      Tuvalu: "Funafuti",
      Uganda: "Kampala",
      Ukraine: "Kiev",
      United_Arab_Emirates: "Abu Dhabi",
      United_Kingdom: "London",
      United_States: "Washington, D.C.",
      Uruguay: "Montevideo",
      Uzbekistan: "Tashkent",
      Vanuatu: "Port Vila",
      Vatican_City: "Vatican City",
      Venezuela: "Caracas",
      Vietnam: "Hanoi",
      Yemen: "Sana'a",
      Zambia: "Lusaka",
      Zimbabwe: "Harare",

    }

    function fetch_random(obj) {
        var temp_key, keys = [];

        for(temp_key in obj) {
           if(obj.hasOwnProperty(temp_key)) {
               keys.push(temp_key);
           }
        }
        $scope.randomcountry = keys[Math.floor(Math.random() * keys.length)] 
        $scope.randomcapital = obj[$scope.randomcountry];
        
    }

    fetch_random($scope.countries)

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20Gb%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.london = data
      $scope.londontemp = $scope.london.query.results.channel.item.condition.temp
    });



    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + $scope.randomcapital + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.randomcapitaldata = data
      $scope.randomcapitaltemp = $scope.randomcapitaldata.query.results.channel.item.condition.temp

    });

    $scope.higher = function(){
      if ($scope.randomcapitaltemp > $scope.londontemp){
        $scope.answer = "Correct!"
      }else{
        $scope.answer = "Wrong!"
      }
    };

    $scope.lower = function(){
      if ($scope.randomcapitaltemp < $scope.londontemp){
        $scope.answer = "Correct!"
      }else{
        $scope.answer = "Wrong!"
      }
    };



   }])
})();