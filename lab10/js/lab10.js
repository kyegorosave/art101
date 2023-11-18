/*
   lab10.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Kye Gorosave & Kevin Su
   Date: November 17, 2023
*/
// Function that makes a whole new div in the output when the button is pressed
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// Adding a click listener for the "make-convo" button that makes the function actually run when the button is pressed
$(document).ready(function() {
    $("#make-convo").click(function() {
        // Generate new fake dialogue
        const newText = generateRandomText();

        // Append a new div with the generated text to the output div
        $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    });
});
