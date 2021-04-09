const ListNode = require('../extensions/list-node');

class List {
  constructor() {
    this.head = null;
    this.length = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    console.log(node);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.length++;
      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return node;
  }

  dequeue() {
    let currentNode = this.head;
    const nodeValue = currentNode.value;
    currentNode = currentNode.next;
    this.head = currentNode;
    this.length--;
    return nodeValue;
  }
}

const listTest = new List();
listTest.enqueue(5);
listTest.enqueue(7);

// console.log(listTest.head);
// console.log(listTest.length);

listTest.dequeue();

// console.log(listTest.head);
// console.log(listTest.length);
