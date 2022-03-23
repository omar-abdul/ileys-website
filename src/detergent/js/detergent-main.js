window.addEventListener("scroll", function (e) {
  var scrollpos = window.scrollY;
  if (scrollpos > 1) {
    document.getElementById("detergent-nav").classList.add("bg-light-blue");
  } else {
    document.getElementById("detergent-nav").classList.remove("bg-light-blue");
  }
});

function swap(element) {
  document.getElementById("showcase").src = element.dataset.src;
  document.getElementById("showcase").classList.add("fadein");
  document.getElementById("img-text").classList.add("fadein");
  document.getElementById("img-text").innerText = element.dataset.caption;
  setTimeout(function () {
    document.getElementById("showcase").classList.remove("fadein");
    document.getElementById("img-text").classList.remove("fadein");
  }, 800);
}

//var scroll = new SmoothScroll('a[href*="#"]',{
//speed:200,
//header:'[data-scroll-header]'
//});



//Change Active element on scroll

var section = document.querySelectorAll(".section");
var sections = {};
var i = 0;
Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = e.offsetTop;
});

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;

let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"), 200);
};
const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 200);
};

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// window.onscroll = function () {
//   var scrollPosition =
//     document.body.scrollTop || document.documentElement.scrollTop;

//   if (scrollPosition < 30) {
//     var navlink = document.querySelectorAll("#menu-items>.nav-link");

//     for (var k = 0; k < navlink.length; k++) {
//       navlink[k].classList.remove("active");
//     }
//   }

//   for (i in sections) {
//     if (sections[i] <= scrollPosition) {
//       if (document.querySelector(".nav-link.active")) {
//         document.querySelector(".nav-link.active").classList.remove("active");
//       }

//       document.querySelector("a[href*=" + i + "]").classList.add("active");
//     }
//   }
// };
