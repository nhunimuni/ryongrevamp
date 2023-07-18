(function(){
  "use strict";
  window.addEventListener("DOMContentLoaded", init, false);

  function init() {
    hamburgerMenu();
  }

  //Toogle navigation
  function hamburgerMenu() {
    var hamburgerIcon = document.getElementsByClassName("mobilemenu")[0];
    hamburgerIcon.addEventListener('click', function() {
      var header = document.getElementsByTagName("header")[0];
      header.classList.toggle("mobilenav--hidden");
    });

    var links = document.querySelectorAll(".home__nav ul li a");
    for(var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        var header = document.getElementsByTagName("header")[0];
        header.classList.add("mobilenav--hidden");
      });
    }
  }
})()
