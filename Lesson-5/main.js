const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => `<p>${item}</p>`)
console.log(myList); // return a new array 

/**
 * array.map(function(){ do something })
 * map() creates a new array from calling a function for every array element.
 * map() calls a function once for each element in an array.
 * map() does not execute the function for empty elements.
 * map() does not change the original array.
 */


const ages = [32, 33, 16, 40];
const result = ages.filter((checkAdult) => {
  checkAdult >= 18
});

console.log(result);

/**
 * array.filter(function(currentValue, index, arr), thisValue)
 * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.
 */

