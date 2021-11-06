//openweather one call api - will declare austin tx weather, icon and percipitation level (if desired)
//https://openweathermap.org/api/one-call-api

// Mickey's personal apikey for openweathermap one call api
var apiKey = "a89f9cf766ff1ad95290ed78ef14f7bf";

//retrieved url with city name and api key
var austinForecastUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "Austin" + "&appid=" + apiKey + "&units=imperial";

$.ajax({
  url: austinForecastUrl,
  method: "GET"
}).then(function (response) {

  //weather element appended to html as div followed by p element, weather icon, and current temperature of austin, tx
  var displayAustinWeather = $(".weather-element").append("<div>");
  var currentAustinWeather = displayAustinWeather.css({ "font-weight": "lighter" });
  displayAustinWeather.append(currentAustinWeather);

  var currentTemperature = currentAustinWeather.append("<p>");
  currentAustinWeather.append(currentTemperature);

  $(currentAustinWeather).append("<p>" + `<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}.png">`  + response.main.temp + "°F" + "</p>");
});