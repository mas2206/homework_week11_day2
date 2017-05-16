var initialize = function() {
  var mapDiv = document.getElementById("main-map");
  var center = {lat: 55.95, lng: -3.18};
  var mainMap = new MapWrapper(mapDiv, center, 3);
  mainMap.addMarker(center);
}

window.addEventListener("load", initialize);