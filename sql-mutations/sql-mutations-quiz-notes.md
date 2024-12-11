# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete

- How do you add a row to a SQL table?
  insert into "table" ("attribute1", "attribute2", "attribute3", "attribute4")
  values ('val 1', 'val 2', 'val 3', 'val 4');

- How do you add multiple rows to a SQL table at once?
  value keyword followed by parenthesis separated by commas

- How do you update rows in a database table?
  update "table"
  set "targetedAttribute" = 'value'
  where (comparison expression to select row)

- How do you delete rows from a database table?
  delete
  from "table"
  where (comparison expression to select row)
  returning \* (this is optional);

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  You will affect every row when omitting the where clause

- How do you accidentally delete or update all rows in a table?
  if you omit the where clause

- How do you get back the modified row without a separate `select` statement?
  returning \*

- Why did you get an error when trying to delete certain films?
  because we were violating a foreign key constraint

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
