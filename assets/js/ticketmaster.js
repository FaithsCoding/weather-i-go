// use ticketmaster api key, to use the input for city and long lat to get events, then return them using the bulma cards

 //var ticketmasterApiKey = "";

 // Function to get events data from Ticketmaster API
function getEventsData(city, eventDateTime) {
    var ticketmaster_api_key = "MFEW1mtqUYUpqm9K3cP6Bg8VbI8KNxDF";
    var ticketmaster_api_url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmaster_api_key}&city=${city}&startDateTime=${eventDateTime}&endDateTime=${eventDateTime}`;
  
    // Make API request to Ticketmaster API
    $.get(ticketmaster_api_url, function(data) {
      if (data._embedded && data._embedded.events && data._embedded.events.length > 0) {
        var venue = data._embedded.events[0]._embedded.venues[0]; // Get first event and its first venue
        var venueLat = venue.location.latitude;
        var venueLng = venue.location.longitude;
        var eventTime = Math.floor(new Date(eventDateTime).getTime() / 1000); // Convert event datetime to Unix timestamp in seconds
        console.log([venue, venueLat, venueLng, eventTime]);
        // weatherAPI(eventLongitude, eventLatitude, eventDateTime) // Get weather data for the event location and time
      } else {
        console.log("No events found");
      }
    });
  }
  
  //test with 
  //getEventsData('London','2023-03-19T19:17:00Z');