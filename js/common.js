$(document).ready(function () {
  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };
  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();
  
});

AOS.init({
duration: 1200,
});

Waves.attach('.btn', ['waves-light']);
Waves.init();


$('form#form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        minlength: 6
      },
    },
    messages: {
      name: {
        required: "Please provide your full name",
      },
      email: {
        required: "Please provide your email",
        email: "Please check the email format"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function() {
          $(form).trigger("reset");
          $('#form-success').modal('show')
        }
      });
    }
  });

 $(window).enllax();
