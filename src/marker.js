const mapboxgl = require("mapbox-gl");
const activity = 'http://i.imgur.com/WbMOfMl.png'
const hotel = 'http://i.imgur.com/D9574Cu.png'
const restaurant = 'http://i.imgur.com/cqR6pUI.png'
const  generic = 'http://i.imgur.com/WbMOfMl.png'

function buildMarker(markerType, coordinates) {
    //create new div element
     let markerDomEl = document.createElement("div");
     markerDomEl.style.width = "32px";
     markerDomEl.style.height = "39px";

     //get correct image tag
     let newMarkerType;
     if(markerType === 'activity') newMarkerType = activity;
     else if(markerType === 'hotel') newMarkerType = hotel;
     else if(markerType === 'restaurant') newMarkerType = restaurant;
     else newMarkerType = generic;

     //assign image tag
     markerDomEl.style.backgroundImage = "url(" + newMarkerType + ")";

     //pass div to mapboxgl.Marker and return element
     return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)
 }

module.exports.buildMarker = buildMarker;