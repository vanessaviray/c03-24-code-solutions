# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  The scope chain in JavaScript follows a principle known as lexical (or static) scoping. Lexical scoping means that the scope of a function is determined by where the function is declared.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closures (backpack analogy). The closure is a collection of all the variables in scope at the time of creation of the function.

- What values does a closure contain?
  Local Variables of the Inner Function, variables from the Outer Function's Scope, and global variables

- When is a closure created?
  A closure is created when a function is defined within another function in JavaScript

- How can you tell if a function will be created with a closure?
  By checking these conditions: inner function definition, access to outer function’s variables, and returning or using the inner function outside its definition scope

- In React, what is one important case where you need to know if a closure was created?
  When using functional components with hooks, particularly the useState and useEffect hooks. Understanding closures is crucial in these contexts to manage state and side effects correctly and to avoid common pitfalls related to stale closures.

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
