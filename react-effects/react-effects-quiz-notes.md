# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  The Mounting Phase begins when a component is first created and inserted into the DOM

- What is a React Effect?
  useEffect is a React Hook that lets you synchronize a component with an external system.

- When should you use an Effect and when should you not use an Effect?
  If you’re not trying to synchronize with some external system, you probably don’t need an Effect

- When do Effects run?
  After the first render and after every update

- What function is used to declare an Effect?
  useEffect function

- What are Effect dependencies and how do you declare them?
  Effect dependencies are values or variables that an effect depends on, and are defined in the dependency array of the React useEffect hook

- Why would you want to clean up from an Effect?
  In React, cleaning up side effects is a way to remove side effects that are no longer required. This can help avoid memory leaks, bugs, and slower performance.

- How do you clean up from an Effect?
  use the return statement

- When does the cleanup function run?
  the cleanup function runs when a component unmounts, and runs before each re-render

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
