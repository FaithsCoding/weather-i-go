// use ticketmaster api key, to use the input for city and long lat to get events, then return them using the bulma cards

 //var ticketmasterApiKey = "";

 // Function to get events data from Ticketmaster API
 /*
function getEventsData(city, eventDateTime) {
    var ticketmaster_api_key = "MFEW1mtqUYUpqm9K3cP6Bg8VbI8KNxDF";
    var ticketmaster_api_url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmaster_api_key}&city=${city}&startDateTime=${eventDateTime}&endDateTime=${eventDateTime}`;
  
    // Make API request to Ticketmaster API
    $.get(ticketmaster_api_url, function(data) {
      // this part for weather from venue
      if (data._embedded && data._embedded.events && data._embedded.events.length > 0) {
       var Eventvenue = data._embedded.events[0]._embedded.venues[0]; // Get first event and its first venue
       var objectoForAllEvents = data._embedded.events[0];
        var venueLat = Eventvenue.location.latitude;
        var venueLng = Eventvenue.location.longitude;
        var eventTime = Math.floor(new Date(eventDateTime).getTime() / 1000); // Convert event datetime to Unix timestamp in seconds
      //  console.log('All Data : \n '+ objectoForAllEvents + ' \n \n Venue :\n' + [Eventvenue, venueLat, venueLng, eventTime]);
       console.log('STUPID RIHARDS : \n' + JSON.stringify(data));
       console.log('STUPID RIHARDS2 : ');
       console.log(' \n' + JSON.stringify(data._embedded.events));
        return  JSON.stringify(data);
        // weatherAPI(eventLongitude, eventLatitude, eventDateTime) // Get weather data for the event location and time
      } else {
        console.log("No events found");
      }
    });
  }
  

  async function getEventsData(city, eventDateTime) {
    const ticketmaster_api_key = "MFEW1mtqUYUpqm9K3cP6Bg8VbI8KNxDF";
    const ticketmaster_api_url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmaster_api_key}&city=${city}&startDateTime=${eventDateTime}&endDateTime=${eventDateTime}`;
  
    try {
        const response = await fetch(ticketmaster_api_url);
        const data = await response.json();
        //console.log(data);
      return(data);
    } catch (error) {
        console.log(error);
        return [];
    }
}
*/
  //test with 
  //getEventsData('London','2023-03-19T19:17:00Z');

  function getEventsData(city, eventDateTime) {
    var endtimed = eventDateTime.slice(0, eventDateTime.length - 9) + '23:59:59Z';
    var ticketmaster_api_key = "MFEW1mtqUYUpqm9K3cP6Bg8VbI8KNxDF";
    var ticketmaster_api_url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmaster_api_key}&city=${city}&startDateTime=${eventDateTime}&endDateTime=${endtimed}`;
    
    return new Promise((resolve, reject) => {
      // Make API request to Ticketmaster API
      $.get(ticketmaster_api_url, function(data) {
        if (data._embedded && data._embedded.events && data._embedded.events.length > 0) {
          var Eventvenue = data._embedded.events[0]._embedded.venues[0]; // Get first event and its first venue
          var objectoForAllEvents = data._embedded.events[0];
          var venueLat = Eventvenue.location.latitude;
          var venueLng = Eventvenue.location.longitude;
          var eventTime = Math.floor(new Date(eventDateTime).getTime() / 1000); // Convert event datetime to Unix timestamp in seconds
          
          // Return JSON object with event data
          resolve({
            events: data._embedded.events,
            venue: {
              data: Eventvenue,
              latitude: venueLat,
              longitude: venueLng,
              //weather:  { data : weatherAPI(venueLng, venueLat, eventDateTime) },
            },
            eventTime: eventTime
          });
        } else {
          reject("No events found");
        }
      });
    });
  }