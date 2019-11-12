// 6. Working with Objects, Properties & Methods
// const person = {
//  name: ‘Safar’,
//  age: 29,
//  greet: function () {
//    console.log(‘Hi, I am ‘ + this.name);
//  }
// };

// person.greet();

// const personn = {
//  name: ‘Safar’,
//  age: 18,
//  greet() {
//    console.log(‘Hi, I am ‘ + this.name);
//  }
// };
// personn.greet();

// const person = {
//  name: ‘Safar’,
//  age: 29,
//  greet: ()=> {
//    console.log(‘Hi, I am ‘ + this.name);
//  }
// };

// person.greet();

// 7. Arrays & Array Methods

// const hobbies = [‘Sports’, ‘Coding’, 1];

// console.log(hobbies.map(hobby => ‘Hobby: ‘ + hobby));
// console.log(hobbies);

// 8. Arrays, Objects & Reference Types
// const person = {
//  name: 'Max',
//  age: 28,
//  greet() {
//   console.log('Hi, I am ' + this.name);
//  }
// };

// const hobbies = ['Sports', 'Cooking'];


// hobbies.push('Lol');
// console.log(hobbies);

// 9. Understanding Spread & Rest Operators
// const person = {
//  name: 'Max',
//  age: 28,
//  greet() {
//   console.log('Hi, I am ' + this.name);
//  }
// };
// const copiedPerson = {...person};
// const hobbies = ['Gym', 'Programming']
// const copiedArray = [...hobbies];
// console.log(copiedArray);
// console.log(copiedPerson);

// const toArray = (arg1, arg2, arg3) => {
//  return [arg1, arg2, arg3];
// };
// console.log(toArray(1,2,3));

// const toArray = (...args) => {
//  return args;
// };
// console.log(toArray(1,2,3,4,5));

// 10. Destructuring

// const person = {
//  name: 'Safar',
//  age: 29,
//  greet() {
//   console.log('Hi, I am ' + this.name);
//  }
// };

// const printName = (personData) => {
//  console.log(personData.name);
// }
// printName(person);

// const printName = ({ name }) => {
//  console.log(name);
// };
// printName(person);

// const { name, age } = person;
// console.log(name, age);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// 11. Async Code & Promises

const fetchData = callback => {
 setTimeout(() => {
  callback('Done!');
 }, 1500);
};

setTimeout(() => {
 console.log('Timer is done!');
 fetchData(text => {
  console.log(text);
 });
}, 2000);


console.log('Hello');
console.log('Hi');
