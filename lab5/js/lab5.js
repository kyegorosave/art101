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

//Declaring the variables
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