interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Vanessa',
  lastName: 'Viray',
  age: 29,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

const vehicle: Vehicle = {
  make: 'Subaru',
  model: 'Impreza',
  year: 2015,
};

const pet: Pet = {
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
