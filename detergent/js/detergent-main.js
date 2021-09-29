
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
    console.log(sections)

  });

  window.onscroll = function() {
    var scrollPosition =  document.body.scrollTop ||document.documentElement.scrollTop;

    if(scrollPosition<30){
      var navlink=document.querySelectorAll('#menu-items>.nav-link');
     
      for(var k=0;k<navlink.length;k++){
        navlink[k].classList.remove('active');
        
      }
    }
    console.log(scrollPosition)
    for (i in sections) {
      
      if (sections[i] <= scrollPosition+100)  {
       if(document.querySelector('.nav-link.active')){document.querySelector('.nav-link.active').classList.remove('active');}
       
       document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }

  };

