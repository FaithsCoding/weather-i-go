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




//var locationGet = $('#my-location');
$('#appStart').on('submit', function(event){
  event.preventDefault();
  var locationInput = $('#location-input').val();
  var dateTimeInput = $('#dateTime').val();
  //var parseDateTime = Date.parse(dateTimeInput); // to unix
  var dates = new Date(dateTimeInput);
 // var testmeh = 
  var fixedEventDate = dates.toISOString();
  var fixedEventDate = fixedEventDate.slice(0, fixedEventDate.length - 5) + 'Z';
  console.log('WAZZZAAAAAA :'+ dates + ' \n: ' + fixedEventDate);
 // fixedEventDate += fixedEventDate + 'Z';
  // '2023-03-19T19:17:00Z'
  console.log(getEventsData(locationInput, fixedEventDate));
  mapElement.style.display = 'initial';
  // for each geteventsdata object loop over and log it
  for (var i = 0; i < getEventsData.length; i++) {
    console.log(getEventsData[i]);

 // event.preventDefault();
  displayCards('EVENT'+ i +'YAY', getEventsData[i].venue.name, 'and the excerpto');
   // console.log(getEventsData[i].venue.name);
  }

});
// this is for the GET my LOCATION activity
$('#my-location').on('click', function(event){
    event.preventDefault();
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition);
      //
        
      navigator.geolocation.getCurrentPosition(function(position) {
        modalFactory('LocationTest', 'Testing location', 'Latitude: ' + position.coords.latitude + '<br>' + 'Longitude: ' + position.coords.longitude, true);
      console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
      });
    } else {
        var error = "Geolocation is not supported by this browser."
        errorHandler(error);
    }
});
function showPosition(position) {
    modalFactory('LocationTest', 'Testing location', 'Latitude: ' + position.coords.latitude + '<br>' + 'Longitude: ' + position.coords.longitude, true);
  }


// this is for calendar 
var optionsCalendar = '';
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
	});
}

});