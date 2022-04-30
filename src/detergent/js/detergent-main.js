import axios from "axios";
import { submitForm } from "./contact-form";
import "./slider";
import "./loading-event";

document.getElementById("content").style.opacity = 0;
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
  } else if (state == "complete") {
    setTimeout(function () {
      //document.getElementById('interactive');

      document.getElementById("content").classList.add("fadein");
      document
        .getElementById("loader-wrapper")
        .classList.add("fadeout", "hide");
      document.getElementById("content").style.opacity = 1;
    }, 1000);
  }
};

window.addEventListener("scroll", function (e) {
  var scrollpos = window.scrollY;
  if (scrollpos > 1) {
    document.getElementById("detergent-nav").classList.add("bg-light-blue");
  } else {
    document.getElementById("detergent-nav").classList.remove("bg-light-blue");
  }
});

AOS.init();

// Change Active element on scroll

// var section = document.querySelectorAll(".section");
// var sections = {};
// var i = 0;
// Array.prototype.forEach.call(section, function (e) {
//   sections[e.id] = e.offsetTop;
// });

/*contact form  action */
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", submitForm);
/* End contact form */

/* Underline animation under banner texts */
const line = document.querySelectorAll(".line");

const bannerWrapper = {};
Array.prototype.forEach.call(line, (e, index) => {
  bannerWrapper[index] = e.offsetParent.offsetTop + e.offsetTop;
});

const coreValues = document.getElementById("core-values");
const verticalLine = document.querySelector(".vertical-line");
const factoryBanner = document.querySelector(".factory-banner");

const c_height = coreValues.offsetParent.offsetTop + coreValues.offsetTop;
let line_height;

window.addEventListener("scroll", (e) => {
  for (var i in bannerWrapper) {
    if (window.scrollY >= bannerWrapper[i] - 300)
      line[i].classList.add("line_animation"); //Add animation
  }

  if (window.scrollY >= c_height - 300)
    verticalLine.setAttribute("style", `height:95%`);
});
