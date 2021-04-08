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

function removeKFromList(l, k) {
  let currentNode = l;
  let nextNode = currentNode.next;
  const newNode = new ListNode();

  while (nextNode !== null) {
    // console.log(k);
    // console.log(currentNode.value);
    if (currentNode.value !== k) {
      newNode.value = currentNode.value;
      newNode.next = currentNode.next;
    }
    nextNode = currentNode.next;
    currentNode = nextNode;
  }
  console.log(newNode.valueOf());
}

module.exports = removeKFromList;
