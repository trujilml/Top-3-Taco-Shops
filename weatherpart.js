//openweather one call api - will declare austin tx weather, icon and percipitation level (if desired)
//https://openweathermap.org/api/one-call-api

var apiKey = "a89f9cf766ff1ad95290ed78ef14f7bf";

var austinForecastUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "Austin" + "&appid=" + apiKey + "&units=imperial";

$.ajax({
  url: austinForecastUrl,
  method: "GET"
}).then(function (response) {

  var displayAustinWeather = $(".weather-element").append("<div>");
  var currentAustinWeather = displayAustinWeather.css({ "background-color": "red", "color": "white", "font-weight": "bold" });
  displayAustinWeather.append(currentAustinWeather);

  var currentTemperature = currentAustinWeather.append("<p>");
  currentAustinWeather.append(currentTemperature);

  $(currentAustinWeather).append("<p>" + response.main.temp + "°F" +`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}.png">` + "</p>");

});