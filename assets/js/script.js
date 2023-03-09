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


//This functions allows users to use their own geolocation instead of inputting one
var locationGet = $('#my-location');
locationGet.addEventClicker('click', getLocation);
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    } else {
        var error = "Geolocation is not supported by this browser."
        errorHandler(error);
    }
}

});