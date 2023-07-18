// 17.4.1. Zero Division: Throw

// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    return numerator/denominator;
 }
 
 
 let numerator = 10
 let denominator = 5
 
 console.log(divide(numerator, denominator));