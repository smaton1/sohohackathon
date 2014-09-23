(function() {  
  var app = angular.module('yahooWeatherApp', []); 

   app.controller('WeatherController' , ["$scope", "$http", function($scope, $http) {


    $scope.score = 0

    function fetch_random(obj) {
        var temp_key, keys = [];

        for(temp_key in obj) {
           if(obj.hasOwnProperty(temp_key)) {
               keys.push(temp_key);
           }
        }
        $scope.randomcountry = keys[Math.floor(Math.random() * keys.length)] 
        $scope.randomcapital = obj[$scope.randomcountry];
        $scope.randomcountrycode = (countrycodes[$scope.randomcountry]).toLowerCase();
        
    }

    fetch_random(countries)

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20Gb%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.london = data
      $scope.londontemp = $scope.london.query.results.channel.item.condition.temp
    });


    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + $scope.randomcapital + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.randomcapitaldata = data
      $scope.randomcapitaltemp = $scope.randomcapitaldata.query.results.channel.item.condition.temp

    });


    $scope.getFlickerData = function(words) {

      var url1 = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&text=" + words + "&format=json&api_key=5b782a475699614a38519d4cc6cd32c3&nojsoncallback=1"
      $http.get(url1).success(function(data) {
        $scope.flickerPics = data.photos.photo
      })
    } 

    $scope.flickercapitalphotos = $scope.getFlickerData($scope.randomcapital)


    $scope.higher = function(){
      if ($scope.randomcapitaltemp > $scope.londontemp){
        $scope.answer = "Correct!"
        $scope.score = $scope.score + 1
      }else{
        $scope.answer = "Wrong!"
        $scope.score = $scope.score - 1
      }
    };

    $scope.lower = function(){
      if ($scope.randomcapitaltemp < $scope.londontemp){
        $scope.answer = "Correct!"
        $scope.score = $scope.score + 1
      }else{
        $scope.answer = "Wrong!"
        $scope.score = $scope.score - 1
      }
    };

    $scope.next=function(){
      $scope.answer = ""
      fetch_random($scope.countries)
        $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + $scope.randomcapital + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json").success(function(data){
      $scope.randomcapitaldata = data
      $scope.randomcapitaltemp = $scope.randomcapitaldata.query.results.channel.item.condition.temp

    });
    }

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D%22false%22%20and%20text%3D%22"+$scope.randomcountry+"%2C%20capital%22%20and%20api_key%3D%225b782a475699614a38519d4cc6cd32c3%22%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").success(function(data){
      console.log(data)
      $scope.pic = data.query.results.photo[0]
    })

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D%22false%22%20and%20text%3D%22london%2C%20building%22%20and%20api_key%3D%225b782a475699614a38519d4cc6cd32c3%22%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").success(function(data){
      console.log(data)
      $scope.londonpic = data.query.results.photo[1]
    });
   }])
})();

countries = {

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
  Moldova: "Chi_in_u",
  Monaco: "Monaco",
  Mongolia: "Ulan Bator",
  Montenegro: "Podgorica",
  Morocco: "Rabat",
  Mozambique: "Maputo",
  Namibia: "Windhoek",
  Nepal: "Kathmandu",
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
  Venezuela: "Caracas",
  Vietnam: "Hanoi",
  Yemen: "Sana'a",
  Zambia: "Lusaka",
  Zimbabwe: "Harare",

}

countrycodes = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  Antigua_and_Barbuda: "AG",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  Bosnia_and_Herzegovina: "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  Burkina_Faso: "BF",
  Burundi: "BI",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  Cape_Verde: "CV",
  Central_African_Republic: "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  Costa_Rica: "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  Czech_Republic: "CZ",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  Dominican_Republic: "DO",
  Ecuador: "EC",
  Egypt: "EG",
  El_Salvador: "SV",
  Equatorial_Guinea: "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  Guinea_Bissau: "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Korea_North: "KP",
  Korea_South: "KR",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Macedonia: "MO",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  Marshall_Islands: "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Namibia: "NA",
  Nepal: "NP",
  New_Zealand: "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Palestine: "PS",
  Panama: "PA",
  Papua_New_Guinea: "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  Saint_Kitts_and_Nevis: "KN",
  Saint_Lucia: "LC",
  Samoa: "WS",
  San_Marino: "SM",
  Sao_Tome_and_Principe: "ST",
  Saudi_Arabia: "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  Sierra_Leone: "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  Solomon_Islands: "SB",
  Somalia: "SO",
  South_Africa: "ZA",
  South_Sudan: "SS",
  Spain: "ES",
  Sri_Lanka: "LK",
  Sudan: "SD",
  Suriname: "SR",
  Swaziland: "SZ",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  Togo: "TG",
  Tonga: "TO",
  Trinidad_and_Tobago: "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  United_Arab_Emirates: "AE",
  United_Kingdom: "GB",
  United_States: "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW"
}

