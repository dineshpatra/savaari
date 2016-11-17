(function($) {
    
    // As here we are dealing with images,
    // so, we need to make sure whole content are 
    // loaded (ready is not sufficient)
    $(window).on("load", function() {
        $("body").removeClass("loading");
        $(".loading-screen").fadeOut(600);
        $("#resolution").html($(window).width() + " X " + $(window).height());
    });
    $(window).on("resize", function() { 
        $("#resolution").html($(window).width() + " X " + $(window).height());
    });
})(jQuery);