/* The below variable is responsible for the interacctive generate button. When clicked it will begin the prompts and confrims below. */
var generateBtn = document.querySelector("#generate");

/* Below is the function will write the passowrd to the given text box located on the webpage. */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
/* The below is responsible for displaying the password in the text box and responding to the generate button on the main webpage. */
generateBtn.addEventListener("click", writePassword);
passwordText.value = "";
passwordText.innerHTML = "";

/* Below is the function which will prompt a series of questions and depending what the user preference is, will send a result. */
function generatePassword() {
  /* The password length to be false, because it needs to have a certain amount of characters. */
  var passwordLength = false;
  /* Below I am setting the main variables that the function will take into place. Most of the variables define the characters responsible for sending the password.*/
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
  var password = "";

/* The while statement below outlines what the length of the password is needed to be.*/
  while (passwordLength < 8 && passwordLength > 128 && passwordLength === "");
  {
    /* This prompt will ask the user to choose a length between 8 and 128 characters. */
    passwordLength = prompt(
      "Please choose a valid length: Choose a length between 8 and 128"
    );
  }


  /* Below the conditionals are taking place. Whatever characters the user would like to use for his/her password, the code below will take the user input into consideration and then return their password, based on what was confirmed.*/
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
/* This will return the password based off the criteria chosen. */
  return password;
}