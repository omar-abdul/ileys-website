
  window.addEventListener('scroll', function(e) {
    var scrollpos = window.scrollY;
    if (scrollpos >1 ){
      document.getElementById('detergent-nav').classList.add('bg-light-blue');
    }
    else{
      document.getElementById('detergent-nav').classList.remove('bg-light-blue');
    }
});

function swap(element){
  document.getElementById("showcase").src=element.dataset.src;
  document.getElementById('img-text').classList.add('fadein');
  document.getElementById('img-text').innerText = element.dataset.caption;
  setTimeout(function(){
    document.getElementById('img-text').classList.remove('fadein');
  },800);
}

var scroll = new SmoothScroll('a[href*="#"]',{
  speed:200,
  header:'[data-scroll-header]'
});

AOS.init();



//Change Active element on scroll

var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;
  

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
    
  
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      
      if (sections[i] <= scrollPosition) {
        document.getElementsByClassName('.nav-link').classList
        document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }
  };

