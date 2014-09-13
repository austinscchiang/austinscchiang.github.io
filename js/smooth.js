$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        //we dont want an extra offset if returning to top of page
        var fixed_navbar_exists = document.querySelectorAll(".navbar");
        var navbar = document.querySelectorAll(".navbar");
        if(target.selector == "#intro-block" || fixed_navbar_exists.length == 0){ 
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
        } else {
            $('html,body').animate({
              scrollTop: target.offset().top - navbar[0].offsetHeight
            }, 500);
        }
        return false;
      }
    }
  });
});

