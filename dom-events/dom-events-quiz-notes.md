# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  for troubleshooting problems and tracking the values of variables as the program runs
- What is the purpose of events and event handling?
  Events are when things happen in the system you are programming. The system produces (or "fires") a signal of some kind when an event occurs. The event handler will listen out for the event happening and will run a code in response to it happening.; we’re able to extend functionality that is not in the browser
- Are all possible parameters required to use a JavaScript method or function?
  No; it will depend on the function or method you’re using.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener method
- What is a callback function?
  a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
- What object is passed into an event listener callback when the event fires?
  the event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it is a reference to the object onto which the event was dispatched - it is a property of an event object that refers to the element that triggered the event; console log it.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first snippet correctly assigns the handleClick function as the event listener. The function is not being called in the first one, whereas the second one the function is being called.; the first one we’re passing a reference.

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
