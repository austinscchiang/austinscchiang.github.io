var currentSidebarItem = 0;
const k_NUMBER_OF_ITEMS = 4;

var MENU_ITEMS = [
    {link: $("#intro"), text: $("#intro-text"), color: "#69D2E7", value: 0},
    {link: $("#about"), text: $("#about-text"), color: "#E0E4CC", alue: 1},
    {link: $("#work"), text: $("#work-text"), color: "#F38630", value: 2},
    {link: $("#contact"), text: $("#contact-text"), color: "#A7DBD8", value: 3}
];


function hideAll(){
    for (var i = 0 ; i < k_NUMBER_OF_ITEMS; i ++){
        var currentIterItem = MENU_ITEMS[i];
        currentIterItem.link.css("color", currentIterItem.color);
        currentIterItem.link.css("background-color", "transparent");
        currentIterItem.text.hide();
    }
}

// $( document ).ready(function() {
//     for (var i = 0 ; i < k_NUMBER_OF_ITEMS; i ++){
//         var currentIterItem = MENU_ITEMS[i];
//         currentIterItem.link.click(function() {
//             if( currentSidebarItem != currentIterItem.value ) {
//                 hideAll();
//                 currentIterItem.text.show();
//                 currentSidebarItem = currentIterItem.value;
//                 currentIterItem.link.css("background-color", currentIterItem.color);
//                 currentIterItem.link.css("color", "white");
//             }
//         });
//     }
// });

$("#intro").click(function() {
    if( currentSidebarItem != 0 ) {
        hideAll();
        $("#intro-text").show();
        currentSidebarItem = 0;
        $("#intro").css("background-color", "#69D2E7");
        $("#intro").css("color", "white");
    }
});

$("#about").click(function() {
    if( currentSidebarItem != 1 ) {
        hideAll();
        $("#about-text").show();
        currentSidebarItem = 1;
        $("#about").css("background-color", "#E0E4CC");
        $("#about").css("color", "white");
    }
});


$("#work").click(function() {
    if( currentSidebarItem != 2 ) {
        hideAll();
        $("#work-text").show();
        currentSidebarItem = 2;
        $("#work").css("background-color", "#F38630");
        $("#work").css("color", "white");
    }
});

$("#contact").click(function() {
    if( currentSidebarItem != 3 ) {
        hideAll();
        $("#contact-text").show();
        currentSidebarItem = 3;
        $("#contact").css("background-color", "#A7DBD8");
        $("#contact").css("color", "white");
    }
});

