# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    Tt executes a provided function once for each array element.

  - What should the callback function do?
    It should execute for each element in the array. Its return value is discarded.

  - What is `Array.forEach` useful for?
    It is useful for looping through any array and executing a provided function once for each array element in ascending index order

- `Array.map`:

  - What does `Array.map` do?
    It creates a new array populated with the results of calling a provided function on every element in the calling array.

  - What should the callback function return?
    It should execute for each element in the array. Its return value is added as a single element in the new array

  - What is `Array.map` useful for?
    It allows you to iterate over an array and modify its elements using a callback function

- `Array.find`:

  - What does `Array.find` do?
    It returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

  - What should the callback function return?
    It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.

  - What is `Array.find` useful for?
    It is a convenient way to find and return the first occurence of an element in an array, under a defined testing function.

- `Array.filter`:

  - What does `Array.filter` do?
    It creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  - What should the callback function return?
    It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

  - What is `Array.filter` useful for?
    It is useful for creating a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method.

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
