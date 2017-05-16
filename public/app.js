var initialize = function() {
  var mapDiv = document.getElementById("main-map");
  var center = {lat: 55.86, lng: -4.25};
  var mainMap = new MapWrapper(mapDiv, center, 5);
  mainMap.addMarker({lat: 55.95, lng: -3.18});
  mainMap.addMarker({lat: 51.50, lng: -0.12});
  mainMap.addMarker({lat: 51.48, lng: -3.17});
  mainMap.addMarker({lat: 54.59, lng: -5.93});
  mainMap.addMarker({lat: 53.34, lng: -6.26});
}

window.addEventListener("load", initialize);