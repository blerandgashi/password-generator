let passwordLength = document.querySelector("#length-value");
let lengthValue = document.querySelector("#length");
let passwordDisplay = document.querySelector("#password-display");

const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

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

let generatePassword = "";
generateBtn.addEventListener("click", function(){
  generatePassword = ""

  for(let i = 0; i < lengthValue.value; i++){
    let randomNumber = Math.floor(Math.random() * passwordPool.length);
    generatePassword += passwordPool.charAt(randomNumber);
  }
  passwordDisplay.textContent = generatePassword;
  passwordStrength(generatePassword);
})


let strengthenCore = 0;
function passwordStrength(password){

  let dots = document.querySelectorAll(".strength-dot")
  const strengthTextEl = document.querySelector("#strength-text");  

  let passwordLength = lengthValue.value;

  const upperType = /[A-Z]/.test(password);
  const lowerType = /[a-z]/.test(password);
  const numberType = /[1-9]/.test(password);
  const symbolsType = /[^A-Za-z0-9]/.test(password);
  

  const typesCount = upperType + lowerType + numberType + symbolsType;
  
  if (passwordLength >= 16 && typesCount === 4){
    strengthenCore = 5;
    strengthTextEl.textContent = "Very Strong"
  }else if (passwordLength >= 12 && typesCount >= 3) {
    strengthenCore = 4;
    strengthTextEl.textContent = "Strong";
  }else if (passwordLength >= 10 && typesCount >= 2) {
    strengthenCore = 3;
    strengthTextEl.textContent = "Medium";
  }else if (passwordLength >= 8 && typesCount >= 1) {
    strengthenCore = 2;
    strengthTextEl.textContent = "Weak";
  }else{
    strengthenCore = 1;
    strengthTextEl.textContent = "Very Weak";
  }

  dots.forEach(dot => dot.classList.remove('active'));
  for(let i = 0; i < strengthenCore; i++){
    dots[i].classList.add("active");
  }
}

copyBtn.addEventListener("click", function(){
  if (!generatePassword) {
    return;
  }
  navigator.clipboard.writeText(generatePassword)
    .then(() => {
      copyBtn.textContent = "Copy"
    })
    .catch(() => {
      alert("Failed to copy")
    })
})