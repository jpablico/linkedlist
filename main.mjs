import { LinkedList } from './linkedList.mjs';

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

const outputDiv = document.getElementById('output');
outputDiv.textContent = list.toString(); // Render the linked list as a string

console.log(list.toString()); // Properly logs the string representation of the list