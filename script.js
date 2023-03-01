let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);

let age2 = 17;
let adult2;

if (age2 >= 18) {
	adult2 = true;
} else {
	adult2 = false;
}
console.log(adult2);


let age3 = 17;
let res;

if (age3 >= 18) {
	if (age3 <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}
console.log(res);


let age4 = 19;
let res2;

if (age4 >= 18) {
	if (age4 <= 23) {
		res2 = 'От 18 до 23';
	} else {
		res2 = 'Больше 23';
	}
} else { 
	res2 = 'кисяляля топ и меньше 18';
}
console.log(res2);