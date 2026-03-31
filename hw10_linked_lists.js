// hw10_linked_lists.js
// CIST 0265 — Week 10 Homework: Linked Lists

// ─── Provided Node + LinkedList classes (do not modify constructor names) ─────
/* Node represents a single element in the linked list */
/*  each node holds a value and a pointer to the next node*/
class Node {
 constructor(value) {
this.value = value; /* the data stored in this node */
this.next = null; /* the pointer to the next mode*/
 }
}

/* LinkedList is a chain of Node objects linked together, it keeps track of the first node (head) and how many nodes exist (size)*/
class LinkedList {
 constructor() {
this.head = null; /* the first node in the list (null means the list is empty)*/
this.size = 0; /* tracks the total number of nodes to hold the value*/
 }

 /* append(value) - adds a new node with the given value to the END of the list */
 append(value) {
const newNode = new Node(value); /* create a new node to hold the value*/
if (!this.head) {
this.head = newNode;
/* if the list is empty, the new node becomes the head (first element) */
 } else {
    /* otherwise, walk through the list until we find the last node*/
let current = this.head;
while (current.next) current = current.next; // move forward until .next is null
current.next = newNode; //attach the new node after the last node 
 }
this.size++; //increment the size counter since we added a node
 }


 //toArray() -  convert the linked list into a regular JavaScript array
 // useful for printing or checking the contents of the list 
 toArray() { 
const result = []; // start w/ an empty array 
let current = this.head; // start at the first node 

//walk through each node and push its value into the array 
while (current) {
result.push(current.value); // add this node's value to the array 
current = current.next; // move to the next node 
 }
return result; // return the completed array 
 } 
}

// ════════════════════════════════════════════
// EXERCISE 1 — Linked List Traversal & Search
// ════════════════════════════════════════════
const numbers = new LinkedList();
numbers.append(10);
numbers.append(20);
numbers.append(30);
numbers.append(40);

// TODO 1a: Return the number of nodes in the list by traversal,
// not by using list.size.

//travelsal will follow the same pattern as toArray()
function countNodes(list) {
    let count = 0; // start the counter at 0 
    let current = list.head; // start at the first node

    while (current) { // keep going until current is null (end of list)
        count ++; // found a node, add 1 
        current = current.next  // move to the next node 
    }
    return count; //return the total count 
}

// TODO 1b: Return true if target exists in the list, false otherwise.
function containsValue(list, target) {
    let current = list.head; //start at the first node 

    while (current) { //walk through every node
        if (current.value === target) { // if this node's value matches the target 
            return true; // then return true
        }
        current = current.next; // move to the next node 
    }

    return false; // got through the whole list without finding  it 
}

// TODO 1c: Return the sum of all node values in the list.
function sumList(list) {
    let sum = 0; // setting sum to 0 
    let current = list.head // start with the first node

    while (current) {  //walk through every node 
        sum += current.value; //add this node's value to the running total
        current = current.next; //move to the next node
    }

    return sum; // return the final total
}

//linked list transversal - the action of walking through it 
// start with value being null 
// loop while current isn't null 
//do something to the current value 
// then move forward 'current = current.next'

// ════════════════════════════════════════════
// EXERCISE 2 — Insertions / Deletions 
// ════════════════════════════════════════════

// TODO 2a: prepend(list, value)
// Insert a new node at the front of the list.
function prepend(list, value) {
    const newNode = new Node (value) // Create the new node
    newNode.next = list.head;  // point the new node to the current 1st node 
    list.head = newNode;   // make the new node the new head of the list
    list.size++;  //update the size of the list
}

// TODO 2b: removeFirst(list)
// Remove and return the first node's value.
// Return null if the list is empty.
function removeFirst(list) {
    if (!list.head) return null;  //if the list is empty, return null 

    const removedValue = list.head.value; // save the first node's value
    list.head = list.head.next; // move head forward to the second node 
    list.size --;  //update the size 
    return removedValue; //return the value we removed 
}

// TODO 2c: insertAfter(list, target, value)
// Insert value immediately after the first occurrence of target.
// Return true if inserted, false if target not found.
function insertAfter(list, target, value) {
    let current = list.head; // start at the first node 

    while (current) {          // walk through the list 
        if (current.value === target) {  // found the target node 
            const newNode = new Node(value);  //create the new node 
            newNode.next = current.next; //new node points to whatever came after target
            current.next = newNode; //target now points to the new node
            list.size++; 
            return true; // insertion successful 
        }
        current = current.next;
    }

    return false; //target wasn't found 
}

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Reverse a Linked List 
// ════════════════════════════════════════════
// Reverse the list in-place and return the list.
// Example: 10 -> 20 -> 30 becomes 30 -> 20 -> 10
function reverseList(list) {
    let prev = null; // the node behind current (starts as nothing)
    let current = list.head; // start at the first node 

    while (current) {
        let nextNode = current.next;  //save the next node before we overwrite it 
        current.next = prev; //flip the pointer - point backards instead of forwards
        prev = current;  // move prev forward 
        current = nextNode; // move current forward 
    }

    list.head = prev; // prev is now sitting on the last node, which is the new head 
    return list;
}

module.exports = {
 Node,
 LinkedList,
 countNodes,
 containsValue,
 sumList,
 prepend,
 removeFirst,
 insertAfter,
 reverseList
};