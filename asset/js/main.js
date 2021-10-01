document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
    document.getElementById("content").style.visibility = "hidden";
  } else if (state == "complete") {
    setTimeout(function () {
      //document.getElementById('interactive');

      document.getElementById("content").classList.add("fadein");
      document
        .getElementById("loader-wrapper")
        .classList.add("fadeout", "hide");
      document.getElementById("content").style.visibility = "visible";
    }, 1000);
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




