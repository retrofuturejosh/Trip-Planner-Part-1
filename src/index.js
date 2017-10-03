const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker').buildMarker;

mapboxgl.accessToken = "pk.eyJ1IjoicmV0cm9mdXR1cmVqb3NoIiwiYSI6ImNqOGJxdHJhdTAwdGoyd3NmdnppZXJrNzMifQ.BXVTS6foXuwigV-zixLkVg";
const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack coordinates
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v9" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

let marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
