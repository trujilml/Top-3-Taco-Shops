//modal 2.0

var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.getElementById('select');

var optionEl = document.getElementById('option');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "favorite taco" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect() {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " taco selected - " + (new Date()).toString();
});

//figure out local storage for 
optionEl.addEventListener('save', function onSelect() {
   optionEl.localStorage;
})













// $('.dropdown-trigger').dropdown();




// localStorage.setItem(".li", "tabindex");

// $("dropdown-content").localStorage.setItem;

// var tacoTotal = 0;

// var faveTaco = $("#dropdown1").append("<p>" + ".li" + "</p>");

// var local = localStorage.setItem(faveTaco, tacoTotal);
// tacoTotal += 1;





