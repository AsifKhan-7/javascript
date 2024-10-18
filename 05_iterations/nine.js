let mySet = new Set();

// mySet.add("Asif").add("Arif").add("Qasim");

mySet.add(1).add(2).add(3).add(4).add(5); // add the new and unique value at the end of the Set object

console.log(`Values added in set: ${[...mySet]}`);
console.log([...mySet]); //using spread operator  and [] brackets converts Set into array and work with the data is easy in array format

mySet.delete(1); // delete the value of Set object and return true and false but printed the reamin object after this method

console.log(`Values deleted in set: ${[...mySet]}`);
console.log([...mySet]); //using spread operator  and [] brackets converts Set into array and work with the data is easy in array format

mySet.clear();
console.log([...mySet]); // removes all the elemens from the Set object

console.log([...mySet]);
console.log(mySet.size);

let cart = new Set();
cart.add("apple");
cart.add("banana");
cart.add("apple"); // Duplicate, won't be added

console.log([...cart]); // Output: ['apple', 'banana'] using spread operator  and [] brackets converts Set into array and work with the data is easy in array format

let uniqueTags = new Set(["tag1", "tag2", "tag3"]);

for (let tag of uniqueTags.entries()) {
  console.log(tag); // returns an array for each element like[value, value]
}

let categories = new Set(["news", "sports", "entertainment"]);

for (let category of categories.values()) {
  console.log(category); //contains the values for each element
}

let events = new Set(["event1", "event2", "event3"]);

for (let event of events.keys()) {
  console.log(event); // identical to values() method
}

// In real life, JavaScript Set methods and operations are used in various practical scenarios to handle collections of unique items.
