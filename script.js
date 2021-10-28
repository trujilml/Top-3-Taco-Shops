//open trip link https://opentripmap.com/en/#17.25/30.28881/-97.74212 
//mapbox 

//apikey will be put away for now in order to not get messgaes from gitguardian on piracy - mickey who had to deal with one weather map api so far
var apiKey = "";

var austinTX = "https://www.openstreetmap.org/node/1801308037";

var mapOfAustin = "https://www.openstreetmap.org/#map=18/30.27113/-97.74464";

var mapOfAustinTacoPlaces = "http://api.opentripmap.com/0.1/en/places/bbox?";

//how to break it down
//bbox is responsible for design box asset

// lon_min=38.364285
// &lat_min=59.855685
// &lon_max=38.372809
// &lat_max=59.859052
// &kinds=foods
// &format=geojson
// &apikey=xxxxx"


//austin longitude min = 30.3076859
//austin latitude min = -97.8938272
//austin long max =  30.3129595
//austin latitude max = -98.1403426
//& kinds=foods
//&format-geojson
//apikey=xxxxx"


//review devtools of opentrip map io examples
// function apiGet(method, query) {
//     return new Promise(function (resolve, reject) {
//         var otmAPI =
//             "https://api.opentripmap.com/0.1/en/places/" +
//             method +
//             "?apikey=" +
//             apiKey;
//         if (query !== undefined) {
//             otmAPI += "&" + query;
//         }
//         fetch(otmAPI)
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(function (err) {
//                 console.log("Fetch Error :-S", err);
//             });
//     });
// }

// const pageLength = 5;

// let offset = 0;
// let lon = 0;
// let lat = 0;
// let count = 0;



var searchCity = $(".btn"); 
//no search or click button necessary , all clickable by links

localStorage.saveSearch;

