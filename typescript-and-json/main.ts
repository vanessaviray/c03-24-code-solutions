const bookArray = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Hello There',
    author: 'John Smith',
  },
  {
    isbn: '768-3-12-213416-0',
    title: 'Hi There',
    author: 'Sally Wright',
  },
  {
    isbn: '858-3-96-448412-0',
    title: 'I Love Food',
    author: 'Hogard Henry',
  },
];

console.log('value of bookArray: ', bookArray, 'typeof: ', typeof bookArray);

const stringifyResult = JSON.stringify(bookArray);

console.log(
  'value of stringifyResult: ',
  stringifyResult,
  'typeof: ',
  typeof stringifyResult
);

const bookJSON =
  '{"isbn": "978-3-16-148410-0", "title": "Hello There", "author": "John Smith"}';

console.log('value of bookJSON: ', bookJSON, 'typeof: ', typeof bookJSON);

const parseResult = JSON.parse(bookJSON);

console.log(
  'value of parseResult: ',
  parseResult,
  'typeof: ',
  typeof parseResult
);
