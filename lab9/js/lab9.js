/*
    Lab9.js - This file is going to use jQuery buttons to add some stuff and cool things on the page
    Requirements: jQuery must be loaded for this script to work
    Authors: Kye Gorosave & Kevin Su
    Date: November 13, 2023
    Class: ART101 F23 Wes Modes
*/

//Gonna add a button with help from GPT-4.0
$(document).ready(function() {
    // Append a button with the class 'special' to each section(GPT-4 helped me figure out to put it on each one without having to make seperate classes)
    $("#challenge, #problems, #results").each(function() {
        $(this).append('<button class="special">Make Me Fancy</button>');
    });

    // Add click listener to  the function
    $(".special").click(function() {
        var parentDiv = $(this).parent();

        // Toggle fancy class for only the parent div of the clicked button(GPT-4 Added)
        parentDiv.toggleClass("fancy");

        // Change button text based on the class(GPT-4 aided)
        if (parentDiv.hasClass("fancy")) {
            $(this).text("Back to Boring");
        } else {
            $(this).text("Make Me Fancy");
        }
    });
});

