let map;
//var superLAT = '';
//var superLONG = '';
var scripted = document.createElement("script");
scripted.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOjxJMpuA2kdaSaoWGjZUXZEkhRsfDZnM&callback=initMap&libraries=places";
scripted.defer = true;
scripted.async = false;
//  script.crossOrigin = '';
// script.onload = resolve;
// script.onerror = reject;
document.body.appendChild(scripted); // Append to the body instead of the head

function initMap() {
  if (navigator.geolocation) {
    //navigator.geolocation.getCurrentPosition(showPosition);
    //

    navigator.geolocation.getCurrentPosition(function (position) {
      //     modalFactory('LocationTest', 'Testing location', 'Latitude: ' + position.coords.latitude + '<br>' + 'Longitude: ' + position.coords.longitude, true);
      //  console.log("Latitude: " + position.coords.latitude);
      //    console.log("Longitude: " + position.coords.longitude);
      var superLAT = position.coords.latitude;
      var superLONG = position.coords.longitude;
      map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 14,
      });
    });
  } else {
    var error = "Geolocation is not supported by this browser.";
    errorHandler(error);
  }
}

// References the map
const mapElement = document.getElementById("map");
// To hide the map before it is initialised
mapElement.style.display = "none";

window.initMap = initMap;


function displayEventsOnMap(eventsData) {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
  });

  // Loop over events data and create a marker for each location
  for (const eventData of eventsData) {
    const { latitude, longitude } = eventData.venue;
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });

    // Create info window for the marker and attach click event listener to show the event card
    const infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(createEventCard(eventData));
      infowindow.open(map, marker);
    });
  }
}