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
