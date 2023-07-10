// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// The variable strings for the generated password
var num = "0123456789";
var sym = "!@#$%^&*()_+-={}::<>?";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The following is all the possible outcomes for the generated password after selecting the prompts

var all = num + sym + lowerCase + upperCase;
var nonums = sym + lowerCase + upperCase;
var nosyms = num + lowerCase + upperCase;
var noLower = num + sym + upperCase;
var noUpper = num + sym + lowerCase;
var upperNum = num + upperCase;
var upperSym = sym + upperCase;
var lowerNum = num + lowerCase;
var lowerSym = sym + lowerCase;
var noLetters = sym + num;
var onlyLetters = lowerCase + upperCase;

function dropDownBox() {
  var dropDown = window.prompt("Select Password Length (Must be between 8 and 128 characters)")
  var numbers = confirm("Select 'OK' for numbers or select 'Cancel' for no numbers")
  var symbols = confirm("Select 'OK' for symbols or select 'Cancel' for no symbols")
  var upQuestion = confirm("Select 'OK' for upper case letters or select 'Cancel' for no upper case letters")
  var lowQuestion = confirm("Select 'OK' for lower case letters or select 'Cancel' for no lower case letters")

  var generatedPassword = ""
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
