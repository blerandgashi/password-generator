let passwordLength = document.querySelector("#length-value");
let lengthValue = document.querySelector("#length");
let passwordDisplay = document.querySelector("#password-display");

const generateBtn = document.querySelector("#generate");

const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

let passwordPool = "";
function updatePool(){
  passwordPool = "";

  if(uppercaseCheck.checked){  
    passwordPool += uppercase;  
  }
  if (lowercaseCheck.checked) {
    passwordPool += lowercase;
  }
  if (numbersCheck.checked) {
    passwordPool += numbers;
  }
  if (symbolsCheck.checked) {
    passwordPool += symbols;
  }
  console.log(passwordPool);
}

uppercaseCheck.addEventListener("change", updatePool);
lowercaseCheck.addEventListener("change", updatePool);
numbersCheck.addEventListener("change", updatePool);
symbolsCheck.addEventListener("change", updatePool);

lengthValue.addEventListener("input", function(){
  passwordLength.textContent = lengthValue.value;
})

// 1. generate password button
// 2. use for loop depending on the password length
// 3. use math random to get random numbers
// 4. add them to the password variable
// 5. show the generated password to "click generate"