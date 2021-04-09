/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and  = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const ListNode = require('../extensions/list-node');

function SinglyList() {
  this.length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value) {
  const node = new ListNode(value);
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
};

function removeKFromList(l, k) {
  let currentNode = l;
  let nextNode = currentNode.next;
  const newNode = new SinglyList();

  while (nextNode !== null) {
    if (currentNode.value !== k) {
      newNode.add(currentNode.value);
    }
    nextNode = currentNode.next;
    currentNode = nextNode;
  }
  return newNode.head;
}

module.exports = removeKFromList;
