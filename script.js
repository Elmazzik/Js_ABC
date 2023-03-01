let num = 123456789;
let str = String(num);
let last = str[str.length - 1];

if (last == 0) {
  console.log("+++");
} else {
  console.log("---");
}


if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}