console.log("-------------------------------");

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(text);

console.log("-------------------------------");

//parse method- it does convert JSON into JS object
const data = JSON.parse(text);
console.log(data);

console.log("-------------------------------");

const occasion = {
  type: "conference",
  name: "Tech Summit 2024",
  date: "2024-11-15",
  location: "San Francisco",
};

console.log(occasion);

console.log("-------------------------------");

//parse method- it does convert JS object into JSON
const obj = JSON.stringify(occasion);

console.log(obj);

//Note: JS object is a Data Structure and
//JSON is a data format in plain text
