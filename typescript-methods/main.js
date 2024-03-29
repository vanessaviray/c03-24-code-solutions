'use strict';
// The Math Object
const heroes = ['Black Widow', 'Spiderman', 'Mermaid Man', 'Barnacle Boy'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`randomIndex: ${randomIndex}`);
const randomHero = heroes[randomIndex];
console.log(`randomHero ${randomHero}`);
// Array Methods
const library = [
  { title: 'an unapologetic cookbook', author: 'Joshua Weissman' },
  { title: 'Leaf Supply', author: 'Lauren Camilleri, Sophia Kaplan' },
  { title: 'I Want to Eat Your Pancreas', author: 'Yoru Sumino' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
// String Methods
const fullName = 'Vanessa Viray';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
// Object Methods
const employee = {
  name: 'Joe',
  age: 28,
  position: 'Manager',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
