//Author: Kye Gorosave
//Created 28 October 2023

//Defining the Variables
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
  