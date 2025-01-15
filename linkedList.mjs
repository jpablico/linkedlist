import { Node } from './node.mjs';

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (value === null || value === undefined) {
      console.error('Cannot append null or undefined to the list');
      return;
    }
  
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
  
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    return result + 'null';
  }
}