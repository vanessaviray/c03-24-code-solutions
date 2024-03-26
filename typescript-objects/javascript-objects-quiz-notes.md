# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?
  used to store keyed collections of various data and more complex entities

- What are object properties?
  it is a "key: value" pair, where key is a string (also called a "property name"), and value can be anything.

- Describe object literal notation.
  a key followed by a colon and a property wrapped in curly braces are assigned to the object name.

- How do you remove a property from an object?
  by using the delete operator. delete operator followed by property values written in dot notation.

- What are the two ways to get or update the value of a property?
  You can use dot notation to assign or update a new value, or you can use square bracket notation.

- What is the purpose of interfaces in TypeScript?
  they define contracts within your code as well as contracts with code outside of your project.

- what are 2 different ways to get or update the value of a property?
  interface and type

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  they are denoted by a ? at the end of the property name in the declaration. They are useful when creating patterns like "option bags" where you pass an object to a function that only has a couple of properties filled in. You can also describe these possibly available properties while still also preventing use of properties that are not part of the interface.

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
