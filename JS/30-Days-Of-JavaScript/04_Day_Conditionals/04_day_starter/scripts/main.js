const prompt = require('prompt-sync')();
//let iseven = (x > 5) ? "weekend" : "workday";
let x = prompt("month ? ");
let gMisE = (x > 7) ? true : false;
let isEven = (x % 2) ? 1 : 2;
let isOdd = (x % 2) ? 2 : 1;
let isFeb = (x == 2) ? true : false;
//currentYearIsLeap
let leap = ((isFeb) && (true)) ? true : false;

switch (true) {
	case (isFeb):
		if (leap) {
			console.log("29 days");
		} else {
		console.log("28 days");
		}
		break;
	case (gMisE):
		console.log((isEven + 29) + " ddays"); 
		break;
	default:
		console.log((isOdd + 29) + " days");
}
		
//switch (true) {
	//case (x === "sept"):
		//console.log("autumn");
		//break;
	//case (x === "juin"):
		//console.log("summer");
//}

////switch (true) {
	//case (x > 80):
		//console.log("A");
		//break;
	//case (x < 80 && x > 70):
		//console.log("B");
		//break;
//}







//let a = Number(prompt("A= "));
//let b = Number(prompt("B= "));
//let c = a > b ? "a>b" : "b>a";
//console.log(c);
//let num = Number(prompt("num ? "));
//let isEven = (num % 2) ? false : true;
//console.log(isEven);
