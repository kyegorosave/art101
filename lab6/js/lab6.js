//Author: Kye Gorosave
//Created 28 October 2023

/*Defining the Variables
myTransport = ["Audi A4", " Walking", " Bus", " Bikes", " Motorcycle", " Rides from friends"];
//myMainRide Object
var myMainRide = {
  make: "Harley Davidson",
  model: "Sporster Iron 883",
  color: "Black",
  year: 2017,
  age: function() {
    return 2022 - this.year;
  }
}
//document.writeln-ing the array
document.writeln("Kinds of transportation I can use: ", myTransport, "</br>");
//dcoument.writeln-ing the object
document.writeln("My main ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
*/ //OLD CODE THAT PROVIDED SOME ERROR BECAUSE OF THE DOCUMENT.WRITELN IN AN ASYNCHRONOUSLY LOADED SCRIPT 

//THAT NEW NEW CODE CREATED FRIDAY DECEMBER 1 2023
// Defining the Variables
var myTransport = ["Audi A4", " Walking", " Bus", " Bikes", " Motorcycle", " Rides from friends"];

// myMainRide Object
var myMainRide = {
  make: "Harley Davidson",
  model: "Sporster Iron 883",
  color: "Black",
  year: 2017,
  age: function() {
    return 2022 - this.year;
  }
};

// Function to append text to the body
function appendTextToBody(text) {
  var p = document.createElement("p");
  p.innerHTML = text;
  document.body.appendChild(p);
}

// Adding the array to the document
appendTextToBody("Kinds of transportation I can use: " + myTransport.join(", ") + "<br>");

// Adding the object to the document
appendTextToBody("My main ride: <pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>");
