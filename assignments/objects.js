// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F
// Example format of an intern object: 1, examples@you.edu, Example, F
let example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:

const newInterns = {
  name1: {
    id: 1,
    name: "Mitzi",
    email: "mmelloy0@psu.edu",
    gender: "F"
  },
  name2: {
    id: 2,
    name: "Kennan",
    email: "kdiben1@tinypic.com",
    gender: "M",
    speak: function() {
      return "Hello,MY name is: " + this.name;
    }
  },
  name3: {
    id: 3,
    name: "Keven,",
    email: "kmummery2@wikimedia.org",
    gender: "M"
  },
  name4: {
    id: 2,
    name: "Gannie",
    email: "adaine5@samsung.com",
    gender: "M"
  },
  name5: {
    id: 2,
    name: "Antonietta",
    email: " adaine5@samsung.com",
    gender: "F",
    multiplyNums: (param1, param2) => {
      return param1 * param2;
    }
  }
};

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(newInterns.name1.name);
// Kennan's ID
console.log(newInterns.name2["id"]);
// Keven's email

console.log(newInterns.name3["email"]);
// Gannie's name
console.log(newInterns.name4.name);
// Antonietta's Gender
console.log(newInterns.name5.gender);
// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
//console.log(kennan.speak());
console.log(newInterns.name2.speak());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(newInterns.name5.multiplyNums(3, 4));
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  speak: function() {
    return "Hello,MY name is: " + this.name;
  },
  child: {
    name: "George",
    age: 50,
    speak: function() {
      return "Hello,MY name is: " + this.name;
    },
    gchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        return "Hello,MY name is: " + this.name;
      }
    }
  }
};

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.name);
// Log the name and age of the grandchild
console.log(parent.child.gchild.name);
console.log(parent.child.gchild.age);

// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.child.speak());

// Have the grandchild speak
console.log(parent.child.gchild.speak());
