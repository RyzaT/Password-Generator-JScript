// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  alert("Hey there, lets get you a password, press the button below to start.");
  choiceArr = [];
  passLength = parseInt(prompt("Enter a password length between 10 and 64"));
    if(isNaN(passLength) || passLength < 10 || passLength > 64) {
      alert("Password has to be between 10 and 64 characters, please try again");
    return false;
    }
    if (confirm("Would you like to use lowercase letters?")){
    choiceArr = choiceArr.concat(lowerCasedCharacters);

    }
    if (confirm("Would you like to use uppercase letters?")){
    choiceArr = choiceArr.concat(upperCasedCharacters);

    }
    if (confirm("Would you like to use numbers in your password?")){
    choiceArr = choiceArr.concat(numericCharacters);

    }
    if (confirm("Would you like to use special characters?")){
    choiceArr = choiceArr.concat(specialCharacters);

    }
  return true;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for(var i = 0; i < passLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions();
  var passwordText = document.querySelector('#password');
    if (correctPrompts) {
  var newPassword = generatePassword();
  

  passwordText.value = newPassword;
    }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// My working
//alert("Hi There! Lets make you a password")


// My additions
 //var length = Number(prompt("Enter a password length between 8 and 128")),
//   charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
//   password = generatePassword();
// document.getElementById("display").value = password;
// document.getElementById('copy-btn').addEventListener('click', copyPassword);

// function generatePassword() {
//   var charSets = {
//     lowercase: 'abcdefghijklmnopqrstuvwxyz',
//     uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     numeric: '0123456789',
//     special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
//   };
//   var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
//   var retVal = "";
//   for (var i = 0; i < length; i++) {
//     retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
//   }
//   return retVal;
// }