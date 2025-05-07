// we will learn about For in loops
// The JavaScript for…in loop iterates over the properties of an object. It allows you to access each key or property name of an object.

const car = {
    make : "toyota",
    model : "corolla",
    year : 2020


};

for (const key in car){
    console.log(`${key} : ${car[key]}`)
}


// syntax for for in loop
// for (const key in object){
//     code here
// }