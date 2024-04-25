# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  It is a package manager and a software register. It is a place where developers can find, build and manage code packages
- What is a package?
  A directory with one or more files in it that also has a package.json file that has meta data on it

- What are some other popular package managers?
  Mac App store, Microsoft store, Google Play

- How can you create a `package.json` with `npm`?
  npm init command

- What is a dependency and how do you add one to a package?
  Packages required by your application in production; npm install --save-prod

- What happens when you add a dependency to a package with `npm`?
  npm will download dependencies and devDependencies that are listed in package.json that meet the semantic version requirements listed for each

- What is a devDependency and how do you add one to a package?
  Packages that are only needed for local development and testing; npm install --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  you create a scripts object with a key and value inside of the package. NPM scripts are used to automate tasks

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
