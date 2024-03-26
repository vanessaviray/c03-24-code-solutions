'use strict';
const student = {
  firstName: 'Vanessa',
  lastName: 'Viray',
  age: 29,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
const vehicle = {
  make: 'Subaru',
  model: 'Impreza',
  year: 2015,
};
const pet = {
  name: 'Sage',
  kind: 'Dog',
};
delete pet.name;
delete pet.kind;
vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
student.livesInIrvine = true;
student.previousOccupation = 'Business Owner';
console.log(`value of the vehicle['color']:`);
console.log(`value of the vehicle['isConvertible']:`);
console.log(`value of vehicle:`, vehicle);
console.log(typeof vehicle);
console.log('value of pet:', pet);
console.log(typeof pet);
