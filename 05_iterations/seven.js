const myNums = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// const newNums = myNums.map( (num) => {
//   return num * 2;
// });

// console.log(newNums);

// const employees = [
//   { name: "Alice", salary: 50000, department: "HR" },
//   { name: "Bob", salary: 60000, department: "Engineering" },
//   { name: "Charlie", salary: 70000, department: "Marketing" },
//   { name: "David", salary: 55000, department: "Engineering" },
//   { name: "Eve", salary: 80000, department: "Finance" },
// ];

// const updatedEmployees = employees.map((employee) => {
//   return { // this brace  specifies that an object is return
//     ...employee,
//     // salary: parseFloat((employee.salary * 1.1).toFixed(2)),
//     salary: Math.round(employee.salary * 1.1),
//     department: employee.department.toUpperCase(),
//   };
// });

// console.log(updatedEmployees);


//============================= Chaining ========================================



const newNums = myNums
              .map( (num) => (num * 10))
              .map( (num) => (num + 1))
              .filter( (num) => (num >= 40));

console.log(newNums);              