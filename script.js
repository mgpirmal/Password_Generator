// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","<",">","?"];
var num = [1,2,3,4,5,6,7,8,9,0];
let size;
let upper;
let specialChar;
let aNum;
let finalPassword = [];

// Write password to the #password input
function writePassword() {
  // Ask for size and password content
size = prompt("How long do you want your password?");
      while (size < 8 || size > 128) {
        alert("Password must be between 8 to 128 characters.");
        size = prompt("How long do you want your password?");
      }
upper = confirm("Do you want uppercase characters?");
specialChar = confirm("Do you want special characters?");
anum = confirm("Do you want numbers in your password?");
let i=0;

// concat arrays based on prefrences 
// if statements that will run based on prefrences
if (upper == false && specialChar == false && anum == false){
  newpass= letters;
  console.log(newpass);
}else if (upper == true && specialChar == false && anum == false){
  newpass= letters.concat(lettersBig);
  console.log(newpass);
}else if (upper == false && specialChar == true && anum == false){
  newpass= letters.concat(special);
  console.log(newpass);
}else if (upper == false && specialChar == false && anum == true){
  newpass= letters.concat(num);
  console.log(newpass);
}else if (upper == true && specialChar == true && anum == false){
  newpass= letters.concat(lettersBig,special);
  console.log(newpass);
}else if (upper == true && specialChar == false && anum == true){
  newpass= letters.concat(lettersBig,num);
  console.log(newpass);
}else if (upper == false && specialChar == true && anum == true){
  newpass= letters.concat(special,anum);
  console.log(newpass);
}else if (upper == true && specialChar == true && anum == true){
  newpass= letters.concat(lettersBig,special,num);
  console.log(newpass);
}

// Take the new concat array and pull a random set of characters from it
//Run the loop based on the 'size' of password wanted from user
for (i = 0; i < size; i++){
let password = newpass[Math.floor(Math.random() * newpass.length)];
finalPassword.push(password);
console.log(finalPassword);
}
//Take the final array and replace the commas with spaces(join method) and then use the trim method to remove the empty space
alert("Your Password is " + finalPassword.join("").trim());

//Ran into issue with finalPassword array saving previous button click answer.
// Added splice method to clear array if user decides to click again without refreshing page.
finalPassword.splice(0,finalPassword.length);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
