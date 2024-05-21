# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?

1. identify components 2. Identify state 3. Identify Actions

- How does data flow in React?
  Typically from parent components to child components

- How can children components modify state in their parents?
  Parents can define callback functions and pass them down to child components as props.
  Child components can call these callback functions, passing any necessary data to the parent component as arguments. The state can be modified by setting the state and passing the data that was passed to the parent component as an argument.

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
