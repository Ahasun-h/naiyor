jQuery(function($) {




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

    var tabs = document.querySelectorAll(".tabs ul li");
    var tab_wraps = document.querySelectorAll(".tab_wrap");

    tabs.forEach(function(tab, tab_index) {
        tab.addEventListener("click", function() {
            tabs.forEach(function(tab) {
                tab.classList.remove("active");
            })
            tab.classList.add("active");

            tab_wraps.forEach(function(content, content_index) {
                if (content_index == tab_index) {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            })

        })
    })



})