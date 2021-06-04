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
    return this._arr.length === 0;
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
