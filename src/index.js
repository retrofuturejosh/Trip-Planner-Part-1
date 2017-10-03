console.log('shit is workin');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoicmV0cm9mdXR1cmVqb3NoIiwiYSI6ImNqOGJxdHJhdTAwdGoyd3NmdnppZXJrNzMifQ.BXVTS6foXuwigV-zixLkVg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});