# Top 3 - Taco Shop Locator for Austin, Texas

## Application Purpose
Top 3 is a taco shop locator that spots out the top three taco shops in Austin, Texas and allows users to view these three taco shops and their popular offerings, followed by voting for their favorite taco from that respective shop, and viewing the map below that shows the exact map location of their favorite taco shop.

## Application Demonstration
When users visit the Top 3 website, they are introducted to a major header showing the official website logo, a phrase indicating its purpose ("Taco Shops in Austin"), its slogan ("Any day is a good day for a taco!") which brings significance for the current weather forecast indicator right next to it. The weather forecast includes an icon highlighting the current weather in Austin followed by its temperature in farenheit degrees. This was developed with the use of the OpenWeather One Call API which fetches current weather forecasts from any city in the world.

Following the main header, the user is introduced to three distinctive cards of information. These three cards display the top three taco shops in Austin, Texas, respectively Torchy's Tacos, Taco Deli, and Veracruz All Natural, which are highlighted by three significant details. First is the title of the taco shop and a fact about the shop, followed with the address of their first shop location and a phone number to call that location. The significant aspect is the Top Picks category, which allows users to see the top five tacos to try at that particular shop. When the user hovers their mouse over the name of a particular taco (say Trailer Park from Torchy's Tacos), a toolpick appears showing the user the ingredients of that taco (which for the Trailer Park taco consists of fried chicken, green chiles, lettuce, pico de gallo and cheddar jack cheese with poblano sauce on a flour tortilla. They also have the option to get it "trashy" which removes the lettuce and adds queso.). From there, users are able to look over the popular tacos offered at the top three taco places in Austin, Texas. 

Once they are done looking over the three cards of information of the taco places, the user will then view a dropdown poll asking them to choose their favorite taco. Based on the Top Picks from each of the three places, there are fifteen tacos displayed on the poll. Users will be able to select one taco from the dropdown function and the selected taco is then saved into the user's local storage of their browser. The saved taco will remain in the local storage unless the user finds themself another favorite taco to select on the dropdown function. 

After viewing the dropdown content, the user is able to see the map highlighting the three taco shop locations in Austin, which are shown on the map with a fork and knife icon. This map content was developed with the Mapbox API that allows developers to fetch and establish particular locations to be present for the user to see, which in this case is the Top 3 Taco Shops. The footer is then presented and concludes the overall content of the application.

## Screenshots
<!-- will be collected when website is near completion (prior to class and presentation on Wednesday night), can also be presented with above description of the application -->

## Application Developed With
<!-- can also explain specifics with the apis and materialize - basically what did they implement for the site entirely and/or what function is responsible for making what happen -->
* HTML
* CSS
* JavaScript 
* Materialize 
* Mapbox
* OpenWeather - One Call API: This API was used to collect the information that directly pulls the current weather forecast for a specific city, which is Austin, Texas for this application. With AJAX, it pulls information of the URL and with jQuery, appended the information to its own div content to display the weather forecast with the current temperature and an appended image source highlighting the current weather status.
* jQuery & jQuery UI - jQuery was implemented in this application in numerous ways. It allowed its use to function with both the OpenWeather and Mapbox APIs to allow the map to display its coordinates of the taco shop location and display the current weather forecast for Austin, Texas. 

## Developer work committed
<!-- I was thinking right here we would type down what work was committed to this project. Ex: Kevin - taco feature and local storage, Akhila - html css and materialize site design, Jeff - map api js add ons and final rundown of project, Mekayla - github, weatherapi, site header, readme file -->

## Repository Link and Deployed Application Website
* Project Repository - https://github.com/trujilml/taco-shop-locator 
* Deployed Website - 
<!-- deployed website once everything is pushed into main -->

## Further Development and Future Notes
<!-- here we can be able to demonstrate personal concerns with failed implements of website, what we can include for future versions of the website and what would fit with tacos -->                                                   

## Special Thanks
Special thanks to our instructor Torre Taylor and our teaching assistants at The Coding Bootcamp at the University of Texas at Austin. 🤘🏼

## Contribution

Developed with ❤️ by Kevin, Akhila, Mekayla, and Jeff

© 2021 All Rights Reserved.