# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise. The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
you can write asynchronous code that looks more like synchronous code. It also allows you to handle errors using regular try-catch blocks, which makes error handling more intuitive and straightforward compared to chaining Promise.catch blocks.

- When do you use `async`?
when you want to define a function that performs asynchronous operations and returns a promise

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
When you want to wait for the completion of asynchronous operations like fetching data from a server, reading files, or querying a database. You cannot use await at the top level of your script or module. It's only valid inside async functions. Tt will cause a syntax error

- How do you handle errors with `await`?
By using try-catch blocks

- What do `try`, `catch` and `throw` do? When do you use them?
Use the throw statement to throw an exception. You can use it to throw errors.
The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it. You can use a catch block to handle all exceptions that may be generated in the try block.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
the function will continue execution without waiting for the promise to resolve. Instead, it will return immediately with a pending promise, and the rest of the code in the async function will execute asynchronously.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
async/await; it is easier to understand and read.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
