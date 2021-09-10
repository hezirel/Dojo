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

function randNumArray() {
	
}

//for (i = 0; i < 100; i++)
//	if (isPrime(i))
//	console.log(i);
//squareCube(10);
