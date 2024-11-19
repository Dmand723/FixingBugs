let message = "Hello, World!";
console.log(message); // SyntaxError: Unexpected token ';' Done // Missing closing bracket after message varable

let myVariable = "This  is MY Variable";
console.log(myVariable); // ReferenceError: myVariable is not defined DONE // myVariable was never created so i created it

// Incorrect: treating a string like a function Done // to display the varable in the consle you need to put it in consle.log()
const greeting = "Hello";
console.log(greeting); // TypeError: greeting is not a function DONE //you can not call a varable as a function as greeting()

// Incorrect: accessing a property of an undefined variable Done // the object did not exist nor did it have a property varable so i created the object with the property var
// There is no object and there is also no property in the object, look up objects in javascript on w3schools.
function Obj() {
  this.property = "This is an object";
}
let obj = new Obj();

console.log(obj.property); // TypeError: Cannot read property 'property' of undefined DONE // obj was not created there for did not have a property varable fixed by creating the object

const user = {
  name: "John",
  age: 30,
};

// Incorrect: Concatenating an object with a string DONE // you can not add a object and a sting together but can display then next to eachother in the consle.log
// This there is a single difference, we can't use a + to add the string to this object, we need to use a comma. DONE // fixed and replaced the + with a ,
console.log("User info: ", user);
// Output: User info: [object Object]
// should put out the object with names and age

// casting failure (incorrect type conversion) DONE // when adding 5 to the varable num which is a string it adds it to the end of the string resulting in 105 fixed by converting the num varable into a number by putting it in Number() function

let num = "10";
console.log(Number(num) + 5); // "105"  should be 15. DONE
