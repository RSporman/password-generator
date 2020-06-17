var passwordLength = false;
var generateBtn = document.querySelector("#generate");
var password = "";
var charCollection = "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+0123456789";
var charCollectionTwo = "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

while (passwordLength < 8 || passwordLength > 128 || passwordLength === "") { 
  passwordLength = prompt("Please choose a valid length: Choose a length between 8 and 128")
}
if (passwordLength < 128 && passwordLength > 8) {
  var chooseSpecialCharacters = confirm("Do you want special characters?");
  var chooseLowercase = confirm("Do you want lowercase letters?");
  var chooseUppercase = confirm("Do you want uppercase letters?");
  var chooseNumbers = confirm("Do you want numbers?");
}

if (chooseSpecialCharacters === true && chooseLowercase === true && chooseUppercase === true && chooseNumbers === true){
  for (var i = 0; i < passwordLength; i++) 
  password += charCollection[Math.floor(Math.random() * charCollection.length)];
}

if (chooseSpecialCharacters !== true && chooseLowercase === true && chooseUppercase === true && chooseNumbers === true){
  for (var i = 0; i < passwordLength; i++) 
  password += charCollection[Math.floor(Math.random() * charCollectionTwo.length)];
}

// Assignment Code

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 

