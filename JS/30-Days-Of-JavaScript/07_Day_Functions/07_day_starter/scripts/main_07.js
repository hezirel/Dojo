//var data = require('./countries');

function isPrime(i){
	for (y = 2; y < i; y++) {
		if (!((i / y) % 1))
			return 0;
	}	
		return 1;
}

function squareCube (i) {
	for (y = 0; y <= i; y++) {
		process.stdout.write('i : ' + y);
		process.stdout.write(' i^2 : ' + (y*y));
		process.stdout.write(' i^3 : ' + (y*y*y));
		process.stdout.write('\n');
	}
}

const square = n => { return (n*n);}

function Even100() {
for (i = 0; i < 100; i++) {
	if (!(i%2))
		console.log(i);
	}
}

function sumnum () {
	for (i = 0; i <= 100; i++) {
		if ((i%2))
			y += i;
		}
	console.log(y);
}

function fullname(name) {
	console.log('Your full name is ' + name + ' nice to meet you!');
}

const area = (l,w) => {
	return (l*w);
}

const pi = 3.14159;
const pOR = (l,w) => {return (2*(l+w));}
const aOC = r => {return (pi*(square(r)));}
const cOC = r => {return (2*(pi*r));}
const density = (m,v) => {return (m/v);}
const speed = (d,t) => {return (d/t);}
const cTF = (c) => {return ((c*9/5)+32);}

// Double loop for sorting values for largest ?
const findMax = (...values) => {
	let y = 0;
	for (i = 0; i < values.length; i++)
		if (values[i] > values[y])
			y = i;
	return values[y];
}

let lenght = 10;
let width = 2;
let radius = 3;

//console.log(area(lenght, width));
//console.log(pOR(lenght, width));
//console.log(aOC(radius));
//console.log(cOC(radius));
//console.log(cTF(32));
//console.log(findMax(0, 10, 5));
//console.log(findMax(0, -10, -2));
console.log(findMax(-5, 12, -23, 11));
// Day 7 exercises Level 1 finished

//for (i = 0; i < 100; i++)
//	if (isPrime(i))
//	console.log(i);
//squareCube(10);

// Double loop for sorting values for largest ?
const findMax = (...values) => {
    let y = 0;
    for (i = 0; i < values.length; i++)
        if (values[i] > values[y])
            y = i;
    return values[y];
}
