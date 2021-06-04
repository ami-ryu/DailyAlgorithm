# Stack
First In - First Out data structure.

### Common Operations
1. enqueue
2. dequeue
3. front
4. back
5. length
6. isEmpty
7. getQueue
8. setQueue

### Use cases
- Reservation System
- BFS
- Cache
- Process
- Ticket Counter, Call Center, etc

### Data Structure
```javascript
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
  front() {
    return this._arr[0];
  }
  back() {
    return this._arr[this._arr.length - 1];
  }
  isEmpty() {
    return this._arr.length === 0
  }
  length() {
    return this._arr.length;
  }
  getQueue() {
    return this._arr;
  }
  setQueue(data) {
    this._arr = data;
  }
}

const queue = new Queue();
queue.enqueue(3); // 3
queue.enqueue(4); // 3, 4
queue.dequeue(); // 3
```