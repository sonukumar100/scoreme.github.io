$('.owl-one').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      smartSpeed:450,
      autoplayTimeout:1500,
      autoplayHoverPause:true,
      responsive:{
      0:{
      items:1
      },
      600:{
      items:1
      },
      1000:{
      items:2
      }
      }
      });

      $('.owl-two').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:800,
      autoplayHoverPause:true,
      responsive:{
      0:{
      items:1
      },
      600:{
      items:1
      },
      1000:{
      items:6
      }
      }
      });



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function validation(){
      var form = document.getElementById("form");
      var email = document.getElementById("email").value;
      var text = document.getElementById("text");
      var pattern  = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (email.match(pattern)){
            form.classList.add("valid");
            form.classList.remove("invalid");
            text.innerHTML = "your email address in valid";
            text.style.color = "#00ff00";
      }else{
            form.classList.remove("valid")
            form.classList.add("invalid")
            text.innerHTML = "your enter a valid address";
            text.style.color = "red";
      }
      if (email === ""){
            form.classList.remove("valid");
            form.classList.remove("invalid");
            text.innerHTML = "";
            text.style.color = "#00ff00";
      }
}




document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Bank Statement Analyser", "ITR Analysis", "GSTR Analysis", "Financial Statement Analysis"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".ban-head").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        });
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});







function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value-50", 0, 50, 1000);
animateValue("value-5", 0, 5, 1000);
animateValue("value-1", 0, 1, 1000);




var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});