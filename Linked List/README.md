# Linked List
Linked List is a **linear collection of data** elements whose order is not given by their physical placement in memory.

Instead, each element **points** to the next.

### Use Cases
- Linked List is among the simplest and most common data structure.
- It can be used to implement several other common abstract data types, including lists, stacks, queues, etc.

### Advantage of Linked List
- Nodes can easily be removed or added from a linked list.

### Disadvantage of Linked List
- Search Operations are slow.
- More memory than array beacause of the pointer.

### Types
1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List

## 1. Singly Linked List
Singly Linked Lists contain nodes which have a data field as well as 'next' field, which pionts to the next node in line of nodes.

### Operations
1. Insertion: O(1)
2. Deletion: O(1)
3. Traversal: O(N)
   - reverse
   - contains
   - display
   
### Data Structures
```javascript
class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
 
  insert(newData, targetData) {
    let newNode = new Node(newData);
    let currentNode = this.find(targetData);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  findPrevious (targetData) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.data != targetData) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  delete(target) {
    let prevNode = this.findPrevious(target);
    if(prevNode && prevNode.next) prevNode.next = prevNode.next.next;
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.data != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  display() {
    let currentNode = this.head;
    while(currentNode.next) {
      console.log(currentNode.next.data);
      currentNode = currentNode.next;
    }
  }
}

const sl_list = new LinkedList();

sl_list.insert("Mango"); // head -> Mango
sl_list.insert("Banana"); // head -> Mango -> Banana

sl_list.display(); // Mango -> Banana

sl_list.delete("Mango"); // head -> Banana
```
