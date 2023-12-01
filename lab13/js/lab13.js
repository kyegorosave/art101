/*
    lab13.js - This program runs the FizzBuzzBang thing that we learned about. 3 is fizz, 5 is buzz, and 7 is bang. If it is a multiple of any of those it prints out the word associated.
    
    Requirements: jQuery must be loaded for this script to work.

    Author: Kye Gorosave & Kevin Su
    Date: November 27, 2023
*/

//Array of objects where each number represents its text
const factors = [
    { num: 3, text: "Fizz" },
    { num: 5, text: "Buzz" },
    { num: 7, text: "Bang" }
];
//Takes maxNumber as an arguement
function fizzBuzz(maxNumber) {
    //finds output section and then clear its contents
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    //creates a table w the tbody element
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const columns = 10; // Number of columns
    let row; //variable for rows
    //loop from 1 to maxNumber
    for (let num = 1; num <= maxNumber; num++) {
        //starts a new row at the beginning of the set of columns
        if (num % columns === 1) {
            row = tbody.insertRow();
        }
        //empty string holds the results
        let result = "";
        //loop through each factors in the factors array
        for (const factor of factors) {
            //checks if num is divisble by the factors number
            if (num % factor.num === 0) {
                result += factor.text;//appends factors text to result
            }
        }

        if (result === "") {
            result = num.toString();
        }

        let cell = row.insertCell();
        cell.textContent = result;
    }
    //append to outputDiv
    outputDiv.appendChild(table);
    document.getElementById("closeButton").style.display = "inline";
}
//clears output and hides the close button when ran
function closeOutput() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("closeButton").style.display = "none";
}
//gets the clicks and runs the fizzBuzz thang
document.getElementById("runButton").addEventListener("click", function () {
    fizzBuzz(200);
});
//closes fizzBuzz
document.getElementById("closeButton").addEventListener("click", closeOutput);
