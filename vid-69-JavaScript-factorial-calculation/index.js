console.log("--------------");
console.log(
  "Question: Write a program to calclulate factorial of a number using reduce and using for loops.",
);
console.log("--------------");
/* Write a program to calclulate factorial of a number using reduce and using for loops. */



function factorial(n) {
  // Special case: 0 और 1 का factorial हमेशा 1 होता है
  if (n === 0 || n === 1) {
    return 1;
  }

  // 1 से लेकर n तक का array बनाना
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  console.log(numbers)
  // Array के सभी numbers को multiply करके factorial निकालना
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(factorial(5)); // Output: 120
/*
console.log(factorial(3)); // Output: 1
console.log(factorial(7)); // Output: 5040
*/

log.console("------------------------------------")
log.console("Harry Bhai ka Solution Below Comented code")
log.console("------------------------------------")

// let a = 7

// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())
//    let c = arr.slice(1,).reduce((a, b)=> a*b )
//    return c
// }


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))