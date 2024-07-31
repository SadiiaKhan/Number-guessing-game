"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let per = 55;
// Marksheet //
if (per >= 80 && per <= 100) {
    console.log("Grade: A+");
}
else if (per >= 60 && per < 80) {
    console.log("Grade: A");
}
else if (per >= 45 && per < 60) {
    console.log("Grade: B+");
}
else if (per >= 33 && per < 45) {
    console.log("Grade: B");
}
else if (per < 33) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
//Evulating a Number Game //
let guess = 1;
let target = 5;
if (guess < target) {
    console.log("The value is too low");
}
else if (guess > target) {
    console.log("The value is too high");
}
else {
    console.log("Your guess correctly");
}
