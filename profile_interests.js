$(document).ready(function() {

    // $(".interests-card").hover(
    //     function() {
    //     if ($(this).parent().css("background-color") != "black") {
    //         $(this).parent().css('background-color', "rgb(52,58,64)");
    //         $(this).parent().css('color', "#FFFFFF");
    //     }}, function() {
    //     if ($(this).parent().css("background-color") != "black") {
    //         $(this).parent().css('background-color', "white");
    //         $(this).parent().css('color', "rgb(52,58,64)");
    //     }});

    // $(".interests-card").parent().click(
    //     function() {
    //         if ($(this).css("background-color") == "black") {
    //             $(this).css('background-color', "white");
    //             $(this).css('color', "rgb(52,58,64)");
    //         } else {
    //             $(this).css('background-color', "black");
    //             $(this).css('color', "#FFFFFF");
    //         }
            
    //     });

    $(".interests-card").hover(function() {
        $(this).parent().css('background-color', "rgb(52,58,64)");
        $(this).parent().css('color', "#FFFFFF");
    }, function() {
        $(this).parent().css('background-color', "white");
        $(this).parent().css('color', "rgb(52,58,64)");
    });

    $(".interests-card").parent().click(
        function() {
            if ($(this).prop("selected") == true) {
                $(this).attr("selected",false);
                $(this).css('background-color', "white");
                $(this).css('color', "rgb(52,58,64)");
            } else {
                $(this).attr("selected",true);
                $(this).css('background-color', "black");
                $(this).css('color', "#FFFFFF");
            }
            
        });



});