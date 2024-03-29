jQuery(document).ready(function($) {
// TODO: Create variables for; beginBtn, cityInput, dateInput, timeInput, submitBtn, eventLongitude, eventLatitude, eventDate, eventTime etc.
// TODO: Get API key for ticketmaster to use in getting ticketmaster info .
// TODO: Get API key for weatherapi to use in getting weatherapi info.

// TODO: Create 'click' eventListener to beginBtn to redirect users to the form page to fill out.
// TODO: Create 'click' eventListener to submitBtn so that once people have first, inputted the city, then date then time, they are confronted with a list of events in the designated city, at the date and time they inputted.
// TODO: Create 'click' eventListener to button under both, dateInput and timeInput, titled 'Any date/time', which stops the user from inputting a date and or time and just shows the next available events.

// TODO: Create function which retrieves eventLongitude, eventLatitude, eventDate, eventTime from each selected event, and use this in the weatherAPI to retrieve the forecast for that event.
// TODO: Create function which displays ERROR modals for if the city cannot be found, if there are no events in that area etc.
// TODO: Create function which saves previous searches to their local storage as an array, then json parse them into a 'previous searches' section of the form page.

// TODO: add DAYJS
// TODO: use dajys to convert the time provided from datepicker to be used in ticketmaster request.

//This functions allows users to use their own geolocation instead of inputting one
//testing card generator


//$('#location-input').on('click', function() {
  //show dropdown with data from localstorage parsed from JSON
  //var storedData = JSON.parse(localStorage.getItem('history'));

  //change input from text to a dropdown list from the storedData
  //$('#location-input').append('<option value="' + storedData.dateTimeInput.locationInput + '">' + storedData.dateTimeInput.locationInput + '</option>');
  //append the dropdown list to the location-input
 // $('#location-input').append(dropdownList);
 //$('#location-input').after('<select id="location-input2" name="txtQuantity" class="input is-large is-focused  is-rounded">' +
  //        '<option value="1">Search for a city/place or click "Use my location" button! </option>' +
  //        '<option value="' + storedData.dateTimeInput.locationInput + '">' + storedData.dateTimeInput.locationInput + '</option>' +
   //     '</select>');
//})

//var locationGet = $('#my-location');
$('#appStart').on('submit load', function(event){
  event.preventDefault();
 
  var locationInput = $('#location-input').val();
  var dateTimeInput = $('#dateTime').val();
  //var parseDateTime = Date.parse(dateTimeInput); // to unix
  var dates = new Date(dateTimeInput);
 // var testmeh = 
  var fixedEventDate = dates.toISOString();
  var fixedEventDate = fixedEventDate.slice(0, fixedEventDate.length - 5) + 'Z';
 // console.log('WAZZZAAAAAA :'+ dates + ' \n: ' + fixedEventDate);
 //fixedEventDate += fixedEventDate + 'Z';
  // '2023-03-19T19:17:00Z'
  //console.log(JSON.stringify(getEventsData(locationInput, fixedEventDate)));
  mapElement.style.display = 'initial';
  //var resulted = getEventsData(locationInput, );
  //console.log(resulted);  
  var currentLat = '';
  var currentLng = '';
  jQuery('#card-container').html('');
  getEventsData(locationInput, fixedEventDate)
  .then(data => {
    console.log(data.events);
    // Use event data here
    if(data.events.length > 0){ 
      var eventPaginationTotal = data.events.length;
      var currentPagination = data.eventPagination.givenPageOffset;
      var totalpages = data.eventPagination.totalPages;
    for (let i = 0; i < data.events.length - 1; i++) {
      const event = data.events[i];

    
 
    console.log(`Event name: ${event.name}`);
    console.log(`Event ID: ${event.id}`);
    console.log(`Event URL: ${event.url}`);
    console.log(`Event date: ${event.dates.start.localDate}`);
    console.log(`Event time: ${event.dates.start.localTime}`);
    console.log(`Event Venue Name : ${event._embedded.venues[0].name}`);
    console.log(`Event Venue City : ${event._embedded.venues[0].city.name}`);
    console.log(`Event Venue Country : ${event._embedded.venues[0].country.name}`);
    if(event._embedded.venues[0].location){
      console.log(`Event Venue Latitude : ${event._embedded.venues[0].location['latitude']}`); 
      currentLat = event._embedded.venues[0].location['latitude'];
      
    }else{
      
    }
if( event._embedded.venues[0].location){
  console.log(`Event Venue Longitude : ${event._embedded.venues[0].location['longitude']}`);
  currentLng = event._embedded.venues[0].location['longitude'];
}else{

}

   console.log('-----------------------------------------------------');

   

      weatherAPI(currentLng, currentLat, dateTimeInput)
      .then(openWeatherData => {
      
      console.log(openWeatherData);
        // Select which responses of the aquired data from openweathermap API that we want
          var weatherCondition = openWeatherData.quickData.weatherCondition;
          var weatherIcon = openWeatherData.quickData.weatherIcon;
          var weatherTemp = openWeatherData.quickData.weatherTemp;
          var weatherHumidity = openWeatherData.quickData.weatherHumidity;
          var weatherWindSpeed = openWeatherData.quickData.weatherWindSpeed;
          var weatherSunSet = openWeatherData.quickData.weatherSunSet;
    console.log('Weather Condition: '+weatherCondition+'\n Icon : '+ weatherIcon +' \n Temp :'+ weatherTemp+'\n Humidity : '+weatherHumidity +'\n Windspeed :'+ weatherWindSpeed +'\n Sunset :'+ weatherSunSet);
  
    var infoed = '';
 var descriptoi = '';
 if(event.info){
  var infoed = event.info;
 }
 if(event.description){
  var descriptoi = event.description;
 }


 //var localStorageEntry = JSON.stringify(submitHistory);

    displayCards(`${event.name}`, ''+ infoed + '<br>' + descriptoi,`${event._embedded.venues[0].name}`,`${event.url}`,`${event.dates.start.localDate}`,`${event.dates.start.localTime}`,`${event.images[0].url}`,weatherIcon,weatherTemp,weatherCondition);
    //var history2 = localStorage.getItem('history');
    localStorage.setItem('history', locationInput);
  })
    .catch(error => {
    errorHandler(error);
    console.error(error);
    });

  }
  }else{
    errorHandler('No Events Found');
  }
  })
  .catch(error => {
    errorHandler(error);
    console.error(error);
  }); 

 
  //const json = {resulted}; // your JSON object here
  //if (resulted._embedded && resulted._embedded.events && resulted._embedded.events.length > 0) {
  /* 
    const eventsData = resulted._embedded.events;
    for (let i = 0; i < data.length; i++) {
      const event = eventsData[i];
      console.log(`Event name: ${event.name}`);
      console.log(`Event ID: ${event.id}`);
      console.log(`Event URL: ${event.url}`);
      console.log(`Event date: ${event.dates.start.localDate}`);
      console.log(`Event time: ${event.dates.start.localTime}`);
      console.log('---');
    }
    return eventsData;
    */
//} else {
//    console.log("No events found");
 //   return [];
//}
/*
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    console.log(`Event name: ${event.name}`);
    console.log(`Event ID: ${event.id}`);
    console.log(`Event URL: ${event.url}`);
    console.log(`Event date: ${event.dates.start.localDate}`);
    console.log(`Event time: ${event.dates.start.localTime}`);
    console.log('---');
  }
  */
  // for each geteventsdata object loop over and log it
  //for (var i = 0; i < resulted.length; i++) {
    //console.log(resulted[i]);

 // event.preventDefault();

   // console.log(getEventsData[i].venue.name);
  //}
//modalFactory('Titled2321','Titled2321', '<pre>'+resulted+'</pre>', true);
});
// this is for the GET my LOCATION activity
$('#my-location').on('click', function(event){
    event.preventDefault();
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition);
      //
        
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
      });
    } else {
        var error = "Geolocation is not supported by this browser."
        errorHandler(error);
    }
});
function showPosition(position) {
  var todayDate = $('#dateTime').val();

   // modalFactory('LocationTest', 'Testing location', 'Latitude: ' + position.coords.latitude + '<br>' + 'Longitude: ' + position.coords.longitude, true);
   var getmedata = weatherAPI(position.coords.longitude, position.coords.latitude,todayDate).then(openWeatherData => {
      // get city name from openweathermap API
       var citynamed = openWeatherData.weatherData.name;
       console.log('CityName : '+ citynamed);
       $('#location-input').val(citynamed);
       modalFactory('GettingLocation', 'Your City is: '+ citynamed, 'Latitude: ' + position.coords.latitude + '<br>' + 'Longitude: ' + position.coords.longitude + '<br>' + 'City : '+ citynamed, true);
       
      });
    
     
 
  }


// this is for calendar 
var optionsCalendar = {
  startDate : new Date().toISOString().slice(0, 10),
};
// do the calendar
// Initialize all input of type date
var calendars = bulmaCalendar.attach('[type="datetime-local"]', optionsCalendar);

// Loop on each calendar initialized
for(var i = 0; i < calendars.length; i++) {
	// Add listener to select event
	calendars[i].on('select', date => {
		console.log(date);
	});
}

// To access to bulmaCalendar instance of an element
var element = document.querySelector('#dateTime ');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', function(datepicker) {
		console.log(datepicker.data.value());
    $('#dateTime').val(datepicker.data.value());
	});
}
var lightboxInlineIframe = GLightbox({
  selector: '.glightbox4'
});
lightboxInlineIframe.on('open', (target) => {
  console.log('lightbox opened');
});


});

