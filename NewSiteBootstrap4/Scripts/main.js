console.log("this is working");

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#logo").attr("src", "img/logo-white.png");
        $(".navbar").addClass("show");
    } else {
        $("#logo").attr("src", "img/logo.png");
        $(".navbar").removeClass("show");
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1200) {
            $("#skills").addClass("lightSpeedIn");
            $("#skills").removeClass("hidden");
        }
    });
});

$(".fa").hover(function() {
        $(this).addClass("bounce");
    },
    function() {
        $(this).removeClass("bounce");
    });