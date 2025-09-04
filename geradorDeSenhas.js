const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseLetters = LowerCaseLetters.toUpperCase();
const Numbers = "0123456789";
const SpecialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getUpperCaseLetters() {
  return UpperCaseLetters[Math.floor(Math.random() * UpperCaseLetters.length)];
}

function getLowerCaseLetters() {
  return LowerCaseLetters[Math.floor(Math.random() * LowerCaseLetters.length)];
}

function getNumbers() {
  return Numbers[Math.floor(Math.random() * Numbers.length)];
}

function getSpecialCharacters() {
  return SpecialCharacters[
    Math.floor(Math.random() * SpecialCharacters.length)
  ];
}

const randomPassword = {
  upper: getUpperCaseLetters,
  lower: getLowerCaseLetters,
  numbers: getNumbers,
  characters: getSpecialCharacters,
};

function generatePassword(randomPassword) {
  const passwordLength = 20; // Define a quantidade de caracteres da senha
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomType =
      Object.keys(randomPassword)[
        Math.floor(Math.random() * Object.keys(randomPassword).length)
      ];
    password += randomPassword[randomType]();
  }
  document.querySelector("#senha").setAttribute("value", password);
  return password;
}

console.log(generatePassword(randomPassword));

// Alternar visibilidade da senha
document.addEventListener("DOMContentLoaded", function () {
  const senhaInput = document.getElementById("senha");
  const alternarSenha = document.getElementById("alternarSenha");
  const eyeIcon = alternarSenha.querySelector("i");

  alternarSenha.addEventListener("click", function () {
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      senhaInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });
});
