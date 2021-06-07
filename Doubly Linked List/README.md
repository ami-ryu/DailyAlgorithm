# Doubly Linked List
A doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes.

Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.

## Use Cases

## Benefits and Disadvantages

### Benefits
- Since we have access to the previous node reference, we no longer need to iterate over the list for the pop method.
- It allows us to traverse the list in both directions.
- Doubly-linked lists have constant time for insertion and deletion at a known position while singly-linked lists have linear time.

### disadvantages
- We have to keep track of both previous and next pointers and make sure they are properly set when mutating the list.
- Doubly-linked lists use more memory per node since they hold two pointers.

## Operations
1. Insertion: O(1)
2. Deletion: O(1)
3. Traversal: O(N)
   - reverse
   - contains
   - display

## Type
1. Doubly Linked List
2. Circular Doubly Linked List
3. Asymmetric doubly linked list

### 1. Doubly Linked List
```javascript
class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
 
  push(newData) {
    const newNode = new Node(newData);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  pop() {
    if (this.length === 0) {
      return false;
    } 
  
    const popped = this.tail;
    const newTail = this.tail.prev;
    
    if (newTail) {
      newTail.next = null;
      this.tail.prev = null;
    } 
    else {
      this.head = null;
    }

    this.tail = newTail;
    this.length--;
  
    return popped;
  }

  shift() {
    //in case list is empty
    if (!this.head) {
      return false;
    }
    //save shifted node to variable
    const shiftedNode = this.head;
    //make the new head the next (might be null)
    const newHead = this.head.next; //might be null
    //if list is more than 1
    if (this.head !== this.tail) {
      newHead.prev = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
    }
    this.head = newHead;
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insertAtIndex(index, val) {
    //if index doesn't exist
    if (index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const after = this.accessAtIndex(index);
      const before = after.prev;
      after.prev = newNode;
      before.next = newNode;
      newNode.next = after;
      newNode.prev = before;
      this.length++;
    }
    return this;
  }

  removeAtIndex(index) {
    let removedNode;
    if (index >= this.length) {
      return false;
    }
    if (index == 0) {
      removedNode = this.shift();
    } else if (index == this.length - 1) {
      removedNode = this.pop();
    } else {
      removedNode = this.getNodeAtIndex(index);
      const after = removedNode.next;
      const before = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      before.next = after;
      after.prev = before;
      this.length--;
    }
    return removedNode;
  }

  getNodeAtIndex(index) {
    if (index >= this.length || index < 0) {
      return false;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  setNodeAtIndex(index, val) {
    const foundNode = this.getNodeAtIndex(index)
    if(foundNode){
        foundNode.value = val
        return foundNode;
    }
    return null;
  }
  
  printList() {
    console.log(list)
    if(this.head){
      let current = this.head;
      while (current.next) {
        console.log(current);
        current = current.next;
      }
      console.log(current);
    } else {
      console.log("empty list")
    }
  }
}
```

### 2. Circular Doubly Linked List
```javascript

```