/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen()

function getNumbersToTen(): object {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

const getNumToTenResult = getNumbersToTen();
console.log('getNumbersToTen()');
console.log(getNumToTenResult);

// getEvenNumbersToTwenty()

function getEvenNumbersToTwenty(): object {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 22) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

const getEvenNumResults = getEvenNumbersToTwenty();
console.log('getEvenNumbersToTwenty()');
console.log(getEvenNumResults);

// repeatWord(word, times)

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

const repeatWordResults = repeatWord('javascript', 30);
console.log(`repeatWord('javascript', 30)`);
console.log(repeatWordResults);

// logEachCharacter(str)

function logEachCharacter(str: string): any {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(`logEachCharacter('javascript')`);
logEachCharacter('javascript');

// doubleAll(numbers)

function doubleAll(numbers: any): any {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const times2 = numbers[i] * 2;
    doubled.push(times2);
  }
  return doubled;
}

const doubleAllResult = doubleAll([5, 6, 10]);
console.log('doubleAll([5, 6, 10])');
console.log(doubleAllResult);

// getKeys(obj)

function getKeys(obj: Record<string, unknown>): any {
  const keys = [];
  for (const prop in obj) {
    keys.push(prop);
  }
  return keys;
}

const student = {
  firstName: 'vanessa',
  lastName: 'viray',
};

const getKeysResult = getKeys(student);
console.log(`getKeys({firstName: 'vanessa', lastName 'viray'})`);
console.log(getKeysResult);

// getValues(obj)

function getValues(obj: Record<string, unknown>): any {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

const getValuesResult = getValues(student);
console.log(`getValues({firstName: 'vanessa', lastName 'viray'})`);
console.log(getValuesResult);
