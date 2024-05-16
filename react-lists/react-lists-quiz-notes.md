# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?
  When you want to render dynamic data or if you want to make your code more reusable

- Why is it important for React components to be data-driven?
  Making React components data-driven is crucial for building scalable, maintainable, and reusable applications. 1. It promotes a clear separation of concerns between the presentation layer (components) and the data layer 2. Data-driven components are more reusable since they can accept different datasets or configurations 3. They would be more scalable because they can handle varying amounts of data without requiring extensive modifications 4. It would be easier to debug

- Where in the component code would a list of React components typically be built?
  In the part of the code that would render the elements

- What `Array` method is commonly used to create a list of React components?
  map method

- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

- What is the best value to use as a "key" prop when rendering lists?
  The best value to use as a "key" prop when rendering lists in React is typically a unique identifier associated with each item in the list. Typically a number value.

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
