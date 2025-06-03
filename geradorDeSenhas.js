//  const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseLetters = LowerCaseLetters.toUpperCase();
const Numbers = "0123456789";
// const SpecialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getUpperCaseLetters() {
  return UpperCaseLetters[Math.floor(Math.random() * UpperCaseLetters.length)];
}

function getLowerCaseLetters() {
  return LowerCaseLetters[Math.floor(Math.random() * LowerCaseLetters.length)];
}

function getNumbers() {
  return Numbers[Math.floor(Math.random() * Numbers.length)];
}

/*function getSpecialCharacters() {
  return SpecialCharacters[
    Math.floor(Math.random() * SpecialCharacters.length)
  ];
} */

const randomPassword = {
  upper: getUpperCaseLetters,
  lower: getLowerCaseLetters,
  numbers: getNumbers,
  //  characters: getSpecialCharacters,
};

function generatePassword(randomPassword) {
  const passwordLength = 20; // Define a quantidade de caracteres da senha
  let password = "";

  // Garante que a senha tenha pelo menos um de cada tipo de caractere

  for (let i = 0; i < passwordLength; i++) {
    const randomType =
      Object.keys(randomPassword)[
        Math.floor(Math.random() * Object.keys(randomPassword).length)
      ];
    /* Escolhe aleatoriamente um tipo de caractere e adiciona à senha */
    password += randomPassword[randomType]();
  }

  return password;
}

console.log(generatePassword(randomPassword));
