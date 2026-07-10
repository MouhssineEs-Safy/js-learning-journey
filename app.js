//let message;
//message = "Server Off !";
// console.log(message); // undefined

// ===========  (02)   ================

/*let firstName = "Mike";
let lastName = "Jhone";

const message = ` Your Name :  ${firstName} , And The Last Name is : ${lastName} `;

console.log(message);*/

// ===========  (03)  ================
const bcrypt = require("bcrypt");

const password = "Test1234!"; // same test password for all dev users
const hashedPassword = bcrypt.hashSync(password, 10);

const userInfo = [
  {
    id: 1001,
    name: "Yassine",
    email: "yassine.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1002,
    name: "Sara",
    email: "sara.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1003,
    name: "Mehdi",
    email: "mehdi.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1004,
    name: "Fatima Zahra",
    email: "fatima.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1005,
    name: "Anas",
    email: "anas.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1006,
    name: "Nour",
    email: "nour.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1007,
    name: "Amine",
    email: "amine.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1008,
    name: "Salma",
    email: "salma.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1009,
    name: "Youssef",
    email: "youssef.test@example.com",
    password: hashedPassword,
  },
  {
    id: 1010,
    name: "Imane",
    email: "imane.test@example.com",
    password: hashedPassword,
  },
];

console.log(userInfo);
