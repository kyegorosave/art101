//Creating the array of the numbers that are going to be square rooted
var numbersArray = [1, 4, 9, 16, 25];
//Creating the funciton that will find the sqrt 
function squareRootCalc(x){
    var results = Math.sqrt(x);
    return results;
}
//testing the function with the numbers from the array
console.log("TEST 1: The square root of 9 is ", squareRootCalc(9));
console.log("TEST 2: The square root of 16 is ", squareRootCalc(16));
console.log("TEST 3: The square root of 125 is ", squareRootCalc(25));
//Using map on the array
var squareRoots = numbersArray.map(squareRootCalc);
console.log(squareRoots); // Should return an array of square roots of the numbersArray
// Now use a new anonymous function as a callback with map to square each of the numbers in your array
var squaredNumbers = numbersArray.map(function(x){
    var results = x * x;
    return results;
});

console.log(squaredNumbers); // Should return an array of squares of the numbersArray