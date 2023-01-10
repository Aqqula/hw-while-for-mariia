//Mariaa Batanova

//Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
//В користувача є 3 спроби

//зробити двома способами через while і for

// це повинна бути функція(можливо і не одна)

const MAX_TRY = 3;
const minNumber = 15;
const maxNumber = 35;
const divider = 6;
let num_try = 0;

/**
 *
 * @returns {string}
 */
const getUserNumberFor = function () {
  for (let i = 0; i < MAX_TRY; i++) {
    const userAnswer = prompt("Enter number: ");
    if (isCorrectNumber(userAnswer)) {
      return console.log('Your number is valid');
    }
    console.log('try again');
  }
};

/**
 * 
 * @returns {string}
 */
const getUserNumberWhile = function () {
  while (num_try < MAX_TRY) {
    const userAnswer = prompt("Enter number: ");
    if (isCorrectNumber(userAnswer)) {
      return console.log("Your number is valid");
    }
    num_try++;
  }
};

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
function isCorrectNumber(number) {
  const correctNumber =
    number > minNumber && number < maxNumber && number % divider === 0;
  return correctNumber;
}

// getUserNumberFor();
// getUserNumberWhile();