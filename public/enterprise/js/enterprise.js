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
  
  for (i in sections) {
    
    if (sections[i] <= scrollPosition+100)  {
     if(document.querySelector('.nav-link.active')){document.querySelector('.nav-link.active').classList.remove('active');}  
     document.querySelector('a[href*=' + i + ']').classList.add('active');
     console.log(i)
    }
  }

};