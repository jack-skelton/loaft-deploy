$(function(){$(".element").typed({strings:["modern <strong>web</strong> and <strong>graphic</strong> design.","<strong>digital</strong> specialists and <strong>growth</strong> hackers"],typeSpeed:30,loop:!0,showCursor:!0,backDelay:3500,startDelay:0,preStringTyped:function(){$("#typer").toggleClass("typer-change")}})}),$(function(){var e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"#about",triggerHook:0,offset:0}).setClassToggle("nav","below-landing").addTo(e),new ScrollMagic.Scene({triggerElement:"#typer",triggerHook:0,offset:100}).setClassToggle("nav","scrolled-landing").addTo(e),new ScrollMagic.Scene({triggerElement:"#about",triggerHook:.9}).setClassToggle("#about","show").addTo(e),new ScrollMagic.Scene({triggerElement:"#services",triggerHook:.6}).setClassToggle("#services","show").addTo(e),new ScrollMagic.Scene({triggerElement:"#work",triggerHook:.6}).setClassToggle("#work","show").addTo(e)}),$(document).ready(function(){$(".scrollspy").scrollSpy({scrollOffset:0})}),$(document).ready(function(){$(".buckets1").hover(function(){$(".line1").addClass(".blurb-container opacity"),$(".line0").removeClass(".blurb-container opacity")},function(){$(".line1").removeClass(".blurb-container opacity"),$(".line0").addClass(".blurb-container opacity")}),$(".buckets2").hover(function(){$(".line2").addClass(".blurb-container opacity"),$(".line0").removeClass(".blurb-container opacity")},function(){$(".line2").removeClass(".blurb-container opacity"),$(".line0").addClass(".blurb-container opacity")}),$(".buckets3").hover(function(){$(".line3").addClass(".blurb-container opacity"),$(".line0").removeClass(".blurb-container opacity")},function(){$(".line3").removeClass(".blurb-container opacity"),$(".line0").addClass(".blurb-container opacity")})});