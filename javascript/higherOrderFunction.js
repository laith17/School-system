//* Q1:
// function getIndex(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// let array = [5, 3, 6, 8, 1, 9, 7];
// console.log(getIndex(array, 1));

//* Q2:
// function between(){

// }

//* Q3:
// function removeDuplicates(arr) {
//   let newArray = [];
//   arr.forEach((item) => {
//     if (!uniqueArray.includes(item)) {
//       uniqueArray.push(item);
//     }
//   });
//   return newArray;
// }

// let array = [1, 5, 2, 3, 1, 6, 1, 23, 5, 6, 1, 2, 5, 6, 1];
// result = removeDuplicates(array);
// console.log(result);

//* Q4:
// function avg(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   sum = sum / 2;
//   return sum;
// }

// let array = [5, 7, 3, 6, 8, 1, 10];
// console.log(avg(array));

//* Q5:
// function powArray(arr) {
//? Using for loop
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(arr[i], 2);
//   }
//   return arr;
//? Using forEach
//   let newArray = [];
//   arr.forEach((item) => {
//     newArray.push(Math.pow(item, 2));
//   });
//   return newArray;
//? Using map
//   let newArray = arr.map((number) => Math.pow(number, 2));
//   return newArray;
// }

// let array = [2, 4, 6];
// result = newArray(array);
// console.log(result.toString());

//* Q6:
// function evenOrOdd(arr) {
//   let newArray = arr.map((number) => {
//     if (number % 2 === 0) {
//       return "even";
//     } else if (isNaN(number)) {
//       return "N/A";
//     } else {
//       return "odd";
//     }
//   });
//   return newArray;
// }

// let array = ["laith",1, 2, 3, 4, 5, 6, 7, 8, 9, "almajali"];
// let result = evenOrOdd(array);
// console.log(result);

//* Q7:
// function fizzbuzz(arr) {
//   let newArray = arr.map((number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//       return "Fizz Buzz";
//     } else if (number % 5 === 0) {
//       return "Buzz";
//     } else if (number % 3 === 0) {
//       return "Fizz";
//     } else {
//       return number;
//     }
//   });
//   return newArray;
// }

// let array = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 15];
// let result = fizzbuzz(array);
// console.log(result);
