console.log("this is working");

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#logo").attr("src", "img/logo-white.png");
        $(".navbar").addClass("show");
    } else {
        $("#logo").attr("src", "img/logo.png");
        $(".navbar").removeClass("show");
    }

    $(document).scroll(function() {

    })
});