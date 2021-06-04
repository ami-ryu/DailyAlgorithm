# Dictionary
JS doesn't natively include a type called "Dictionary".

It does contain a very flexible type called "Object".

## Code
```javascript
let dict = new Object();
// or
dict = {};

// Initialize
dict = {
  item: "Banana",
  price: "1000"
};

// Populate values on the Object
dict["market"] = "A-Mart";
dict[1] = "one";
dict.customer = "BTS";
dict.getSomething = () => "Something";
```

## ES6 - Destructuring Assignment

```javascript
const item = "Banana";
const price = "1000";

const tag = {item, price};
// {item: "Banana", price: "1000"}
```

```javascript
const tag = {item: "Banana", price: "1000"};
const { item, price: specialPrice } = tag;

console.log(item); // "Banana"
console.log(specialPrice); // "1000"

/* Set default value */
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

## Iterating
```javascript
for (let key in dict) {
  console.log(dict[key]); // value
}
```