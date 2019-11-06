// 5. Understanding Arrow Functions
// const name  = "Safar";
// let age = 18;
// const hasHobbies = true;

// age = 30;

// const summerizeUser = (userName, userAge, userHasHobbies) => {
//  return (
//   'Nmae is ' + userName + ", age is " + userAge + ' and the user has hobbies; ' + userHasHobbies
//   );
// };

// const add = (a,b) => {
//  return a,b;
// };
// console.log(summerizeUser(name, age, hasHobbies));


// 6. Working with Objects, Properties & Methods
// const person = {
//   name: 'Safar',
//   age: 29,
//   greet: function () {
//     console.log('Hi, I am ' + this.name);
//   }
// };

// person.greet();

// const personn = {
//   name: 'Safar',
//   age: 18,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// };
// personn.greet();

// 7. Arrays & Array Methods
const person = {
  name: 'Safar',
  age: 18,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Coding', 1];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);


// 9. Understanding Spread & Rest Operators

