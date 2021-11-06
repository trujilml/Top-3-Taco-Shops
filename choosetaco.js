var select = document.querySelector("#select")
select.setAttribute("selected", "true")
if (localStorage.getItem('myFavoriteTaco') === null) {
  localStorage.setItem('myFavoriteTaco', "No taco selected");
}
else {
  var currentTaco = localStorage.getItem('myFavoriteTaco')
  var currentTacoId = "#" + currentTaco
  console.log(currentTacoId);
  var currentTacoEl = document.querySelector(currentTacoId)
  currentTacoEl.setAttribute("selected", "true")

  const result = document.querySelector('#result');
  result.textContent = `You like ${currentTaco}`;
}