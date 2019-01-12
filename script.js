"use strict";
/*window.addEventListener("DOMContentLoaded", init, false);

function init() {
  console.log(menu);
}*/

jQuery(document).ready(function() {
    console.log( "ready!");
    jQuery.ajax({
        type: "GET",
        url: "data/ryongmenu.csv",
        dataType: "text",
        success: function(data) {
          processData(data);
        }
     })
     .done(function() {
       alert( "success" );
     })
     .fail(function() {
       alert( "error" );
     });
});

function processData(allText) {
  var results = Papa.parse(allText, {
     header: true
  });

  var sidenavs = document.getElementsByClassName('sidenav__wrapper--style');
  for (var i = 0 ; i < sidenavs.length; i++) {
    sidenavs[i].addEventListener("click", function() {
      var category = this.classList;
      var catName = category[0].slice(9, 19);
      alert(catName);
    });
}

  /*for (var nav in sidenavs) {
    nav.addEventListener("click", function() {
      alert("hallo");
    });
  };*/


  /*var conOne = document.getElementsByClassName('container__ulOne');
  var conTwo = document.getElementsByClassName('container__ulTwo');
  var div = document.createElement("div");
  var h4 = document.createElement("h4");
  var desc = document.createElement("p");
  var price = document.createElement("p");
  var refer = document.createElement("p");

  for (var i = 0; i < results.length; i++) {
    h4.innerHTML = results.data[i].title;
    desc.innerHTML = results.data[i].description;
    price.innerHTML = results.data[i].price;
    refer.innerHTML = results.data[i].refer;

    results.slice();

    if(i % 2 = 0) {
      div.setAttribute("class", "ul__div--style title-refer1");
      h4.setAttribute("class", "ul__h4--style");
      desc.setAttribute("class", "description1 ul__p--style");
      price.setAttribute("class", "price1 ul__price--style");
      refer.setAttribute("class", "ul__refer--style");
    } else {
      div.setAttribute("class", "ul__div--style title-refer1");
      h4.setAttribute("class", "ul__h4--style");
      desc.setAttribute("class", "description1 ul__p--style");
      price.setAttribute("class", "price1 ul__price--style");
      refer.setAttribute("class", "ul__refer--style");
    }
  }

  div.append(h4);
  div.append(refer);
  conOne[0].append(div);
  conOne[0].append(desc);
  conOne[0].append(price);*/

  console.log(results);
}

/*----------------*/
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
