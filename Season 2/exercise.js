var number = 25;
if (number % 2) {
    console.log("odd number");
}
else {
    console.log("even number");
}
// soal no 2
//Write a code to check whether the number is prime number or not
//○ Example: 7 → 7 is a prime number
/// ○ Example: 6 → 6 is not a prime number
var number2 = 6;
if (number2 % 2) {
    console.log("prime number ");
}
else {
    console.log("not prima number");
}
var number3 = 7;
if (number3 % 2) {
    console.log("prime number ");
}
else {
    console.log("not prima number");
}
var a = 10;
var b = 4;
var c = 0;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);
// soal no 3
var res1 = 0;
for (var i = 0; i <= 5; i++) {
    res1 = res1 + i;
}
console.log(res1);
var res4 = 0;
for (var i = 0; i <= 3; i++) {
    res4 = res4 + i;
}
console.log(res4);
// soal 4
var res2 = 1;
for (var i = 4; i >= 1; i--) {
    res2 = res2 * i;
}
console.log(res2);
var res3 = 1;
for (var i = 6; i >= 1; i--) {
    res3 = res3 * i;
}
console.log(res3);
// soal no 5
var prev_number = 0;
var corrent_number = 1;
console.log("i=", 1, "corrent_number=", corrent_number);
for (var i = 2; i <= 15; i++) {
    var temp = prev_number;
    prev_number = corrent_number;
    corrent_number = corrent_number + temp;
    console.log("i=", 1, "corrent_number =", corrent_number);
}
