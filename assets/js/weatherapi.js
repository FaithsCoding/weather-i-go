// add function to use the weatherapi key and the provided long lat and datetime to get the weather for the event

function weatherAPI(eventLongitude, eventLatitude, eventDateTime){
    var eventDateTimeUnix = function(eventDateTime){
        var dt = Date.parse(eventDateTime);
        return dt / 1000;
    };
    var weatherApiKey = "ad9ca655ad513633f73afcce5f7d7aad";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + eventLatitude + "&lon=" + eventLongitude + "&dt=" + eventDateTimeUnix(eventDateTime) + "&units=metric&appid=" + weatherApiKey;
    return new Promise((resolve, reject) => {
       $.get(apiUrl, function(data) {
        console.log('Weather function data dump:');
        console.log(data); // Print weather data to console
        console.log('------------------------------------------------------');
        if (data.cod === 200) {
          resolve({
            weatherData: data,
            quickData: {
              weatherCondition: data.weather[0].description,
              weatherTemp: data.main.temp,
              weatherHumidity: data.main.humidity,
              weatherWindSpeed : data.wind.speed,
              weatherSunSet : new Date(data.sys.sunset * 1000).toLocaleTimeString(),
              weatherIcon : data.weather[0].icon,
              //weather:  { data : weatherAPI(venueLng, venueLat, eventDateTime) },
            },
          });
        } else {
          reject('No Weather data found!');
        }

   // return data;
  });
})
};
function getCityFromLatLongWeatherAPI(eventLongitude, eventLatitude){

  var weatherApiKey = "ad9ca655ad513633f73afcce5f7d7aad";
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + eventLatitude + "&lon=" + eventLongitude + "&units=metric&appid=" + weatherApiKey;
  return new Promise((resolve, reject) => {
     $.get(apiUrl, function(data) {
      console.log('Weather function data dump:');
      console.log(data); // Print weather data to console
      console.log('------------------------------------------------------');
      if (data.cod === 200) {
        resolve({
          weatherData: data,
         
        });
      } else {
        reject('No City data found!');
      }

 // return data;
});
})
};
// This is just a test!
//var runAPI = weatherAPI('-1.2409681', '52.3778256', '03/12/2023 19:00');

// Select which responses of the aquired data from openweathermap API that we want
//var weatherCondition = runAPI.weather.main;
//var weatherIcon = runAPI.weather.icon;
//var weatherTemp = runAPI.main.temp;
//var weatherHumidity = runAPI.main.humidity;
//var weatherWindSpeed = runAPI.wind.speed;
//var weatherSunSet = new Date(runAPI.sys.sunset * 1000).toLocaleTimeString();

// Create function to append retrieved data to the cards
