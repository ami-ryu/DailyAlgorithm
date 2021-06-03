# List, List ADT

순서가 있는 연속된 데이터 구조입니다.
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

### Index
- JavaScript arrays are zero-indexed. Using an invalid index number returns `undefined`.
- Valid Index Scope : 0 ~ length-1

### `.length`
- A JS array's `length` property and numerical properties are connected.
- e.g., `join()`, `slice()`, `indexOf()`, `push()`, ...

### Object
```javascript
const fruits = ["Apple", "Banana"];

Object.keys(fruits);
// ["0", "1"]

Object.values(fruits);
// ["Apple", "Banana"]
```

**Syntax Error**
```javascript
const fruits = ["Apple", "Banana"];
fruits.consumer = "BTS";
fruits['10x'] = "10x";

console.log(fruits.0); // (X) a syntax error
console.log(fruits[0]); // (O) works properly

console.log(fruits.consumer); // "BTS"
console.log(fruits["consumer"]); // "BTS"

console.log(fruits.10x); // (X) a syntax error
console.log(fruits['10x']); // (O) works properly
```

----

## Common Operations
### Create
```javascript
const fruits = ["Apple", "Banana"];
```

### forEach
- Parameters: currentValue, index, array
```javascript
const fruits = ["Apple", "Banana"];
fruits.forEach((currentValue, index, array) => {
  console.log(currentValue, index);
})

// Apple 0
// Banana 1
```

### push, pop
`push`: Add an item to the end of an Array
`pop`: Remove an item from the end of an Array
```javascript
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
// 3
// fruits = ["Apple", "Banana", "Orange"]

fruits.pop();  // remove Orange from the end
// "Orange"
// fruits = ["Apple", "Banana"]
```

### shift, unshift
`shift`: Remove an item from the beginning of an Array
`unshift`: Add an item to the beginning of an Array
```javascript
const fruits = ["Apple", "Banana"];
const first = fruits.shift();  // remove Apple from the front
// first = ["Apple"]
// fruits = ["Banana"]

const length = fruits.unshift("Strawberry");
// 2
// fruits = ["Strawberry", "Banana"]
```

### indexOf
```javascript
const fruits = ["Strawberry", "Banana"];
const position = fruits.indexOf("Banana");
// 1
```

### splice
`splice`: Remove an tiem or items from an index position
```javascript
const fruits = ["Strawberry", "Banana", "Mango"];
const removedItem = fruits.splice(1, 1);
// removedItem = ["Banana"]
// fruits = ["Strawberry", "Mango"]

const newArray = fruits.splice(1, 2);
// newArray = ["Banana", "Mango"]
// fruits = ["Strawberry"]
```

### slice
`slice`: Copy an Array
```javascript
const fruits = ["Strawberry", "Banana", "Mango"];
const shallowCopy = fruits.slice()

// shallowCopy = ["Strawberry", "Banana", "Mango"]
// fruits = ["Strawberry", "Banana", "Mango"]
```

### join
`join`: Create and Return a new string by concatenating all of the elements in an Array.
```javascript
const fruits = ["Strawberry", "Banana", "Mango"];

console.log(fruits.join());
// "Strawberry,Banana,Mango"

console.log(fruits.join(''));
// "StrawberryBananaMango"

console.log(fruits.join('-'));
// "Strawberry-Banana-Mango"
```

### Regex (Regular Expression)
The result of a match between a `RegExp` and a string can create a JS Array.
e.g., `RegExp.exec()`, `String.match()`, `String.replace()`
```javascript
const myRegex = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz');
// myArray = ["dbBd", "bB", "d", index: 1, input: "cdbBdbsbz", groups: undefined]

console.log(myArray[2]);
// "d"

console.log(myArray.input);
// "cdbBdbsvz"
```