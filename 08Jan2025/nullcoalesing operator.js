// Nullish Coalesing operator or Null coalesing operator
// it was introduced in ECMAscript 2020.
// the null coalesing is written as "??"
// the null coalesing operator is a javascript operator that is use to provide the default value to a variable that may be null or undefined.
// in javascript  the following values are consider as falsy value => false , 0, '' ,null,undefined and NaN(not a number).
// 

// before null coalesing operator the programmer wer using || pipe operator .

// let value = null;
// const result = value || "vinod" ;
// console.log(result);

// other than null,undefined ,it should the display the value ,below case we provided empty string '' and it is a falsy value in javascript
//  since falsy value is in first condition and it moves to second condition is separated by || operator.
// o/p is vinod gowda

// let value = '';

// const result = value || 'vinod gowda'; 
// console.log(result);

// To avoid this we will using null coalesing operator
// it accept falsy value other than null, undefined
let valueOne ;
let valueTwo = 0 ;

let resultOne = valueOne ?? 1000;
let resultTwo = valueTwo ?? 13;
console.log(resultOne);
console.log(resultTwo);

let valueThree = '';

let resultThree = valueThree ?? 35;

console.log(resultThree);


