$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 3000
    });

    var typed = new Typed(".typed", {
        strings: ["Software Enginner.", "Web Developer.", "Web Designer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href")
        var targetPosition = $(targetElement).offset().top;
        $("html,body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });

});