// let Name;
// let age;
// let favorite_Programming;

const { text } = require("express");

// const { createRef } = require("react");

// Name = "Mike";
// age = 21;
// favorite_Programming = "JavaScript";

// const Message = ` My Name is : ${Name} am :${age} years old  , And the favorite Programming is ${favorite_Programming}`;

// console.log(Message);

// //let see the type of this things

// console.log(typeof Name);
// console.log(typeof age);
// console.log(typeof favorite_Programming);
// console.log(typeof Message);
// ===========================
// let Name;
// let age;
// let favorite_Programming;

// Name = " mike ";
// age = 32;
// favorite_Programming = "c##";

// const Message = `My Name is : ${Name} am a ${age} years old , and the favorit Programming is ${favorite_Programming}`;

// console.log(Message); // let Name;
// // let age;
// // let favorite_Programming;

// const { createRef } = require("react");

// Name = "Mike";
// age = 21;
// favorite_Programming = "JavaScript";

// const Message = ` My Name is : ${Name} am :${age} years old  , And the favorite Programming is ${favorite_Programming}`;

// console.log(Message);

// //let see the type of this things

// console.log(typeof Name);
// console.log(typeof age);
// console.log(typeof favorite_Programming);
// console.log(typeof Message);
// ===========================
//              day 2
// ===========================
// let Name;
// let age;
// let favorite_Programming;

// Name = " mike ";
// age = 32;
// favorite_Programming = "c##";

// const Message = `My Name is : ${Name} am a ${age} years old , and the favorit Programming is ${favorite_Programming}`;

// console.log(Message);

// // lets see the type of all this var

// console.log(typeof Name);
// console.log(typeof age);
// console.log(typeof favorite_Programming);
// console.log(typeof Message);

// ================

// // day 3

// let name = ["maike", "johne", "louis"];
// // console.log(name);

// // push : add elements to last Index
// name.push("Louisa");

// // console.log(name);

// // Unshift : add elements to first Index
// name.unshift("It", "GG");

// console.log(name);

// // shift : remove a elements from the Array

// name.shift();
// name.shift();
// name.shift();

// console.log(name);

// =========================

// new lets work on the students

// const students = [
//   { id: 1001, name: "Yassine" },
//   { id: 1002, name: "Sara" },
//   { id: 1003, name: "Mehdi" },
//   { id: 1004, name: "Fatima Zahra" },
//   { id: 1005, name: "Anas" },
//   { id: 1006, name: "Nour" },
//   { id: 1007, name: "Amine" },
//   { id: 1008, name: "Salma" },
//   { id: 1009, name: "Youssef" },
//   { id: 1010, name: "Imane" },
//   { id: 1011, name: "Karim" },
//   { id: 1012, name: "Hiba" },
//   { id: 1013, name: "Othmane" },
//   { id: 1014, name: "Rania" },
//   { id: 1015, name: "Zakaria" },
//   { id: 1016, name: "Lamiae" },
//   { id: 1017, name: "Hamza" },
//   { id: 1018, name: "Meryem" },
//   { id: 1019, name: "Adam" },
//   { id: 1020, name: "Douaa" },
// ];

// console.log(students);

// students.shift();
// students.shift();

// ======================
// pop : this romive a Element from the laste Index
// students.pop();
// students.pop();
// students.pop();
// students.pop();
// students.pop();

// console.log(students.pop());
// // =============================

// // Splice and slice
// // ==========================================
// //               Day 4
// // =========================================

// // Object
// // this is a normal thing to add a info to the person
// // its hard and not good

// // let name = "Mike"
// // let age = 18
// // let address = "USA"

// // we use a Object

// // let person = {
// //   name: "Mike",
// //   age: 18,
// //   address: "USA",
// // };

// // // console.log(person);

// // // if you want to add Element inside a value
// // person.name = "Jhone";
// // console.log(person.address);

// // Object
// // Array
// // Function

// const Company = "MVC";

// // this is the normale function
// // function theUser(name) {
// //   console.log(
// //     ` Hi ${name}, Welcome to the ${Company} Company! You are the one we chose for this role, so get ready for an exciting journey ahead.`,
// //   );
// // }

// // theUser("Mike");

// // US Names for Men
// // 01 Liam
// // 02 Noah
// // 03 Oliver
// // 04 James
// // 05 Elijah

// // US Names for Women
// // 01 Olivia
// // 02 Emma
// // 03 Charlotte
// // 04 Amelia
// // 05 Sophia

// const CompanyEmployees = ["Liam", "Noah", "Oliver", "James", "Elijah"];

// const CompanyMessage = () => {
//   (console.log(
//     `Hello, ${CompanyEmployees[1]} Welcome to the ${Company} Company team!`,
//   ),
//     console.log(
//       `Hello, ${CompanyEmployees[2]} Welcome to the ${Company} Company team!`,
//     ),
//     console.log(
//       `Hello, ${CompanyEmployees[3]} Welcome to the ${Company} Company team!`,
//     ),
//     console.log(
//       `Hello, ${CompanyEmployees[4]} Welcome to the ${Company} Company team!`,
//     ));
// };

