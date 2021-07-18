
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('content').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         //document.getElementById('interactive');
         
         document.getElementById('content').classList.add("fadein");
         document.getElementById('loader-wrapper').classList.add("fadeout","hide");
         document.getElementById('content').style.visibility="visible";         
      },1000);
  }
}

window.addEventListener('scroll', function(e) {
    var scrollpos = window.scrollY;
    if (scrollpos >1 ){
      document.getElementById('enterprise-nav').classList.add('bg-light');
    }
    else{
      document.getElementById('enterprise-nav').classList.remove('bg-light');
    }
});
var slideup={
  distance:'200%',
  origin:'bottom',
  opacity:null,
  delay:400
}
var rightReveal={
  distance:'200%',
  origin:'right',
  opacity:null,
  delay:400
}
var lefReveal ={
  distance:'200%',
  origin:'left',
  opacity:null,
  delay:400
}
ScrollReveal().reveal('.slideup',slideup);
ScrollReveal().reveal('.right-reveal',rightReveal);
ScrollReveal().reveal('.left-reveal',lefReveal);


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
});