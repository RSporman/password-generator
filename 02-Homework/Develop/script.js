/*Here I am setting the main variables that the function will take into place. Line 4 will set the password length to be false, 
because it needs to have a certain amount of characters. Line 5 is responsible for the interacctive generate button. Lines 7-21 are the characters responsible for sending the password, 
which the user will be able to choose. Line 22 is responsible for displaying the password in the text box.*/
var passwordLength = false;
var generateBtn = document.querySelector("#generate");
var password = "";
var charCollection =
  "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+0123456789";
var charCollectionTwo =
  "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charCollectionThree = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0!@#$%^&*_-+123456789";
var charCollectionFour = "abcdefghijklmnopqrstuvwxxyz!@#$%^&*_-+0123456789";
var charCollectionFive =
  "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+";
var charCollectionSix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charCollectionSeven = "abcdefghijklmnopqrstuvwxxyz0123456789";
var charCollectionEight =
  "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charCollectionNine = "!@#$%^&*_-+0123456789";
var charCollectionTen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+";
var charCollectionEleven = "abcdefghijklmnopqrstuvwxxyz!@#$%^&*_-+";
var charCollectionTwelve = "abcdefghijklmnopqrstuvwxxyz";
var charCollectionThirteen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charCollectionFourteen = "!@#$%^&*_-+";
var charCollectionFifteen = "0123456789";
var passwordText = document.querySelector("#password");

/* Here we are setting the function (line 29) which is going to essentially take the user input, with all the conditions, and generate a password of their choosing. 
The function starts with a while statement (line 30) that will prompt the user to choose a password length between 8 and 128 characters. Once the user inputs the correct amount 
of characters they will be asked to confirm if they want to use special characters, upper and lower case letters as well as numbers(lines 33-38). Once the character values
are confirmed, the function will utilize the IF statements below(lines 40-118), one for each option the user can potentially use, and spit back out the password
which is defined on line 117 with the return password code.*/
function generatePassword() {
  while (passwordLength < 8 && passwordLength > 128 && passwordLength === "");
  {
    passwordLength = prompt(
      "Please choose a valid length: Choose a length between 8 and 128"
    );
  }
  if (passwordLength < 128 && passwordLength > 8);
  {
    var chooseSpecialCharacters = confirm("Do you want special characters?");
    var chooseLowercase = confirm("Do you want lowercase letters?");
    var chooseUppercase = confirm("Do you want uppercase letters?");
    var chooseNumbers = confirm("Do you want numbers?");
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase === true &&
    chooseUppercase === true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollection[Math.floor(Math.random() * charCollection.length)];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase === true &&
    chooseUppercase === true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionTwo[Math.floor(Math.random() * charCollectionTwo.length)];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase !== true &&
    chooseUppercase === true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionThree[
        Math.floor(Math.random() * charCollectionThree.length)
        ];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase === true &&
    chooseUppercase !== true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionFour[
        Math.floor(Math.random() * charCollectionFour.length)
        ];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase === true &&
    chooseUppercase === true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionFive[
        Math.floor(Math.random() * charCollectionFive.length)
        ];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase !== true &&
    chooseUppercase === true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionSix[Math.floor(Math.random() * charCollectionSix.length)];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase === true &&
    chooseUppercase !== true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionSeven[
        Math.floor(Math.random() * charCollectionSeven.length)
        ];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase === true &&
    chooseUppercase === true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionEight[
        Math.floor(Math.random() * charCollectionEight.length)
        ];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase !== true &&
    chooseUppercase !== true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionNine[
        Math.floor(Math.random() * charCollectionNine.length)
        ];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase !== true &&
    chooseUppercase === true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionTen[Math.floor(Math.random() * charCollectionTen.length)];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase === true &&
    chooseUppercase !== true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionEleven[
        Math.floor(Math.random() * charCollectionEleven.length)
        ];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase === true &&
    chooseUppercase !== true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionTwelve[
        Math.floor(Math.random() * charCollectionTwelve.length)
        ];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase !== true &&
    chooseUppercase === true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionThirteen[
        Math.floor(Math.random() * charCollectionThirteen.length)
        ];
  }

  if (
    chooseSpecialCharacters === true &&
    chooseLowercase !== true &&
    chooseUppercase !== true &&
    chooseNumbers !== true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionFourteen[
        Math.floor(Math.random() * charCollectionFourteen.length)
        ];
  }

  if (
    chooseSpecialCharacters !== true &&
    chooseLowercase !== true &&
    chooseUppercase !== true &&
    chooseNumbers === true
  ) {
    for (var i = 0; i < passwordLength; i++)
      password +=
        charCollectionFifteen[
        Math.floor(Math.random() * charCollectionFifteen.length)
        ];
  }
  passwordText.value = "";
  passwordText.innerHTML = "";

  return password;
}

/*Below is the code that essentially starts the motion of generating the password. Line 132 is the code that makes the interactive button on the webpage
generate the prompts and confirms.       */
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// var passwordText = document.querySelector("#password");
// generateBtn.addEventListener('click', generatePassword);

//generatePassword();
// if user wants another password, set the .value of document.querySelector("#password") === '' and then generatePassword()
//else alert("Here is your password") then return password.

// var newPass = confirm("Do you want another password?");
// if(newPass === true);
// return function generatePassword();

// writePassword();

// function reset(){
//   passwordText.value = ""
// }

// //window.addEventListener("click", function(){
//   document.getElementById("#password").innerHTML
// });
