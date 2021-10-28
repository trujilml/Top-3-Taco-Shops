
mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5hYm95IiwiYSI6ImNrdjk0dzVmODJhaGwzMHFwNmVhOXYzNTIifQ.hbU5pDSFCqepB13jJ2VATg';

var map = new mapboxgl.Map({
  container: 'map', // Container ID
  style: 'mapbox://styles/mapbox/streets-v11',
  // The map style to use
  center: [-97.6320655, 30.496208], // Starting position [lng, lat]
  zoom: 12 // Starting zoom level
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// Full screen control
map.addControl(new mapboxgl.FullscreenControl());
