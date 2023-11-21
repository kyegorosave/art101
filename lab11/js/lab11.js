/*
   lab11.js - This JS/jQuery code takes user input and sorts it or takes it and makes it an anagram.
    Depends which button you press.

   Requirements: jQuery must be loaded for this script to work.

   Author: Kye Gorosave & Kevin Su
   Date: November 20, 2023
*/

//Javascript function that sorts the user input. Another function that makes the input an anagram(SHOUTOUT TO CHATGPT-4.0 FOR HELP WITH THE shuffleString, sortButton, and anagramButton FUNCTIONS. Also helped me out when the functions wouldn't take into account capital letters while sorting.)
$(document).ready(function() {
    //Checking to see if jQuery loaded
    console.log("jQuery Loaded");

    //Sort button that sorts yah name
    $("#sortButton").click(function() {
        //Finds the userInput in the inputType section of the HTML
        let inputString = $("#userInput").val();
        //Sees if the characters of each letter are uppercase or lowercase
        let caseMap = inputString.split('').map(char => char === char.toUpperCase());
        //Sorts the input AFTER it has alr been converted to lowercase
        let sortedString = inputString.toLowerCase().split('').sort().join('');
        //Applies the original case to each letter 
        sortedString = applyCase(sortedString, caseMap);
        //Displays the sorted output in the console :)
        $("#outputResult").text(sortedString);
        console.log("Sort Button Clicked");
    });

    //
    $("#anagramButton").click(function() {
        let inputString = $("#userInput").val();
        let anagramString = shuffleString(inputString);
        $("#outputResult").text(anagramString);
        console.log("Anagram Button Clicked");
    });

    function shuffleString(str) {
        let arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    function applyCase(str, caseMap) {
        return str.split('').map((char, index) => caseMap[index] ? char.toUpperCase() : char).join('');
    }
});

