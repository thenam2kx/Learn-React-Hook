// Destructuring assignment
// Destructuring Objects
const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
const { age, name } = person;
console.log(name); //Eric
console.log(age); //26

// Destructing Arrays
// When destructuring arrays, the order that variables are declared is important.
const city = [ 'ha noi', 'da nang', 'sai gon', 'ca mau'];
const [ hanoi, danang, hcm] = city;
// const [ hanoi, , , camau ] = city;
console.log(hanoi, danang, hcm);