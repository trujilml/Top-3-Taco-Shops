var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var tacoForm = document.getElementById('image');

if (!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}

function setStyles() {
  var currentTaco = localStorage.getItem('image');

  document.getElementById('image').value = currentTaco;

  imgElem.setAttribute('src', currentTaco);
}

tacoForm.onchange = populateStorage;