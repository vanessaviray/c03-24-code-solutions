# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  a reference to the object onto which the event was dispatched
- What is the effect of setting an element to `display: none`?
  it is completely removed from the layout, and it doesn't take up any space on the page
- What does the `element.matches()` method take as an argument and what does it return?
  It takes a string containing valid CSS selectors and it returns a boolean value
- How can you retrieve the value of an element's attribute?
  getAttribute()
- At what steps of the solution would it be helpful to log things to the console?
  Whenever you want to verify the values you are intending to use, or to check if the function you are trying to create is working as intended.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  you would have to set an event listener for every single child element
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  you would have to extract every value of the node list at each index, and compare each of those individually.

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
