"use strict";

// const num = 50;

// if( num < 49) {
//     console.log("Nah");
// } else if ( num > 110) {
//     console.log("Too big number");
// } else {
//     console.log("Good!")
// }

// let number = 100;

// (number === 100) ? console.log("Toha klass") : console.log("Toha ne klass");

// const chislo = 10;
// switch (chislo) {
//     case 11: 
//         console.log("Neverno");
//         break;
//     case 100:
//         console.log("Neverno");
//         break;
//     case 10:
//         console.log("Verno");
//         break;
// }


// function showFirstMessage(){
//     console.log("Hello World!");
// }

// showFirstMessage();

function showFirstMessage(message){
    console.log(message);
}

showFirstMessage("Hello Toha Krutoy Chuvak!");

let num = 10;

function showNumber(){
    let num = 100;
    
    console.log(num);
}

showNumber();

function calc(a , b ,c , d){
    return((a*b)/(c+d));
}

console.log(calc(4 , 5 , 2 , 4));

const calcualate = (a , b) => a * b;

console.log(calcualate(4 ,8));

const word = "Toha Krutoy Pedik";

console.log(word.slice(5, 11));