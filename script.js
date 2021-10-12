var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword() {

  
  // Below is a list of all password Criteria:
  
  var pswLength = 0
  lowerCase = false
  upperCase = false
  numericCharacters = false
  specialCharacters = false

// Welcome message to user
alert("Welcome Ramie! You came to the right place to generate a secure random password. Well, let's get started...");

// ===== while statement: will continue to run as long as condition is true. User enters the length of psw (must be between 8-128 characters )======

while(pswLength > 128 || pswLength < 8){
  pswLength = prompt("How long would you like your password to be? It can be betwixt 8 -128 characters")
  if(pswLength > 128 || pswLength < 8){
// if password does not fall within these parameters - alert is triggererd  (at least 8 characters and no more than 128 characters) 
    alert("Please enter a value betwixt 8 and 128!")
   
  }
}

var criteriaList = []

while(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){

 // ALERT - Ask if user wants Password WITH Lowercase 
  var lowerCase = confirm("Would you like your password to have lowercase letters?")

// User selected "OK" to lowercase character in psw...
  if(lowerCase){

    criteriaList.push('abcdefghijklmnopqrstuvwxyz'.split(''))
  }

 // ALERT - Ask if user want password with Uppercase
  var upperCase = confirm("Would you like your password to have uppercase letters?")
  if(upperCase){

  // User selected "OK" to uppercase letters in psw...
    criteriaList.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
  }
  // ALERT - Ask if user wants Password WITH Numbers
  var numericCharacters = confirm("Would you like your password to have numbers?")
  // User selected "OK" to numeric characters in psw...
  if(numericCharacters){
    criteriaList.push('0123456789Z'.split(''))
  }
    // ALERT - Ask if user wants Password WITH Special Characters
  var specialCharacters = confirm("I knnow you are married to a special charater, but would you like special characters in your password? (ex; @#$%&*)")

  // User selected "OK" to special characters in psw...
  if(specialCharacters){
    criteriaList.push('~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'.split(''))
  }
// Verify if none of the options were selected
  if(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
    alert(" Be sure to select atleast one lowercase, uppercase, numeric and/or special characters.")
  }
}
var flattenedArray = criteriaList.flat(1)
// console.log(flattenedArray)
// console.log( criteriaList)
// console.log( criteriaList.length)

var randompsw = []
for(var i = 0; i <criteriaList.length; i++){
  randompsw.push(criteriaList[i][Math.floor(Math.random() * criteriaList[i].length)])
}

var randoms = Array.from({length: pswLength-criteriaList.length}, () => Math.floor(Math.random() * flattenedArray.length));

for(var i = 0; i<randoms.length; i++){
  randompsw .push(flattenedArray[randoms[i]])
}
 return randompsw .join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
