console.log("start");
settimeout(() => {
    console.log("End")
}, 500);
console.log("welcome back");


console.log("start");

setTimeout(() => {
    console.log("End");
}, 1000);
setTimeout(function greet(sundar) { 
    console.log("thank you");
    return (greet);
}, 1000);

function addition(a , b) {
    return a + b;              // output 8
}
let numbers = addition(5,3);
console.log(numbers);

function addition(a , b) {
    return addition;            // output [function : addition]
}
let numbers1 = addition(5,3);
console.log(numbers1);

subtraction((a, b) => {
    return a - b;                  // output 
let numbers2 = subtraction(5,3);
console.log(numbers2);
});

let multiply = (a, b) => a - b;
console.log(multiply(5, 3));      //output 

let addition = function (x, y) {
    return (x + y);                  //output 8
};
console.log(addition(5, 3));

function addition (x, y) {
    return x + y;               //output 8
}
let add = addition(5, 3);
console.log(add);