/*
 * LVL1
 * let fN = "hasnaine";
let age = 26;
let iM = false;

console.log(typeof fN, typeof age, typeof iM);
console.log(typeof '10');
console.log(typeof parseInt('9.8'));
console.log("python" === "jargon");
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
let data = new Date();
console.log(data.getTime());*/

// Lvl 2
const prompt = require('prompt-sync')();

let data = new Date();

/*let base = prompt("base = ");
let height = prompt("height = ");
let a = prompt("side a = ");
let b = prompt("side b = ");
let c = prompt("side c = ");
console.log("Permiter = " + (Number(a) + Number(b) + Number(c)));
*/
//console.log("triangle area = \n" + (0.5 * (Number(base)) * (Number(height))));

/*let length = Number(prompt("lenght = "));
let width = Number(prompt("width = "));

console.log("Area is equal to " +  (length * width) + " and p = " + (2*(length+width)));*/
//let r = prompt("radius = ");
//console.log("area = " + (Math.PI * r * r));
//console.log("circum = " + (2*Math.PI*r));

// Slope

// q9
//let rate = Number(prompt("rate = "));
//let hour = Number(prompt("hours = "));

//console.log("Pay = " + (rate * hour));

//let age = Number(prompt(" age = "));
//console.log("Time to live = " + ((100 - age)*(((60*60)*24)*365))); 
let time = new Date();

console.log(time.getFullYear() + "-" + time.getDate()+ "-" + time.getDate());
