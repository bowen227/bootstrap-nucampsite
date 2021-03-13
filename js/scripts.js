$(function() {
    // SELECT CAROUSEL DOM NODE ADD CAROUSEL METHOD WITH INTERVAL OF 2S PAUSE FALSE
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    // ADD CLICK EVENT TO CAROUSEL BUTTON
    $("#carouselButton").on("click", function() {
        // CHECK BUTTON CLASS FOR FA-PAUSE IF EXISTS PAUSE CAROUSEL AND CHANGE CLASS TO FA-PLAY
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
            // SAME AS IF BUT REMOVE FA-PLAY CLASS AND ADD FA-PAUSE
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    // ADD CLICK EVENT TO RESERVE BUTTON TO TOGGLE HIDE SHOW MODAL
    $("#reserveButton").on("click", () => {
        $("#reserveModal").modal("toggle")
    })
    // ADD CLICK EVENT TO LOGIN BUTTON TO TOGGLE HIDE SHOW MODAL
    $("#loginButton").on("click", () => {
        $("#loginModal").modal("toggle")
    })
});