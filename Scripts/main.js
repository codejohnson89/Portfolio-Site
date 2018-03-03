(function() {

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
    $(".social .fa").hover(function() {
            $(this).addClass("bounce");
        },
        function() {
            $(this).removeClass("bounce");
        });

    const load = () => {
        $(window).ready(function() {
            if ($(window).width() < 992) {
                $(".right").removeClass("text-right");
                $(".right").addClass("text-center");
            } else {
                $(".right").removeClass("text-center");
                $(".right").addClass("text-right");
            }
        });


        $(window).ready(function() {
            if ($(window).width() < 992) {
                $(".left").removeClass("text-left");
                $(".left").addClass("text-center");
            } else {
                $(".left").removeClass("text-center");
                $(".left").addClass("text-left");
            }
        });
    }

    console.log("working");

    load();
})();