// CompanyMessage();

// // new lets create a function inside a function

// const CompanyID = [
//   { ID01: "MVX" },
//   { ID02: "DXS" },
//   { ID03: "Random" },
//   { ID04: "MVC" },
//   { ID05: "DSX" },
// ];

// // ================== NOTE =====================
// // so here i have a problem  because a a programmme run like this Hello, Liam Welcome to the MVC Company team!
// // the ID HX is undefined

// // 01=> so me i want just the  this objects i have muldtbule key and values and i want to console a key or  a value of tha key index one
// // console.log(`the ID HX is ${CompanyID}`);
// // 02 so to fixe it we have to
// // can easily convert the keys or values into an array to grab the element at index 1

// // Here is how you do it using Object.keys() and Object.values().

// // ===================================

// const allValues = CompanyID.map((obj) => Object.values(obj)[0]);
// // console.log(allValues);

// const allKeys = CompanyID.map((obj) => Object.keys(obj)[0]);
// // console.log(allKeys[0]);

// const calculatrice = (num1, num2) => {
//   const results = num1 * num2;
//   let finalString = String(results);
//   (console.log(
//     `Please ${CompanyEmployees[1]} provide a 2-digit number to create your ID `,
//   ),
//     console.log(
//       `Please ${CompanyEmployees[2]} provide a 2-digit number to create your ID `,
//     ),
//     console.log(
//       `Please ${CompanyEmployees[3]} provide a 2-digit number to create your ID `,
//     ),
//     console.log(
//       `Please ${CompanyEmployees[4]} provide a 2-digit number to create your ID `,
//     ),
//     console.log(`${CompanyEmployees[1]} ID : ${finalString + allValues[1]}`));
//   console.log(`${CompanyEmployees[2]} ID : ${finalString + allValues[2]}`);
//   console.log(`${CompanyEmployees[3]} ID : ${finalString + allValues[3]}`);
//   console.log(`${CompanyEmployees[4]} ID : ${finalString + allValues[4]}`);
// };

// calculatrice(2, 24);

// ====================================

//              day5

// ====================================

// function type

// on a function we have tow type
// Type 1: The "Doer" (Actions / console.log)

function SayHello() {
  console.log("Hello, world!");
}

sayHello(); // Out: Hello, world!

// // Type 2: The "Giver" (The return Statement)
// // This type of function processes data and hands a value back

function AddNumbers(a, b) {
  return a + b;
}

let total = AddNumbers(5, 10);
// total is now 15
console.log(total); // Prints 15

// Quick Comparison

// Type 1: Just "Doing"

// Main Goal
// 1-Show something, modify a webpage, or log data.

// Output Type
// Temporary (visible to humans, not the code)

// Analogy

// A billboard showing a message.

// Type 2: Using return
// Calculate a value and pass it back.
// Permanent (can be saved into variables).
// A vending machine dropping a snack into your hand.
// const CompanyEmployees = ["Liam", "Noah", "Oliver", "James", "Elijah"];
// CompanyEmployees;

const Message = () => {
  console.log(`${CompanyEmployees[1]} Id :`);
};

const ID = (num1, num2) => {
  return num1 * num2;
};

Message(ID(32, 31));

function Message(chatIA) {
  //   console.log(`${CompanyEmployees[1]} Id :`);
  console.log(`${CompanyEmployees[1]} Id : ${chatIA}`);
}

function ID(num1, num2) {
  let Numbers = num1 * num2;
  return Numbers;
}

Message(ID(21, 3));

// Message(ID(21, 3)); // This Call Function Nesting
// and the output calld = Expression
// Message output call Output

// ==========================

// Operators
// arithmetic operators
// assignment operator
// comparison operators
// logical operators
// bitwise operators

// arithmetic operators

let number1 = 100;
let number2 = 50;

let TOTAL;
TOTAL = number1 + number2;
console.log(TOTAL); //Expression

total = number1 * number2;
console.log(total); //Expression

total = number1 - number2;
console.log(total); //Expression

total = number1 / number2;
console.log(total); //Expression

// assignment operator
// decrement operator

// operator increment and decrement
// increment
// console.log(++total);

// // decrement
console.log(--total);

let Text = "Hello ";

// Text = Text + "Mike"; // this call concatenation

Text += " Jhone ";
console.log(Text);

// assignment operator

let A = 50;

A += 5; // assignment
console.log(A);

A -= 5;
console.log(A);

A *= 2;
console.log(A);

A /= 2;
console.log(A);

let B = (A *= 2);
console.log(B);

B += 50;
console.log(B);

// comparison operators

let c = 5;
console.log(c > 1);
console.log(c > 10);

console.log(c < 1);
console.log(c < 10);

console.log(c == 5);
console.log(c >= 5);

// logical operators
