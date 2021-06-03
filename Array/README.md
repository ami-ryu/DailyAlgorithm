# Array

The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Array 전역 객체는 배열을 생성할 때 사용하는 리스트 형태의 객체입니다.


### Index
- JavaScript arrays are zero-indexed. Using an invalid index number returns `undefined`.
- Valid Index Scope : 0 ~ length-1

### length
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

## 🌟 Common Operations
### Create
```javascript
const fruits = ["Apple", "Banana"];
```

### forEach
Parameters: currentValue, index, array
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

### find
```javascript
const numbers = [1, 4, 10, 14, 20];
const found = numbers.find(element => element > 10);
// 14
```

### includes
`incdlues()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

배열이 특정 요소를 포함하고 있는지 판별합니다.
```javascript
const fruits = ["Strawberry", "Banana"];
console.log(fruits.includes("Banana"));
// true
```

### splice
`splice`: Remove an item or items from an index position
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

### concat
`concat()`: Merge two or more Arrays.

This method doesn't change the existing arrays, but instead returns a new Array.

인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
```javascript
const fruits = ["Strawberry", "Banana", "Mango"];
const newArray = fruits.concat(["Cherry"]);

// newArray = ["Strawberry", "Banana", "Mango", "Cherry"]
// fruits = ["Strawberry", "Banana", "Mango"]
```

### map
`map()`: Create a new Array populated with the results of calling a provided function on every element in the calling array

Parameters: currentValue, index, array

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
```javascript
const numbers = [0, 1, 2];
const newArray = numbers.map((currentValue, index, array) => currentValue + 1);
// [1, 2, 3]
```

### reduce
`reduce()`: Executes a reducer function on each element of the array, resulting in a single output value

배열의 각 요소에 대해 주어진 Reducer 함수를 실행하고, 하나의 결과값을 반환합니다.

Parameters: callbackFn, initialValue

`callbackFn`: The reducer function takes four arguments:
1. Accumulator
2. Current Value
3. Current Index
4. Source Array

```javascript
const numbers = [0, 1, 2];
const sum = numbers.reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 100);
// 100 + 0 + 1 + 2 = 103
```

### filter
`filter()`: Create a new Array with all elements that pass the test implemented by the provided function.

주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
```javascript
const numbers = [0, 1, 2];
const newArray = numbers.filter((element, index, array) => element > 0);
// newArray = [1, 2]
// numbers = [0, 1, 2]
```

### sort
`sort()`: Sort the elements of an Array **in place** and returns the sorted array.
```javascript
const fruits = ["Strawberry", "Banana", "Mango"];
fruits.sort();
// ["Banana", "Mango", "Strawberry"]
```

⚠️ If compareFn is not supplied, elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.

compareFn 이 없으면 요소를 문자열로 변환하고 유니코드 포인트 순서로 문자열을 비교하여 정렬하므로, 숫자로 비교하기 위해서는 compareFn 을 구현해주어야 합니다.
```javascript
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
// [1, 100000, 21, 30, 4]

numbers.sort((a, b) => a - b);
// [1, 4, 21, 30, 100000]
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
