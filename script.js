
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlzaGRlc3Ryb3llciIsImEiOiJja3ZhaGIwam9hZGNmMnFtYWJoeWY2eDZ5In0.cTey3m_BuUWk9ZIp0n1AhQ';
//mapboxgl.accessToken = 'pk.eyJ1IjoiZmlzaGRlc3Ryb3llciIsImEiOiJja3ZhOXZrYmowMWF3MnVwMXR2Y2xrZ2hvIn0.upIyfuHDvxKbBv_VGVSwPw';
//mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1/draft- draft of maps
//mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1
//below shows to be a const rather than a var- results did not work correctly

var map = new mapboxgl.Map({
  container: 'map',
  
  style: 'mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1', 
  center: [-97.740 , 30.274],
  zoom: 10.5

});

// researched mapbox.com- followed tutorials and coding guidance//
map.on('load', () => {
  map.addSource('places', {
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'properties': {
  'description':
  // added rest. name and matching latitude and longitude will change the <p> with better descriptions//
  '<strong>Veracruz All Natural</strong><p>All natural AND good taste</p>'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-97.788, 30.231]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  // added rest. name and matching latitude and longitude will change the <p> with better descriptions//
  '<strong>Torchys Tacos</strong><p>Damn good tacos!</p>'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-97.752, 30.245]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  // added rest. name and matching latitude and longitude will change the <p> with better descriptions//
  '<strong>TacoDeli</strong><p>Bienvenidos Yall</p>'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-97.74014359, 30.31039002]
}
},
]
}
});
  
  map.addLayer({
  'id': 'places',
  //need to change 'circle' back to original icon//
  'type': 'circle',
  'source': 'places',
  'paint': {
  'circle-color': '#4264fb',
  'circle-radius': 6,
  'circle-stroke-width': 2,
  'circle-stroke-color': '#ffffff'
  }
  });
   
  const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
  });
   
  map.on('mouseenter', 'places', (e) => {
  
  map.getCanvas().style.cursor = 'pointer';
   
  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = e.features[0].properties.description;
   
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });
   
  map.on('mouseleave', 'places', () => {
  map.getCanvas().style.cursor = '';
  popup.remove();
  });
  });


// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// Full screen control
map.addControl(new mapboxgl.FullscreenControl());