window.addEventListener("DOMContentLoaded", init, false);

var str = "upsi";

function init() {
  //initMap();
  //csvParse(uff);
  var reader = new FileReader();
  reader.readAsText(str);
  csvParse(str);
}


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});

  console.log(map);
}

/*----------------*/

function csvParse(csv) {
  console.log(csv);
  var objects = $.csv.toArray(csv);
  console.log(objects);
}
