const mapboxgl = require("mapbox-gl");

const activity = 'http://i.imgur.com/WbMOfMl.png'
const hotel = 'http://i.imgur.com/D9574Cu.png'
const restaurant = 'http://i.imgur.com/cqR6pUI.png'
const  generic = 'http://i.imgur.com/WbMOfMl.png'


function buildMarker(markerType, coordinates) {

     const markerDomEl = document.createElement("div");
     markerDomEl.style.width = "32px";
     markerDomEl.style.height = "39px";

     var newMarkerType;
     if(markerType === 'activity') newMarkerType = activity;
     else if(markerType === 'hotel') newMarkerType = hotel;
     else if(markerType === 'restaurant') newMarkerType = restaurant;
     else newMarkerType = generic;


     markerDomEl.style.backgroundImage = "url(newMarkerType)";
     new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map);

     console.log('YEAhhhhhhhh, ', markerType);
 }


module.exports.buildMarker = buildMarker;


 // const markerDomEl = document.createElement("div");
 // markerDomEl.style.width = "32px";
 // markerDomEl.style.height = "39px";
 // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
 // new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);