# Javascript notebook.

### JavaScript-notebook :notebook: , different useful "How to", like "How to deploy a piece of code as text on site", "How to add element to body or DOM document's element using JavaScript", and others.

##### How to deploy a piece of code as text on site:

###### See the deployed project [on Github pages](https://hacking-nassa-with-html.github.io/javascript-notebook)

##### How to add element to body or DOM document's element using JavaScript:

Syntax: Element.insertAdjacentHTML() 

```
insertAdjacentHTML(position, text)
```

example: main.js 93

```
document.body.insertAdjacentHTML("afterend", mainPageContent())
```

more information [on MDN pages](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

and [on Stack Overflow pages](https://stackoverflow.com/questions/15741006/adding-div-element-to-body-or-document-in-javascript)


##### How to Convert a function to an arrow function:

function declaration .map() syntax:

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
  return name.toUpperCase();
});
```

and arrow function .map() syntax:

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
)
console.log(upperizedNames)
```

one more example of arrow .map()

```
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    square => square * square
)

console.log(...squares);
```

---

function declaration .filter() syntax:

```
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function (name) {
    return name.length > 6;
});

console.log(longNames)
```

and arrow function .filter() syntax:

```
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNamesArrow = names.filter(name => name.length > 6)
```

##### Keyword THIS:

With regular functions, the value of This is set based on how the function is called. 

With arrow functions, the value of This is based on the function's surrounding context. 

In other words, the value of This inside an arrow function is the same as the 

value of This outside the function.
