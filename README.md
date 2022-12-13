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

With regular functions, the value of This is set based on HOW the function is called. 

With arrow functions, the value of This is based on the function's surrounding 

context. 

In other words, the value of This inside an arrow function is the same as the 

value of This outside the function.

##### How THIS works in a standard function:

1. A new object:

```
const mySuperObject = new SuperObject('prop1', ['prop2']); 
```

The value of THIS inside the SuperObject constructor function is a new object because 

it was called with `new` keyword.

2. A specified object with call/apply:

```
const sum = object1.doSomething.call(object2);
```

The value of THIS inside `doSomething()` will refer to `object2` since the first 

parameter of `call()` is to explicitly set what THIS refers to.

3. A context object:

If the function is a method of an object:

```
object.coolMethod();
```

In the code above, the value of THIS inside `coolMethod()` will refer to `object`.

4. The global object or undefined:

If the function is called with no context:

```
coolMethod();
```

In the code above, the value of THIS inside `coolMethod()` is either the global object 

or, if in strict mode, it's `undefined`.

more information on [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

and on [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/master/README.md)

##### Default function parameters:

```
function hello(name = 'Visitor', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

console.log(hello()); // Welcome Visitor!
console.log(hello('Nikky')); // Welcome Nikky!
console.log(hello('Jennifer', 'Howdy')); // Howdy Jennifer!
```

##### ES6 Classes syntax:

```
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

var richardsPlane = new Plane(1);
richardsPlane.startEngines();

var jamesPlane = new Plane(4);
jamesPlane.startEngines();
```

"Old" ES5 "Class" syntax: [Click Me](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

Subclasses:

Big example of the "Old" ES5 subclasses' syntax and "New" ES6 subclasses' syntax: [Click Me](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

With Static method:

```
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  static badWeather(planes) {
    for (plane of planes) {
      plane.enginesActive = false;
    }
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}
```

And we can use it like

```
Plane.badWeather([plane1, plane2])
```

directly on `Plane` class.