function myFactor(x) {
	if (x > 1)
		x *= myFactor((x - 1));
	else
		return 1;
	return x;
}

function myFactor2(x) {
	if (x <= 1)
		return 1;
	return (x * myFactor2(x-1))
}

function myFactol(z) {
let y = 1;

for (x = 1; x <= z; x++)
	y *= x;
return y;
}

function recursum(n) {
	if (n > 1)
		return (n += recursum(n-1));
	else
		return (1);

}

function arraySumIter(a) {
	let y = 0;
	for (i = 0; a[i]; i++) {
		y += a[i];
	}
	return y;
}

function arraySumRecur(a) {
	
}


let input = 10;
var tab = [1, 5, 10, 20]; //Sum 36
//console.log(recursum(input));
//console.log(myFactor(input));
//console.log(myFactol(input));
//console.log(myFactor2(input));
console.log(arraySumRecur(tab));
