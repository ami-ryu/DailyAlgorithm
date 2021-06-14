# ✔︎ Memory Management
## Memory life cycle

Regardless of the programming language, the memory life cycle is pretty much always the same:

1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore

- The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.
- 두 번째 부분은 모든 언어에서 명시적으로 사용된다. 할당과 해제는 저수준 언어에서는 명시적이며, 자바스크립트와 같은 대부분의 고수준 언어에서는 암묵적으로 작동한다.

1. Allocation in JavaScript
- Value initialization
- Allocation via function calls
  - Some function calls result in object allocation
  - Some methods allocate new values or objects
```javascript
var n = 123; // allocates memory for a number

var d = new Date(); // allocates a Date object
var e = document.createElement('div'); // allocates a DOM element

var s2 = s.substr(0, 3); // method allocates new values
```

2. Release when the memory is not needed anymore
- Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC).
- This automatic process is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is undecidable.
- Purpose: To monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
- 가비지 콜렉터의 목적은 메모리 할당을 추적하고 할당된 메모리 블록이 더 이상 필요하지 않게게 되었는지를 판단하여 회수하는 것이다. 이러한 자동 메모리 관리 프로세스는 궁극의 방법은 아니다. 왜냐하면 어떤 메모리가 여전히 필요한지 아닌지를 판단하는 것은 비결정적 문제이기 때문이다.

## Garbage Collection

### Reference
- The main concept that garbage collection algorithms rely on is the concept of reference.

### [Algorithm] Reference-counting garbage collection
- Example
```javascript
var x = {
  a: {
    b: 2
  }
};
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'x' variable.
// Obviously, none can be garbage-collected.

var y = x;      // The 'y' variable is the second thing that has a reference to the object.

x = 1;          // Now, the object that was originally in 'x' has a unique reference
                //   embodied by the 'y' variable.

var z = y.a;    // Reference to 'a' property of the object.
                //   This object now has 2 references: one as a property,
                //   the other as the 'z' variable.

y = 'mozilla';  // The object that was originally in 'x' has now zero
                //   references to it. It can be garbage-collected.
                //   However its 'a' property is still referenced by
                //   the 'z' variable, so it cannot be freed.

z = null;       // The 'a' property of the object originally in x
                //   has zero references to it. It can be garbage collected.
```
- 한계점) 순환참조 - Limitation: Circular references
  - Circular references are a common cause of memory leaks.
```javascript
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o는 o2를 참조한다.
  o2.a = o; // o2는 o를 참조한다.

  return "azerty";
}

f();
```

- Circular references - Real-life example: IE 6, 7
  - 인터넷 익스플로러 6, 7 은 DOM 오브젝트에 대해 Reference Counting 알고리즘으로 가비지 콜렉션을 수행한다. 흔히, 이 두 브라우저에서는 다음과 같은 패턴의 메모리 누수가 발생한다. 
```javascript
var div;
window.onload = function() {
  div = document.getElementById('myDivElement');
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join('*');
};
```

### [Algorithm] Mark-and-sweep algorithm
- As of 2012, all modern browsers ship a mark-and-sweep garbage-collector.
- 2012년 기준으로 모든 최신 브라우저들은 가비지 콜렉션에서 Mark-and-sweep algorithm 을 사용한다. 지난 몇 년간 연구된 자바스크립트 가비지 콜렉션 알고리즘의 개선들은 모두 이 알고리즘에 대한 것이다.

- Cycles are no longer a problem
- This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".
- This algorithm assumes the knowledge of a set of objects called roots. In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.

## Node.js
- Node.js offers additional options and tools for configuring and debugging memory issues that may not be available for JavaScript executed within a browser environment.

### V8 Engine Flags
The max amount of available heap memory can be increased with a flag:
```shell script
node --max-old-space-size=6000 index.js
```

We can also expose the garbage collector for debugging memory issues using a flag and the Chrome Debugger:
```shell script
node --expose-gc --inspect index.js
```

