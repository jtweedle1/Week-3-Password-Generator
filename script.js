var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","+","_","="];
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//function to gather password options which will be used in later functions

function passwordChoices () {
  var pwlength = parseInt(prompt("8 to 128","Enter a number that's between 8 and 128, inclusive!"));
  if (Number.isNaN(pwlength)) {
    alert("Must enter a number.");
    return null;
  }

  if (pwlength < 8 || pwlength > 128){
    alert("Password length must be between 8 and 128, inclusive.");
    return null;
  }

  var selectNumbers = confirm("Click ok to include numbers in your password.")
  var selectSymbols = confirm("Click ok to include symbols in your password.")
  var selectUpper = confirm("Click ok to include uppercase letters in your password.")
  var selectLower = confirm("Click ok to include lowercase letters in your password.")

  if (selectNumbers === false && selectSymbols === false && selectUpper === false && selectLower === false) {
    alert("Must select at least one character type.")
    return null;
  }

  var choices = {
    pwlength: pwlength,
    selectNumbers: selectNumbers,
    selectSymbols: selectSymbols,
    selectUpper: selectUpper,
    selectLower: selectLower,
  }

  //output is going to return the choices object, which holds all of the user-selected password options
  return choices

}

//randomize the characters to be used in generatePassword function

function randomizeCharacters(arr) {
  //generating a random number between 0 and the length of the array that is passed to this function
  var randomIndex = Math.floor(Math.random()*arr.length);
  //creating randomElement equal to array at randomIndex
  var randomElement = arr[randomIndex];
  return randomElement;
}

//array of possible characters that includes all the possible characters in our password, in addition to array of guaranteedCharacters that includes 1 character for each character type that was selected for inclusion by the user

function generatePassword () {
  //returns choices object, storing as a variable within this function
  var options = passwordChoices();
  var output = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  //are these options true?
  if (options.selectNumbers) {
    //concatenate the numbers array into possibleCharacters -> creating a pool of possible characters
    possibleCharacters = possibleCharacters.concat(numbers);
    //ensures that at least 1 number ends up in the array
    guaranteedCharacters.push(randomizeCharacters(numbers));
  }

  if (options.selectSymbols) {
    //concatenate the numbers array into possibleCharacters -> creating a pool of possible characters
    possibleCharacters = possibleCharacters.concat(symbols);
    //ensures that at least 1 number ends up in the array
    guaranteedCharacters.push(randomizeCharacters(symbols));
  }

  if (options.selectLower) {
    //concatenate the numbers array into possibleCharacters -> creating a pool of possible characters
    possibleCharacters = possibleCharacters.concat(lower);
    //ensures that at least 1 number ends up in the array
    guaranteedCharacters.push(randomizeCharacters(lower));
  }

  if (options.selectUpper) {
    //concatenate the numbers array into possibleCharacters -> creating a pool of possible characters
    possibleCharacters = possibleCharacters.concat(upper);
    //ensures that at least 1 number ends up in the array
    guaranteedCharacters.push(randomizeCharacters(upper));
  }

  //iterate over the length of password that was chosen by the user earlier
  for (var i = 0; i < options.pwlength; i++) {
    //single possible character is going to be randomly selected from possibleCharacters
      var possibleCharacter = randomizeCharacters(possibleCharacters)
      output.push(possibleCharacter)
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    //replacing ith index of output with ith index of guaranteedCharacters -> makes sure that guaranteed characters get into the password
    output[i] = guaranteedCharacters[i]
  }

  //join arrays into a string
  return output.join('')
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //returns output.join (a password)
  var password = generatePassword();


  //joining to HTML element -> setting value of element
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
