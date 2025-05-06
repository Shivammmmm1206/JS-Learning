// lesson-3 about operators in JS
// Arithmetic operators
// used to perform arithmetic operations like addition,substraction,multiplication

let A =  10 + 10  // the "+" is used for addition operations
console.log (A)

let B =  15 - 10   // the "-" is used for substraction operations
console.log (B)

let C  =  15 * 9  // the "*" is used for multiplication operations
console.log (C)

let D  =  50/5  //  the "/" is used for division operations
console.log(D)

// increment operator

let E = 7
E++ // it increase the value by 1
console.log(E)

// decrement operator

let F =  9
F-- // it decrease the value by 1
console.log(F)

// Assignment operators

// addition assignment operations

let G =  10
H =   G += 10 //  it adds the value to right operand to  a variable and assign the result to variable
console.log(H)


// Substraction assignment operators
let yoo = 4;

// Expected output 3
console.log(foo = yoo - 1);

// Multiplication assignment operators
let  i =  5 ;
console.log(i *= 2)

// Divison assignment operator

let   j  = 10;
console.log(j /= 2)

// comparison operators


// inequality operators

let K = 15;
console.log(K !=15)

// greater than operator
let L = 15;
console.log(L > 10)

// less than operator
let M = 15;
console.log(M < 10)

// Logical operators

// logical AND operator
//The logical AND (&&) operator checks whether both operands are true.

let age =  20;
let idProof = true;

if(age >= 18 && idProof) {
    console.log("you can vote")
} else {
    console.log("you can't vote")
}


// Logical OR operator
//The logical OR (||) operator checks whether at least one of the operands is true.


let hisAge =  16 ;
let hasGuardian =  true;

if (age>=18 || hasGuardian ){
    console.log("you can vote")
} else {
    console.log("you can't vote")
}


// Logical Not Operator
//The logical NOT (!) operator inverts the logical value of its operand.

let isLoggedIn =  false;

if (!isLoggedIn) {
    console.log("you can't vote")
} else {
    console.log("you can vote")
}