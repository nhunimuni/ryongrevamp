(function () {
  "use strict";
  window.addEventListener("DOMContentLoaded", init, false);

  function init() {
    closeModalAd();
    showScrollToHomeButton();
    backToTop();
    scrollToSection();
    preventFormScroll();
  }

  //Scroll Eventhandler
  //Handling the visibility of the back-to-top button and
  //Handling the animation of the menucard when scrolling to the menu section
  function showScrollToHomeButton() {
    var sectionAbout = document.getElementById('about');
    var offsetAbout = sectionAbout.offsetTop;
    var scrollTopInit = window.pageYOffset;
    var upArrow = document.getElementsByClassName('uparrow');
    if (scrollTopInit >= 200) {
      upArrow[0].classList.remove("uparrow--none");
    }

    var adModal = document.getElementsByClassName("specials__modal");
    var modVisible = adModal[0].classList.length;
    var isDownSomewhere = false;
    var wasAtMenuSection = true;
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset;
      if (scrollTop >= 200) isDownSomewhere = true;
      else if (scrollTop <= 200) isDownSomewhere = false;
      if (isDownSomewhere == false) upArrow[0].classList.add("uparrow--none");
      if (isDownSomewhere) upArrow[0].classList.remove("uparrow--none");

      //animation menucard
      var menu = document.getElementById("menu");
      var offsetMenu = menu.offsetTop;
      if (window.pageYOffset >= offsetMenu - 200 && wasAtMenuSection) {
        wasAtMenuSection = false;
        animateMenucard();
      }
      changeMenuCategory();
    });
    var offsetMenu = menu.offsetTop;
    if (window.pageYOffset >= offsetMenu - 200) {
      animateMenucard();
    }
  }


  //Menucard animation Handler
  function animateMenucard() {
    var sidenavLineVL = document.getElementsByClassName("sidenavLines__vl")[0];
    var sidenavLineHL = document.getElementsByClassName("sidenavLines__hl")[0];
    var menuContainer = document.getElementsByClassName("menu__container")[0];
    var h3 = document.querySelector(".section__menu h3");
    sidenavLineVL.style.left = "98px"
    sidenavLineVL.style.height = "35px";
    sidenavLineHL.style.width = "970px";
    menuContainer.style.opacity = "1";
    h3.style.opacity = "1";
  }

  //Handling back-to-top button
  function backToTop() {
    var upArrow = document.getElementsByClassName('uparrow')[0];
    upArrow.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
  }

  //Handling the nav links, so that it scrolls smoothly to
  //the clicked section, without adding a hash to the url
  function scrollToSection() {
    var about = document.getElementsByClassName("section__about")[0];
    console.log(about.offsetTop);

    var links = document.querySelectorAll(".home__nav ul li a, .home__mousedown a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        if (this.hash.length) {
          var sectionName = this.hash.slice(1, this.hash.length);
          e.preventDefault();
          var section = document.getElementById(sectionName);
          window.scrollTo(0, section.offsetTop);
        }
      });
    }
  }

  //Closing the modal window
  //Either by clicking the close button or anywhere
  function closeModalAd() {
    var closeButton = document.getElementsByClassName("ad__close");
    var adModal = document.getElementsByClassName("specials__modal");
    closeButton[0].addEventListener('click', function () {
      adModal[0].classList.add("modal--none");
    });

    // When the user clicks anywhere, close it
    window.onclick = function (event) {
      if (event.target == adModal[0]) {
        adModal[0].classList.add("modal--none");
      }
    }
  }

  //Preventing a page reload when form was subitted
  //Listening to 'submit' event
  function preventFormScroll() {
    var form = document.getElementsByClassName("form")[0];
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formResponse();
    });
  }

  //Response to submitting the form
  function formResponse() {
    var res = document.getElementsByClassName("form__response")[0];
    if (window.getComputedStyle(res).visibility == 'hidden') {
      res.style.visibility = 'visible';
      res.style.width = '220px';
      res.style.height = '90px';
      console.log("öh animation??");
    }
    else {
      res.style.visibility = 'hidden';
      res.style.width = '0';
    }

    var textFields = document.querySelectorAll("input[type=text], input[type=email]");
    console.log(textFields);
    for (var i = 0; i < textFields.length; i++) {
      textFields[i].value = "";
    }
    setTimeout(closeRespone, 3000);
  }

  //A helper function to animate closing the response window
  function closeRespone() {
    var res = document.getElementsByClassName("form__response")[0];
    res.style.visibility = 'hidden';
    res.style.width = '0';
    res.style.height = '0';
  }

  //Button click handler, to change content of the menucard
  //when clicking on each category
  function changeMenuCategory() {
    var hl = document.getElementsByClassName("sidenavLines__hl")[0];
    var vl = document.getElementsByClassName("sidenavLines__vl")[0];
    var menuContainer = document.getElementsByClassName("menu__container")[0];
    var categories = document.getElementsByClassName("sidenav__wrapper--style");
    var h3 = document.querySelector(".section__menu h3");

    for (var i = 0; i < categories.length; i++) {

      categories[i].addEventListener('mousedown', function (e) {
        hl.classList.add('changetransition');
        vl.classList.add('changetransition');
        menuContainer.classList.add('changetransition');
        h3.classList.add('changetransition');
        hl.style.width = '0';
        vl.style.height = '0';
        menuContainer.style.opacity = '0';
        h3.style.opacity = '0';
      });

      categories[i].addEventListener('mouseup', function (e) {
        var catOffSetLeft = e.target.x + 27;
        //var vlWidth = window.getComputedStyle(hl).width;
        var vlWidth = 970;
        //var marginVl =  catOffSetLeft-((screen.width-vlWidth.slice(0,vlWidth.length-2)) /2);
        var marginVl = catOffSetLeft - ((screen.width - vlWidth) / 2);

        setTimeout(
          function () {
            hl.classList.remove('changetransition');
            vl.classList.remove('changetransition');
            menuContainer.classList.remove('changetransition');
            h3.classList.remove('changetransition');
            vl.style.left = marginVl + "px";
            vl.style.height = '35px';
            hl.style.width = '970px';
            menuContainer.style.opacity = '1';
            h3.style.opacity = '1';

            var cat = e.path[1].classList[0];
            h3.innerHTML = cat.slice(9, cat.length).toUpperCase();
          }, 1000);
      });
    }
  }
})()
