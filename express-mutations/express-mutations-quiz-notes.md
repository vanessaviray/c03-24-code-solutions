# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  It specifies the desired action to be performed. Each method corresponds to a specific operation which helps both the clients and servers understand and process the request appropriately. They are used conventionally and are sometimes not required to follow.

- What is the significance of an HTTP response's status?
  It indicates the result of the client's request to the server. It consists of a three digit status code and a corresponding reason phrase.

- What does the express.json() middleware do and when would you need it?
  Is used to parse incoming requests with JSON format. When a request is received, the express.json() middleware checks the content-type header of the request. If the header indicates that the content is JSON (application/json), it parses the JSON string into a javascript object. After parsing, the javascript object is assigned to the req.body property of the request object. You need it in situations where your application expects to receive JSON data from clients. (API endpoints, form submissions, ajax requests)

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
