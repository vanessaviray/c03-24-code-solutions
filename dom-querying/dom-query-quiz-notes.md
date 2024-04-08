# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  troubleshooting problems and tracking the values of variables as the program runs
- What is a "model"?
  typically refers to a data structure. For the DOM, it is referring to the structure of the document.
- Which "document" is being referred to in the phrase Document Object Model?
  html document
- What is the word "object" referring to in the phrase Document Object Model?
  Every html tag
- What is a DOM Tree?
  It consists of a root node, which is the document itself, and a series of child nodes that represent the elements, attributes, and text content of the document
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById, document.querySelector
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  To improve efficiency. Once the reference has been saved in a variable, accessing the element again does not require another search through all of the HTML so that it can find the elements we are looking for.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  It can improve a webpage's load time. Placing scripts at the bottom allows the browser to render the visible content of the page first, providing a faster perceived load time for users
- What does `document.querySelector()` take as its argument and what does it return?
  A string containing one or more selectors to match; returns the first Element within the document that matches the specified selector, or group of selectors
- What does `document.querySelectorAll()` take as its argument and what does it return?
  A string containing one or more selectors to match against; returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors

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
