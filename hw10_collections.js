// hw10_collections.js
// CIST 0265 — Week 10 Homework: Sets, Dictionaries, and Hashes

// ════════════════════════════════════════════
// EXERCISE 4 — Set Operations 
// ════════════════════════════════════════════

//sets- is a collection of UNIQUE values only (No Dups)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// TODO 4a: Return a new Set containing the union of a and b.
function union(a, b) {
    return new Set([...a,...b]); //spread both sets into one array
}

// TODO 4b: Return a new Set containing the intersection of a and b.
function intersection(a, b) {
    return new Set ([...a].filter(value => b.has(value))); //keeps only the values that are in both
}

// TODO 4c: Return a new Set containing values in a but not in b.
function difference(a, b) {
    return new Set([...a].filter(value => !b.has(value))); // keeping only the values NOT in b 
}

// TODO 4d: Return true if every value in subset exists in superset.
function isSubset(subset, superset) {
    return [...subset].every(value => superset.has(value)); //every value in subset must exist in superset
}

//the key part here is the .has() part it checks if a value exists in a set

// ════════════════════════════════════════════
// EXERCISE 5 — Dictionary / Map Practice 
// ════════════════════════════════════════════
const inventory = new Map([
 ["apples", 10],
 ["bananas", 5],
 ["oranges", 8]
]);

// TODO 5a: addOrUpdateItem(map, item, qty)
// If item exists, increase its quantity by qty.
// If item does not exist, add it with qty.
function addOrUpdateItem(map, item, qty) {
    function addOrUpdateItem (map,item, qty) { //check if the item already exists 
        if (map.has(item)) { //if yes, get the current qty and add to it 
            map.set(item, map.get(item) + qty);
        } else {
            map.set (item, qty); // if no, add it fresh with given qty 
        }
    }
}

// TODO 5b: totalQuantity(map)
// Return the sum of all quantities stored in the map.
function totalQuantity(map) {
    let total = 0;
    for (let qty of map.values()) { // .values() gives us just the quantities, not the keys 
        total += qty;  // add each quantity to the running total 
    }
    return total;
}

// TODO 5c: itemsBelowThreshold(map, threshold)
// Return an array of item names whose quantity is < threshold.
function itemsBelowThreshold(map, threshold) {
    const result = [];
    for (let [item, qty] of map) {  //loop through key - value pairs together 
        if (qty < threshold) { 
            result.push(item); //if qty is below threshold, add the item name to results
        }
    }
    return result;
}

// ════════════════════════════════════════════
// EXERCISE 6 — BONUS: Simple Hash Function 
// ════════════════════════════════════════════
// Write a hash function that sums character codes and
// compresses into the table size using modulo.
// Example: hash("cat", 10) → some integer from 0 to 9
function simpleHash(key, tableSize) {
    let sum = 0; 
    for (let char of key) { //loop through each character in the string
        sum += char.charCodeAt (0);  //add the character's numeric code (a =97, b=98, etc.)
    }
    return sum % tableSize;  //compress into range 0 to tableSize-1 useing modulo
}

// BONUS 6b: groupByFirstLetter(words)
// Return an object where each key is a first letter and
// each value is an array of words that begin with that letter.
function groupByFirstLetter(words) {
  const result = {};                  // start with an empty object

  for (let word of words) {          // loop through every word
    const letter = word[0];          // grab the first character of the word

    if (!result[letter]) {           // if we haven't seen this letter yet...
      result[letter] = [];           // ...create a new empty array for it
    }

    result[letter].push(word);       // add the word to its letter's array
  }

  return result;
}
module.exports = {
 union,
 intersection,
 difference,
 isSubset,
 addOrUpdateItem,
 totalQuantity,
 itemsBelowThreshold,
 simpleHash,
 groupByFirstLetter
};