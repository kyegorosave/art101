/**
 * Author: Kye Gorosave & Kevin Su
 * Created: 11.03.2023
 * ART 101 Wes Modes UC Santa Cruz
 **/

// Function to prompt for the user's name, sort it, and return sorted string
function sortUserName() {
    // Ask for the user's name
    var userName = window.prompt("Enter your name and I'm gonna sort it: ");
    // If the user entered a name, sort it
    if (userName) {
        //Using the .toLowerCase in order to sort the lowercase and uppercase letters in the input. With help from GPT-4 was able to figure it out
      var sortedName = userName.toLowerCase().split('').sort().join('');
      return sortedName;
    } else {
      // If no name 
      return "No name was entered.";
    }
  }

  // Call the function and write the result to the document
  var result = sortUserName();
  document.writeln("Your sorted name IS: " + result);