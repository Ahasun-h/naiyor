jQuery(function($) {

    // Mobile Menu

    $("#navbar-toggler").on("click", function(e) {
        e.preventDefault();
        $("#mobile_nav").toggleClass("mobile_nav-width");
        $("#navbar-toggler-bar").toggleClass("active");
        $("#navbar-toggler-close").toggleClass("active");
    })

    $("#closebtn").on("click", function(e) {
        e.preventDefault();
        $("#mobile_nav").toggleClass("mobile_nav-width");
        $("#navbar-toggler-bar").toggleClass("active");
        $("#navbar-toggler-close").toggleClass("active");
    })

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("#navbar").addClass("navbar-scrolled");
        } else {
            $("#navbar").removeClass("navbar-scrolled");
        }
    });

    $(function(){
        new WOW().init(); 
    });
        

    // testimonials
    $('.testimonial_slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1024: {
                items: 2
            }
        }
    });


        // ===== Scroll to Top ==== 
        $(function(){
            //Get the button
            let mybutton = document.getElementById("btn-back-to-top");

            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function () {
                scrollFunction();
            };

            function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
            }
                // When the user clicks on the button, scroll to the top of the document
                mybutton.addEventListener("click", backToTop);

                function backToTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                }
        })

        // Preloader
        $(window).on('load', function() {
            $('#preloader-active').delay(450).fadeOut('slow');
            $('body').delay(450).css({
                'overflow': 'visible'
            });
        });

    



})