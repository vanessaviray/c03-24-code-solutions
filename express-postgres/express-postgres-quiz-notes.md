# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  The pg NPM package is a Node.js client library for interacting with PostgreSQL databases.

- How do you tell `pg` which database to connect to?
  Using a Connection String

- How do you send SQL to PostgreSQL from your Express server?
  within the async function that gets passed in your middleware function

- How do you get the rows return from the SQL query?
  by passing the sql variable in the query method on the the database object

- What must you always remember to put around your asynchronous route handlers? Why?
  try-catch. to catch and handle errors that are thrown by asynchronous code properly

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  A SQL Injection attack occurs when an attacker inserts or "injects" malicious SQL code into a query. This can manipulate the database, allowing unauthorized data access, data modification, or even database deletion. Use parameterized queries

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
