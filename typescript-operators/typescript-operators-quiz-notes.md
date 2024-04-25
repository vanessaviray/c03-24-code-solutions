# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The && operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false. The || operator for a set of operands is true if and only if one or more of its operands is true. We can use them to return values based on if the operands are true of false.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  In short-circuit evaluation, an expression with logical operators (|| and &&) is evaluated from left to right. So, if the condition is met and the rest of the conditions won’t affect the already evaluated result, the expression will short-circuit and return that result.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing (??) operator is a logical operator that returns the right side of the operand when the left side is null or undefined, and otherwise returns its left-hand side operand. The OR operator || uses the right value if left is falsy, while the nullish coalescing operator ?? uses the right value if left is specifically null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It takes three operands (a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and lastly the expression to execute if the condition is falsy) and evaluates an expression based on a condition. A ternary operator is a single statement, while an if-else is a block of code.

- What is the `?.` (optional chaining) operator? When would you use it?
  It accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. You can use optional chaining when attempting to call a property or a method which may not exist.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. In an array, ... can be used anywhere in the array literal, and may be used more than once.

- What data types can be spread into an array? Into an object?
  Array and string; arrays and primitive data types

- How does spread syntax differ from rest syntax?
  Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
