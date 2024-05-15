# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  In React, an "event" refers to a user interaction with a UI element, such as clicking a button, hovering over an element, typing into an input field, or submitting a form.

- What is an "event handler"? Which component declares the handler?
  A function that is called in response to a specific user interaction or event occurring within a component. The component that the user interacted with.

- How do you pass an event handler to a React component?
  you define the event handler function in the parent component and then pass it down to the child component as a prop

- What is the naming convention for event handlers?
  handle as a prefix followed by a capital letter and the event

- What is an "event handler prop"? Which component declares the prop?
  It is a prop passed to a component that references a function or method, which is only called when a specific event occurs within that component; the parent component

- What are some custom event handler props a component may wish to define?
  onButtonClick, onFocus, onSubmit, onClick

- What is the naming convention for custom event handler props?
  on followed by the event, in camelCase.

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
