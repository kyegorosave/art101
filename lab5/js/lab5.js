/*
  * Author: Kye Gorosave & Kevin Su
  * Created: 27 October 2023
*/

//Define the variables
var make;
var model;
var color;
var year;
var currentYear;
var age;
var ownIt = false;

/*Declaring the variables
make = "Audi";
model = "Sport Quattro S1";
color = "White";
year = 1986;
currentYear = 2023;
//Age calculation
age = currentYear - year;
//Output 
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years old<br>");
*/ //OLD CODE BEFORE DEBUGGING. ERROR WAS BECAUSE SCRIPT WAS LOADING ASYNCHRONOUSLY AND NOT WORKING RIGHT W DOCUMENT.WRITELN

//New and improved code 
// Function to add text to the body
function addTextToBody(text) {
  var p = document.createElement("p"); // Create a paragraph element
  p.innerText = text; // Set its text content
  document.body.appendChild(p); // Append it to the body
}

// Use the function to add text
addTextToBody("Make: " + make);
addTextToBody("Model: " + model);
addTextToBody("Color: " + color);
addTextToBody("Year: " + year);
addTextToBody("Age: " + age + " years old");
