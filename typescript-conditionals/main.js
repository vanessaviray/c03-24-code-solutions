'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
// isUnderFive(number)
function isUnderFive(age) {
  if (age < 5) {
    return true;
  } else {
    return false;
  }
}
// isEven(number)
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
// isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  const age = person.age;
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}
// isOldEnoughToDrive(person)
function isOldEnoughToDrive(person) {
  const age = person.age;
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16) {
    return false;
  } else {
    return false;
  }
}
// categorizeAcidity(pH)
function categorizeAcidity(pH) {
  if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}
// introduceWarnerBro(name)
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return `We're the warner brothers!`;
      break;
    case 'wakko':
      return `We're the warner brothers!`;
      break;
    case 'dot':
      return `I'm cute~`;
      break;
    default:
      return `Goodnight everybody!`;
  }
}
// recommendMovie(genre)
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'John Wick';
      break;
    case 'comedy':
      return 'The Hustle';
      break;
    case 'horror':
      return 'Incident in a Ghost Land';
      break;
    case 'drama':
      return 'Joker';
      break;
    case 'musical':
      return 'Bohemian Rhapsody';
      break;
    case 'sci-fi':
      return 'Planet of the Apes';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
