# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static positioning
- How does setting `position: relative` on an element affect document flow?
  once the positioned element has taken its place in the normal flow, you can modify its final position, including making it overlap other elements on the page
- How does setting `position: relative` on an element affect where it appears on the page?
  it pushes the specified side of the positioned box, moving it in the opposite direction
- How does setting `position: absolute` on an element affect document flow?
  it no longer exists in the normal document flow. Instead, it sits on its own layer separate from everything else.
- How does setting `position: absolute` on an element affect where it appears on the page?
  the top, bottom, left, and right values will specify the distance the element should be from each of the containing element's sides
- How do you constrain an absolutely positioned element to a containing block?
  After the element is removed from the normal document flow, and no space is created for the element in the page layout, the element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block.
- What are the four box offset properties?
  top , right , bottom , and left

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
