// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Character Variables
var charVariables = {
  lowercase:"abcdefghijklmnopqrstuvwxyz",
  uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric:"0123456789",
  specialCharacters: "!@#$%^&*()_+~`|}{[]\:;?><,./-="
}
// Generate Password Function
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password must be between 8 and 128 characters");
    location.reload();
    return;
  }
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert("You must select at least one character type");
    location.reload();
    return;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    var characterTypes = [];
    if (lowercase) {
      characterTypes.push(charVariables.lowercase);
    }
    if (uppercase) {
      characterTypes.push(charVariables.uppercase);
    }
    if (numeric) {
      characterTypes.push(charVariables.numeric);
    }
    if (specialCharacters) {
      characterTypes.push(charVariables.specialCharacters);
    }
    var characterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    var character = characterType[Math.floor(Math.random() * characterType.length)];
    password += character;
    }
    return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  if(password != null) alert('Congratulations! Password Successfully Generated! \n' + "Password: " + password + '\n');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var clipped = document.querySelector("#password");

// clipped.addEventListener("click",alert("Password copied to clipboard!"));
// clipped.addEventListener("click"), function() {
//   navigator.clipboard.writeText(clipped.value);
//   alert("Password copied to clipboard!");
// }
