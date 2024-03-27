'use strict';
function convertMinutesToSeconds(minutes) {
  const multiply = minutes * 60;
  return multiply;
}
convertMinutesToSeconds(5);
convertMinutesToSeconds(10);
console.log(
  `value of convertMinutesToSeconds(5): ${convertMinutesToSeconds(5)}`
);
console.log(
  `value of convertMinutesToSeconds(10): ${convertMinutesToSeconds(10)}`
);
function greet(name) {
  const greetName = `"Hey ${name}!"`;
  return greetName;
}
greet('Daniel');
greet('Vanessa');
console.log(`value of greet('Daniel'): ${greet('Daniel')}`);
console.log(`value of greet('Vanessa'): ${greet('Vanessa')}`);
const getArea = (width, height) => width * height;
getArea(17, 42);
getArea(22, 38);
console.log(`value of getArea(17, 42): ${getArea(17, 42)}`);
console.log(`value of getArea(22, 38): ${getArea(22, 38)}`);
const getFirstName = (person) => {
  return person.firstName;
};
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
getFirstName({ firstName: 'John', lastName: 'Henry' });
console.log(
  `value of getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }): ${getFirstName(
    { firstName: 'Lelouche', lastName: 'Lamperouge' }
  )}`
);
console.log(
  `value of getFirstName({ firstName: 'John', lastName: 'Henry' }): ${getFirstName(
    { firstName: 'John', lastName: 'Henry' }
  )}`
);
const getLastElement = (array) => {
  const indexOfLastElement = array.length - 1;
  const lastElement = array[indexOfLastElement];
  return lastElement;
};
getLastElement(['propane', 'and', 'propane', 'accessories']);
getLastElement([true, true, false, true]);
console.log(
  `value of getLastElement(['propane', 'and', 'propane', 'accessories']): ${getLastElement(
    ['propane', 'and', 'propane', 'accessories']
  )}`
);
console.log(
  `value of getLastElement([true, true, false, true]): ${getLastElement([
    true,
    true,
    false,
    true,
  ])}`
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
callOtherFunction(convertMinutesToSeconds, 10);
callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
console.log(
  `value of callOtherFunction(convertMinutesToSeconds, 10): ${callOtherFunction(
    convertMinutesToSeconds,
    10
  )}`
);
console.log(
  `value of callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']): ${callOtherFunction(
    getLastElement,
    ['hello', 'Goodbye', 'Aloha']
  )}`
);
