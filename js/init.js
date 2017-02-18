

$(function(){ 
        $(".element").typed({
        //strings: ["web developers.", "graphic designers.","solution architects."],
        //"modern <strong>web</strong> and <strong>fraphic</strong> design. "<strong>digital</strong> specialists and <strong>growth</strong> hackers"
        strings: ["modern <strong>web</strong> and <strong>graphic</strong> design", "<strong>digital</strong> specialists and <strong>growth</strong> hackers", "a design studio called <strong>Loaft.</strong>"],
        typeSpeed: 30,
        loop: false,
        showCursor: true,
        backDelay: 2000,
        startDelay: 0
        /*preStringTyped: function() {
            $("#typer").toggleClass("typer-change")
        }*/
    })
});

// Scrollmagic Init
// To udnerstand how works: http://scrollmagic.io/examples/basic/scene_manipulation.html
$(function(){ 
    var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({triggerElement: "#about", triggerHook: 0, offset: -50})
        .setClassToggle("nav", "below-landing") // add class toggle
        .addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#typer", triggerHook: 0, offset: 100})
        .setClassToggle("nav", "scrolled-landing") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#about", triggerHook: 0.9})
        .setClassToggle("#about", "show") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#services", triggerHook: 0.9})
        .setClassToggle("#services", "show") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#work", triggerHook: 0.60})
        .setClassToggle("#work", "show") // add class toggle
        .addTo(controller)

    
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy({scrollOffset: 0});
});



$(document).ready(function() {     
    $('.buckets1').hover(function(){     
        $('.line1').addClass('.blurb-container opacity');
        $('.line0').removeClass('.blurb-container opacity');    
    },     
    function(){    
        $('.line1').removeClass('.blurb-container opacity');
        $('.line0').addClass('.blurb-container opacity');      
    });
     $('.buckets2').hover(function(){     
        $('.line2').addClass('.blurb-container opacity');
        $('.line0').removeClass('.blurb-container opacity');    
    },     
    function(){    
        $('.line2').removeClass('.blurb-container opacity');
        $('.line0').addClass('.blurb-container opacity');      
    });
     $('.buckets3').hover(function(){     
        $('.line3').addClass('.blurb-container opacity');
        $('.line0').removeClass('.blurb-container opacity');    
    },     
    function(){    
        $('.line3').removeClass('.blurb-container opacity');
        $('.line0').addClass('.blurb-container opacity');      
    });
});  

    