# Stack
Last In - First Out

### Common Operations
1. push
2. pop
3. peek
4. length
5. isEmpty
6. getStack
7. search
8. clear

### Use cases
- 이전의 작업 내용을 저장해둬야할 때 사용 
- Text Editor Undo method
- JavaScript Engine Call Stack
- Web browser history back & forward
- DFS search algorithm
- Valid Parenthesis String (올바른 괄호 문자열 검사)
- Convert infix to postfix

### 배열과 다른점
- 배열과 다르게 스택은 O(1) 으로 i번째 항목에 접근할 수 없다.
- push, pop 연산은 O(1) 으로 가능하다.

### Data Structure
```javascript
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
stack.peek(); // 2
```