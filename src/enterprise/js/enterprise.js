import axios from "axios";

var section = document.querySelectorAll(".section");
var sections = {};
var i = 0;
Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = e.offsetTop;
});

window.onscroll = function () {
  var scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition < 30) {
    var navlink = document.querySelectorAll("#menu-items>.nav-link");

    for (var k = 0; k < navlink.length; k++) {
      navlink[k].classList.remove("active");
    }
  }

  for (i in sections) {
    if (sections[i] <= scrollPosition + 100) {
      if (document.querySelector(".nav-link.active")) {
        document.querySelector(".nav-link.active").classList.remove("active");
      }
      document.querySelector("a[href*=" + i + "]").classList.add("active");
    }
  }
};
window.addEventListener("scroll", function (e) {
  var scrollpos = window.scrollY;
  if (scrollpos > 1) {
    document.getElementById("enterprise-nav").classList.add("bg-light");
  } else {
    document.getElementById("enterprise-nav").classList.remove("bg-light");
  }
});

AOS.init();
document.addEventListener("aos:in:color", ({ detail }) => {
  detail.classList.add("change-color");
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(contactForm);
  const testData = [...formData.entries()];
  var object = {};
  formData.forEach((value, key) => (object[key] = value));
  var json = JSON.stringify(object);
  axios
    .post(
      "./users.php",
      json,

      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    )

    .then((res) => {
      const { data } = res;
      console.log(data);
    })
    .catch((e) => console.log(e));
});
