var select = document.querySelector("#select")
select.setAttribute("selected", "true")
if (localStorage.getItem('myFavoriteTaco') === null) {
  localStorage.setItem('myFavoriteTaco', "No taco selected");
}
else {
  if (localStorage.getItem('myFavoriteTaco') === "Crossroads") {
    document.write("Crossroads");
    document.querySelector("#crossroads").setAttribute("selected", "true")
  } else if (localStorage.getItem('myFavoriteTaco') === "Baja Shrimp") {
    document.querySelector("#bajashrimp").setAttribute("selected", "true")
    document.write("Baja Shrimp");
  } else if (localStorage.getItem('myFavoriteTaco') === "Green Chile Pork") {
    document.querySelector("#greenchile").setAttribute("selected", "true")
    document.write("Green Chile Pork");
  } else if (localStorage.getItem('myFavoriteTaco') === "Trailer Park") {
    document.querySelector("#trailerpark").setAttribute("selected", "true")
    document.write("Trailer Park");
  } else if (localStorage.getItem('myFavoriteTaco') === "Fried Avocado") {
    document.querySelector("#fried").setAttribute("selected", "true")
    document.write("Fried Avocado");
  } else if (localStorage.getItem('myFavoriteTaco') === "Cowboy") {
    document.querySelector("#cowboy").setAttribute("selected", "true")
    document.write("Cowboy");
  } else if (localStorage.getItem('myFavoriteTaco') === "Shrimposito") {
    document.querySelector("#shrimposito").setAttribute("selected", "true")
    document.write("Shrimposito");
  } else if (localStorage.getItem('myFavoriteTaco') === "Puerco Verde") {
    document.querySelector("#puercoverde").setAttribute("selected", "true")
    document.write("Puerco Verde");
  } else if (localStorage.getItem('myFavoriteTaco') === "Pollo Fantastico") {
    document.querySelector("#pollo").setAttribute("selected", "true")
    document.write("Pollo Fantastico");
  } else if (localStorage.getItem('myFavoriteTaco') === "Freakin' Vegan") {
    document.querySelector("#vegan").setAttribute("selected", "true")
    document.write("Freakin' Vegan");
  } else if (localStorage.getItem('myFavoriteTaco') === "Steak") {
    document.querySelector("#steak").setAttribute("selected", "true")
    document.write("Steak");
  } else if (localStorage.getItem('myFavoriteTaco') === "Fish Taco") {
    document.querySelector("#fish").setAttribute("selected", "true")
    document.write("Fish Taco");
  } else if (localStorage.getItem('myFavoriteTaco') === "Al Pastor") {
    document.querySelector("#alpastor").setAttribute("selected", "true")
    document.write("Al Pastor");
  } else if (localStorage.getItem('myFavoriteTaco') === "Chicken") {
    document.querySelector("#chicken").setAttribute("selected", "true")
    document.write("Chicken");
  } else if (localStorage.getItem('myFavoriteTaco') === "Migas") {
    document.querySelector("#migas").setAttribute("selected", "true")
    document.write("Migas");

    const result = document.querySelector('#result');
    result.textContent = `You like ${localStorage.getItem('myFavoriteTaco')}`;
  }
}