var nav = document.querySelector("nav ul"),
    navToggle = document.querySelector("nav .skip");
if (navToggle) {
  navToggle.addEventListener("click",
  function(e) {
  if (nav.className == "open") {
    nav.className = "";
  } else {
    nav.className = "open";
  }
  e.preventDefault();
  }, false);
}

/* Any click outside of the nav element will close the menu if it's open */
var specifiedElement = document.querySelector('nav');
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);
  if (!isClickInside && nav.className == "open") {
    nav.className = "";
  } 
});