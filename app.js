/* 

GUIDELINES

- Click button to generate a password
- When button clicked, series of prompts for password criteria
- Include prompt for password length between 8 characters and 128 characters
- Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- When each prompt answered, input should be validated (i.e. make sure it is a valid entry)
- At least one character type must be selected
- Password generated when all prompts are answered
- Password either displayed in an alert or written to the page

*/

// Create the arrays necessary for the password generator
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","+","_","="];
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var goodInputs = Array.from({length: 121}, (x, i) => i + 8)

var confirmNumbers;
var confirmSymbols;
var confirmUpper;
var confirmLower;

var selectNumbers;
var selectSymbols;
var selectUpper;
var selectLower;


function createPassword() {

    alert("Welcome to the Animal Crossing: New Passwords password generator!");

    alert("My name is Isabelle! I'm going to take you through a few steps to get a new password generated for you.")

    alert("First of all, how long do you want your password to be? It can be between 8 and 128 characters! Wow, so many!")

    var pwlength = window.prompt("8 to 128","Enter a number that's between 8 and 128, inclusive!");

    if (isNaN(pwlength) == true) {
        alert("Sorry, this is not a number! Please try again with a number between 8 and 128, inclusive. Let's restart.");
        createPassword()
        return;
    }

    else if (8 <= pwlength <= 128) {
        alert(`Thanks, you've chosen a passworth length of ${pwlength}! Let's continue.`);
    } 
    
    else {
        alert("Sorry, this is an invalid entry! Please try again with a number between 8 and 128, inclusive. Let's restart.");
        createPassword();
        return;
    }

    confirm("Do you want your password to have numbers?");

    var confirmNumbers = prompt("Numbers?","Yes or No");

    if (confirmNumbers === "Yes") {
        selectNumbers = true
    }

    else if (confirmNumbers === "No") {
        selectNumbers = false
    }

    else {
        alert("You must select a valid option: Yes or No");
    }
}



    
    /*
    else if (pwlength < 8 || pwlength > 128) {
        alert("This is not a valid length! Please try again using a number between 8 and 128, inclusive. Let's start from the beginning.")
        pwlength = ""
        createPassword();
        return;
    }

    else if (typeof pwlength !== String) {
        alert("This is a string! Please try again using a number between 8 and 128, inclusive. Let's start from the beginning.");
        pwlength = ""
        createPassword();
        return;
    }


    confirm("Do you want your password to have numbers?");

    var confirmNumbers = prompt("Numbers?","Yes or No");

    if (confirmNumbers === "Yes") {
        selectNumbers = true
    }

    else if (confirmNumbers === "No") {
        selectNumbers = false
    }

    else {
        alert("You must select a valid option: Yes or No");
    }


function copyPassword () {

}

*/