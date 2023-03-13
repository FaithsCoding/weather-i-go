// add function to use the weatherapi key and the provided long lat and datetime to get the weather for the event
/*
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

console.log(weatherAPI('-1.2409681','52.3778256', '03/12/2023 19:00'));
*/