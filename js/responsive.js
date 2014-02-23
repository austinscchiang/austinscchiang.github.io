var photoOneOnScreen = false;
var photoTwoOnScreen = false;
var photoThreeOnScreen = false;
var distance = $('nav.navbar').offset().top, $window = $(window);
var navbar_top = false;

$('body').scrollspy({ target: '.navbar-collapse' });

function adjustBlockSize() {
    var heroBlockArray = document.querySelectorAll(".hero");
    var block;
    for(var b = 0; b <heroBlockArray.length ; b++){
    	block = heroBlockArray[b];
	    block.style.fontSize = "9vh";// change the font size
	    block.style.paddingTop="40vh 0 40vh 0";
	}
	var textBlockArray = document.querySelectorAll(".text");
    for(var b = 0; b <textBlockArray.length ; b++){
    	block = textBlockArray[b];
	    block.style.fontSize = "4vh";// change the font size
	    block.style.paddingTop="40vh 0 40vh 0";
	}
}

function setIntroBlockStyle(block){
	block.style.fontSize = "9vh";// change the font size
	block.style.paddingTop="40vh 0 40vh 0"; // top/right/bottom/left
}
 
//if window is resized, adjust webpage specs to respond
window.onresize = function(e){
	adjustBlockSize();
};

//jQuery for smooth-scrolling with navbar links

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        //we dont want an extra offset if returning to top of page
        if(target.selector == "#intro-block"){ 
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
        } else {
            $('html,body').animate({
              scrollTop: target.offset().top + 70
            }, 1000);
        }
        return false;
      }
    }
  });
});


//jQuery function to check if element is onscreen

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

//jQuery to check if navbar is at top of page



$window.scroll(function() {
    if ( $window.scrollTop() >= distance && !navbar_top) {
        $('nav.navbar').toggleClass("navbar-fixed-top");
        navbar_top = true;
    }
    if($('#intro-block').isOnScreen() && navbar_top){
        navbar_top = false;
        $('nav.navbar').toggleClass("navbar-fixed-top");
    }

    scrollOnOne();
    scrollOnTwo();
    scrollOnThree();
});



function scrollOnOne(){
    if(!photoOneOnScreen){
        if($('.photo-one').isOnScreen()){
            photoOneOnScreen = true;
            photoTwoOnScreen = false;
            photoThreeOnScreen = false;
        }
        if(photoOneOnScreen){
            document.body.style.background="url('images/image.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
        }
    }
}

function scrollOnTwo(){
    if(!photoTwoOnScreen){
        if($('.photo-two').isOnScreen()){
            photoOneOnScreen = false;
            photoTwoOnScreen = true;
            photoThreeOnScreen = false;
        }
        if(photoTwoOnScreen){
            document.body.style.background="url('images/cat.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
        }
    }
}

function scrollOnThree(){
    if(!photoThreeOnScreen){
        if($('.photo-three').isOnScreen()){
            photoOneOnScreen = false;
            photoTwoOnScreen = false;
            photoThreeOnScreen = true;
        }
        if(photoThreeOnScreen){
            document.body.style.background="url('images/clock.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
        }
    }
}

