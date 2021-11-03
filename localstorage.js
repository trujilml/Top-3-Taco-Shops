$(document).ready(function () {
  $('#selectBox').change(function () {
    localStorage.setItem('myFavoriteTaco', $(this).val());
    $('#selectBox').value(localStorage.getItem('myFavoriteTaco'));
  });
});