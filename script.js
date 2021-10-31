
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlzaGRlc3Ryb3llciIsImEiOiJja3ZhaGIwam9hZGNmMnFtYWJoeWY2eDZ5In0.cTey3m_BuUWk9ZIp0n1AhQ';
//mapboxgl.accessToken = 'pk.eyJ1IjoiZmlzaGRlc3Ryb3llciIsImEiOiJja3ZhOXZrYmowMWF3MnVwMXR2Y2xrZ2hvIn0.upIyfuHDvxKbBv_VGVSwPw';
//mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1/draft- draft of maps
//mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1
//below shows to be a const rather than a var- results did not work correctly
var map = new mapboxgl.Map({
  container: 'map',
  
  style: 'mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1', 
  center: [-97.740 , 30.274],
  zoom: 11

});



// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// Full screen control
map.addControl(new mapboxgl.FullscreenControl());