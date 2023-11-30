/*
    lab13.js - This program runs the FizzBuzzBang thing that we learned about. 3 is fizz, 5 is buzz, and 7 is bang. If it is a multiple of any of those it prints out the word associated.
    Requirements: jQuery must be loaded for this script to work.

    Author: Kye Gorosave & Kevin Su
    Date: November 27, 2023
*/

const factors = [
    { num: 3, text: "Fizz" },
    { num: 5, text: "Buzz" },
    { num: 7, text: "Bang" }
];

function fizzBuzz(maxNumber) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const columns = 10; // Number of columns
    let row;

    for (let num = 1; num <= maxNumber; num++) {
        if (num % columns === 1) {
            row = tbody.insertRow();
        }

        let result = "";
        for (const factor of factors) {
            if (num % factor.num === 0) {
                result += factor.text;
            }
        }

        if (result === "") {
            result = num.toString();
        }

        let cell = row.insertCell();
        cell.textContent = result;
    }

    outputDiv.appendChild(table);
    document.getElementById("closeButton").style.display = "inline";
}

function closeOutput() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("closeButton").style.display = "none";
}

document.getElementById("runButton").addEventListener("click", function () {
    fizzBuzz(200);
});

document.getElementById("closeButton").addEventListener("click", closeOutput);
