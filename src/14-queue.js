const ListNodeStab = require('../extensions/list-node');
const ListNode = require('./list-node');

class Queue {
  constructor() {
    this.head = null;
    this.length = null;
    this.stab = new ListNodeStab();
  }

  size() {
    return this.length;
  }

  enqueue(element) {
    let currentNode = this.head;
    const node = new ListNode(element);
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
    return node.value;
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

module.exports = Queue;
