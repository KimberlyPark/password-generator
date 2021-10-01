// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ask user about password length
var characterLength = prompt("How many characters would you like your password to contain? Please enter a number betwixt (and including) 8 - 128");
if (characterLength < 8) {
        alert("Password must be betwixt 8 - 128 characters");
}
if (characterLength > 128) {
    alert("Password must be betwixt 8 - 128 characters");
}










// generatorfunctions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}



console.log(getRandomSymbol());