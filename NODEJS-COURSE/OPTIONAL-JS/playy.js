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
// const person = {
//  name: 'Safar',
//  age: 18,
//  greet() {
//    console.log('Hi, I am ' + this.name);
//  }
// };

// const hobbies = ['Sports', 'Coding', 1];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);


// 9. Understanding Spread & Rest Operators

// const person = {
//   name: 'Safar',
//   age: 18,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// };

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// const copiedArray = {...hobbies};

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };

// console.log(toArray(1, 2, 3));

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1,2,3,4));

// 10. Destructuring
// const person = {
//   name: 'Nax',
//   age: 29,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// };

// const printName = (personData) => {
//   console.log(personData.name);
// };
// const printName = ({ name }) => {
//   console.log(name);
// };
// printName(person);

// 11. Async Code & Promises
// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, 2000);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData()
//     .then(text => {
//       console.log(text);
//       return fetchData();
//     })
//     .then(text2 => {
//       console.log(text2);
//     });
// }, 2000);

// console.log('Hello');
// console.log('Hi');