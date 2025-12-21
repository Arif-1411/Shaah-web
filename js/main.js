(function ($) {
    "use strict";

    // 1. Spinner Logic
    $(window).on('load', function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
        // പേജ് ലോഡ് ചെയ്യുമ്പോൾ തന്നെ വിസിബിൾ ആയ സെക്ഷനുകൾ കാണിക്കാൻ
        reveal();
    });

    // 2. WOW.js (ഉണ്ടെങ്കിൽ മാത്രം)
    if (typeof WOW === 'function') {
        new WOW().init();
    }

    // 3. Scroll Events (Sticky Navbar & Back to Top)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('navbar-sticky');
        } else {
            $('.navbar').removeClass('navbar-sticky');
        }

        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
        
        // സ്ക്രോൾ ചെയ്യുമ്പോൾ reveal ഫംഗ്ഷൻ വിളിക്കുന്നു
        reveal();
    });

    // 4. Back to top click
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // 5. Reveal Animation Logic
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // 150-ൽ നിന്ന് 100 ആക്കി (പെട്ടെന്ന് തെളിയാൻ)

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

})(jQuery);