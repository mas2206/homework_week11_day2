var initialize = function() {

  var mapDiv = document.getElementById("main-map");
  var center = {lat: 55.86, lng: -4.25};
  var mainMap = new MapWrapper(mapDiv, center, 5);

  mainMap.addMarker({lat: 55.95, lng: -3.18}, "Edinburgh - capital city of Scotland");
  mainMap.addMarker({lat: 51.50, lng: -0.12}, "London - capital city of England");
  mainMap.addMarker({lat: 51.48, lng: -3.17}, "Cardiff - capital city of Wales");
  mainMap.addMarker({lat: 54.59, lng: -5.93}, "Belfast - capital city of Northern Ireland");
  mainMap.addMarker({lat: 53.34, lng: -6.26}, "Dublin - capital city of the Republic of Ireland");

  var ausButton = document.getElementById("aus-button");

  var clickAustraliaButton = function(){
    mainMap.googleMap.setCenter({lat: -25.27, lng: 133.77});
    mainMap.googleMap.setZoom(4);
  }
  ausButton.addEventListener('click', clickAustraliaButton);

};

window.addEventListener("load", initialize);