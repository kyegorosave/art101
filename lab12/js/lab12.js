/*
lab12.js - This JS/jQuery code takes user input and sorts them into a hogwarts house! Depends on length of input.
    Depends which button you press.

   Requirements: jQuery must be loaded for this script to work.

   Author: Kye Gorosave & Kevin Su
   Date: November 23, 2023
*/

// Sorting Hat function based on input string length
function sortingHat(str) {
    var length = str.length; // Get length of the string
    var mod = length % 4; // Modulus for determining house

    switch (mod) { // Switch statement for sorting
        case 0:
            return 'Gryffindor';
        case 1:
            return 'Ravenclaw';
        case 2:
            return 'Slytherin';
        case 3:
            return 'Hufflepuff';
    }
}

// Event listener for the button click
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('input').value; // Get user input

    if (name.trim() === '') {
        alert('Please enter a name for sorting.'); // Alert if input is empty
        return;
    }

    var house = sortingHat(name); // Get sorted house
    var houseOutput = document.getElementById('houseOutput'); // Get the house output element

    houseOutput.textContent = "The Sorting Hat has sorted you into " + house; // Set the text content
    houseOutput.style.display = 'block'; // Show the speech bubble
});
