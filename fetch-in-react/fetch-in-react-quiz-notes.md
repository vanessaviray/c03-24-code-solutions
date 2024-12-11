# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  fetch()

- What two things need to be done to properly handle HTTP request errors? Why?
  Try catch block and a check to see if the response was ok; The application can determine if the request was successful or if an error occurred

- How can `useEffect` be used to load data for a component?
  Calling an async function and utilizing the fetch function to get data from an external source like an api

- How do you use `useEffect` to load component data just once when the component mounts?
  By passing an empty array in the 2nd parameter of the useEffect

- How do you use `useEffect` to load component data every time the data key changes?
  By passing the data key as a dependency in the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  With a third-party data management library like React Query and Vercel SWR

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
