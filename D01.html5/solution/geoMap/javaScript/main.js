window.addEventListener("load", function () {
  mapObject = this.document.getElementById("map");
  dataMaPObject = this.document.getElementById("dataMap");
  buttonObject = this.document.querySelector('button[name="map"]');
  buttonObject2 = this.document.querySelector('button[name="mapInfo"]');
  sectionObject = this.document.querySelectorAll("section")[0];
  sectionObject2 = this.document.querySelectorAll("section")[2];
  input1 = this.document.querySelectorAll("input")[0];
  input2 = this.document.querySelectorAll("input")[1];
  input3 = this.document.querySelectorAll("input")[2];
  input4 = this.document.querySelectorAll("input")[3];
});

function getlocationfun() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(allowPermission, blockPermission);
  } else {
    mapObject.innerHTML = "something went wrong";
  }
}
function allowPermission(event) {
  lat = event.coords.latitude;
  lon = event.coords.longitude;
  var location = new google.maps.LatLng(lat, lon);
  var specs = { zoom: 20, center: location };
  console.log(event);
  new google.maps.Map(mapObject, specs);
  input1.value = event.coords.latitude;
  input2.value = event.coords.longitude;
  input3.value = event.coords.accuracy;
  timestamp = new Date(event.timestamp);
  input4.value = timestamp;
}
function blockPermission() {
  mapObject.innerHTML = "something went wrong";
  mapObject.innerHTML = "something went wrong";
  mapObject.style.color = "red";
  mapObject.style.fontSize = "25px";
}

const displayMap = function () {
  mapObject.style.visibility = "visible";
  dataMaPObject.style.visibility = "hidden";
  sectionObject.classList.add("mainSection2");
  sectionObject.classList.remove("mainSection");
  sectionObject2.classList.add("dataSection2");
  sectionObject2.classList.remove("dataSection");
  getlocationfun();
};
const detaledInfo = function () {
  dataMaPObject.style.visibility = "visible";
  mapObject.style.visibility = "hidden";
  sectionObject.classList.remove("mainSection2");
  sectionObject.classList.add("mainSection");
  sectionObject2.classList.remove("dataSection2");
  sectionObject2.classList.add("dataSection");
};
