let map;
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
