// add function to use the weatherapi key and the provided long lat and datetime to get the weather for the event

function weatherAPI(eventLongitude, eventLatitude, eventDateTime){
    var eventDateTimeUnix = function(eventDateTime){
        var dt = Date.parse(eventDateTime);
        return dt / 1000;
    };
    var weatherApiKey = "ad9ca655ad513633f73afcce5f7d7aad";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + eventLatitude + "&lon=" + eventLongitude + "&dt=" + eventDateTimeUnix(eventDateTime) + "&units=metric&appid=" + weatherApiKey;
 $.get(apiUrl, function(data) {
    console.log(data); // Print weather data to console
  });
}

// This is just a test!
var runAPI = weatherAPI('-1.2409681', '52.3778256', '03/12/2023 19:00');

// Select which responses of the aquired data from openweathermap API that we want
var weatherCondition = data.weather.main;
var weatherIcon = data.weather.icon;
var weatherTemp = data.main.temp;
var weatherHumidity = data.main.humidity;
var weatherWindSpeed = data.wind.speed;
var weatherSunSet = new Date(data.sys.sunset * 1000).toLocaleTimeString();

// Create function to append retrieved data to the cards
