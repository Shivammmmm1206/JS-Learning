// we will learn about statements also known as conditional statements
// first is if-else statement

// the if statement
let i =  10;
if(i>10) {  //  if this condition is true your  statement will be executed
    console.log("your given number is greater than 10")
} else { // if condition is false else statement will be executed
    console.log (" your given number is less than 10")
}


// nested if statement

 let j = 10;
 if (j == 10) {  // we can include multiple if statements in one if statement
     if (j<15) {
         console.log(" j is less than 15")
     }
 }


 // if else ladder statements

let k =  20;

 if (k ==10){
     console.log(" the value of k is 10")
 } else if (k == 20) {
     console.log("the value of k is 20")
 } else if (k == 30) {
     console.log(" the value of k is 30")
 } else {
     console.log("K is not present")
 }

 // switch statement
// The JavaScript switch statement evaluates an expression and executes a block of code based on matching cases.

let day  = 3;
 let dayName;

 switch (day) {
     case 1:
         dayName = "Monday";
         break; // break is used to break the switch statement
     case 2:
         dayName = "Tuesday";
         break;
     case 3:
         dayName =  "Wednesday";
         break;
    case 4:
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break;

     case 6:
         dayName = "Saturday";
         break;

     case 7:
         dayName = "Sunday";
         break;
 }

 console.log(dayName)