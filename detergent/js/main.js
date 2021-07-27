
  window.addEventListener('scroll', function(e) {
    var scrollpos = window.scrollY;
    if (scrollpos >1 ){
      document.getElementById('detergent-nav').classList.add('bg-light-blue');
    }
    else{
      document.getElementById('detergent-nav').classList.remove('bg-light-blue');
    }
});

AOS.init();