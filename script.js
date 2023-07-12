// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// The variable strings for the generated password
var num = "0123456789";
var sym = "!@#$%^&*()_+-={}::<>?";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

function generatePassword() {
  var length = window.prompt("Select Password Length (Must be between 8 and 128 characters)");
  var numbers = confirm("Select 'OK' for numbers or select 'Cancel' for no numbers");
  var symbols = confirm("Select 'OK' for symbols or select 'Cancel' for no symbols");
  var upQuestion = confirm("Select 'OK' for upper case letters or select 'Cancel' for no upper case letters");
  var lowQuestion = confirm("Select 'OK' for lower case letters or select 'Cancel' for no lower case letters");

  var result = ""

  if (length < 8 || length > 128) {
    result += "Length must be between 8-128 characters."
  } else if (numbers == true && symbols == true && lowQuestion == true && upQuestion == true) {
    for (var i = 0; i < length; i++){
      result += all.charAt(Math.floor(Math.random() * all.length));
    }
  } else if (symbols == true && lowQuestion == true && upQuestion == true) {
    for (var i = 0; i < length; i++){
      result += nonums.charAt(Math.floor(Math.random() * nonums.length));
    }
  } else if (numbers == true && lowQuestion == true && upQuestion == true) {
    for (var i = 0; i < length; i++){
      result += nosyms.charAt(Math.floor(Math.random() * nosyms.length));
    }
  } else if (symbols == true && numbers == true && upQuestion == true) {
    for (var i = 0; i < length; i++){
      result += noLower.charAt(Math.floor(Math.random() * noLower.length));
    }
  } else if (lowQuestion == true && upQuestion == true) {
    for (var i = 0; i < length; i++){
      result += onlyLetters.charAt(Math.floor(Math.random() * onlyLetters.length));
    }
  } else if (symbols == true && lowQuestion == true && numbers == true) {
    for (var i = 0; i < length; i++){
      result += noUpper.charAt(Math.floor(Math.random() * noUpper.length));
    }
  } else if (numbers == true && symbols == true) {
    for (var i = 0; i < length; i++){
      result += noLetters.charAt(Math.floor(Math.random() * noLetters.length));
    }
  } else if (upQuestion == true && numbers == true) {
    for (var i = 0; i < length; i++){
      result += upperNum.charAt(Math.floor(Math.random() * upperNum.length));
    }
  } else if (lowQuestion == true && numbers == true){
    for (var i = 0; i < length; i++){
      result += lowerNum.charAt(Math.floor(Math.random() * lowerNum.length));
    }
  } else if (upQuestion == true && symbols == true) {
    for (var i = 0; i < length; i++){
      result += upperSym.charAt(Math.floor(Math.random() * upperSym.length));
    }
  } else if (lowQuestion == true && symbols == true) {
    for (var i = 0; i < length; i++){
      result += lowerSym.charAt(Math.floor(Math.random() * lowerSym.length));
    }
  } else if (upQuestion == true) {
    for (var i = 0; i < length; i++){
      result += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }
  } else if (lowQuestion == true) {
    for (var i = 0; i < length; i++){
    result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }
} else if (numbers == true) {
  for (var i = 0; i < length; i++){
  result += num.charAt(Math.floor(Math.random() * num.length));
}
} else if (symbols == true) {
  for (var i = 0; i < length; i++){
  result += sym.charAt(Math.floor(Math.random() * sym.length));
}
} else {
  result += "Really? You came here to do nothing? Shame."
}

return result
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);