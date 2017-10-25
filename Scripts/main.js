$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#logo").attr("src", "img/logo-white.png");
        $(".navbar").addClass("show");
        $("#navlist").addClass("slideInRight");
        $("#navlist").removeClass("pull-right");
    } else {
        $("#logo").attr("src", "img/logo.png");
        $(".navbar").removeClass("show");
        $("#navlist").addClass("pull-right");
        $("#navlist").removeClass("slideInRight");

    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1700) {
            $("#skills").addClass("lightSpeedIn");
            $("#skills").removeClass("hidden");
        }
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            $("#okc .home-city").addClass("fadeInUpBig");
            $("#okc .home-city").removeClass("hidden");
        }
    });


});

function mobileResize() {
    if (0 == 0) {
        if ($(window).width() < 415) {
            $("#mainImg").removeClass("bg-header");
            console.log("1");
        } else {
            $("#mainImg").addClass("bg-header");
            console.log("2");
        }
    }
}
$(".social .fa").hover(function() {
        $(this).addClass("bounce");
    },
    function() {
        $(this).removeClass("bounce");
    });

mobileResize();