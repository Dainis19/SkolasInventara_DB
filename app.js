$(document).ready(function() { 

var settings = {
"bodyContainerDisplay": "block",
"imageContainerDisplay": "none",
"headerBackground": "#EDC7B7",
};

    $("#iekartas_ievade").css("display", settings.bodyContainerDisplay);
    $("#piederumi").css("display", settings.imageContainerDisplay);
    $("#trauki").css("display","none");
    $("#reagenti").css("display","none");
    $("#apskatit").css("display","none");

    $("#header").css("background", settings.headerBackground);
    $("#header").css("width", "100%");
    $("#header").css("height", "15%");

    $("#body").css("background", "#d9ffb3");
    $("#body").css("width", "100%");
    $("#body").css("height", "80%");
    
    $("#footer").css("background", "#ffcc99");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "10%");
   // $("#footer").css("position", "fixed");

    $("#navigation_header").css("padding-top", "40px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#iekartas_ievade").css("background", "transparent");

    
    $("#iekartas_ievade").css("padding-top", "5%");

    $("#piederumi_ievade").css("padding-top", "5%");

    $("#navigation_buttons p").click(function(){
        $(this).css("color","white");

        var text = $(this).text();

        if(text == "Iekārtas") {
            $("#iekartas_ievade").css("display", "block");
            $("#piederumi").css("display", "none");
            $("#reagenti").css("display","none");
            $("#trauki").css("display","none");
            $("#apskatit").css("display","none");
        }

        if(text == "Piederumi") {
            $("#iekartas_ievade").css("display", "none");
            $("#piederumi").css("display", "block");
            $("#reagenti").css("display","none");
            $("#trauki").css("display","none");
            $("#apskatit").css("display","none");
        }

        if(text == "Reaģenti") {
            $("#iekartas_ievade").css("display", "none");            
            $("#piederumi").css("display", "none");
            $("#reagenti").css("display","block");
            $("#trauki").css("display","none");
            $("#apskatit").css("display","none");
        }

        if(text == "Trauki") {
            $("#iekartas_ievade").css("display", "none");            
            $("#piederumi").css("display", "none");
            $("#reagenti").css("display","none");
            $("#trauki").css("display","block");
            $("#apskatit").css("display","none");
        }

        if(text == "Apskatīt datus") {
            $("#iekartas_ievade").css("display", "none");
            $("#piederumi").css("display", "none");
            $("#reagenti").css("display","none");
            $("#trauki").css("display","none");
            $("#apskatit").css("display","block");
        }

    });

});