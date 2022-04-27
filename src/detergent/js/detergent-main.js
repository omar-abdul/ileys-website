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

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", submitForm);
const line = document.querySelector(".line");
const factBanner = document.querySelector(".factory-banner");

window.addEventListener("scroll", (e) => {
  console.log(factBanner.offsetTop, window.scrollY);
  const y = factBanner.offsetTop;
  if (window.scrollY >= y - 300) line.classList.add("line_animation");
});
