for (var i = 0; i <= 5; i += 3) {
    console.log("hello = ", i);
}
console.log(i);
for (var i_1 = 5; i_1 <= 100; i_1 *= 2) {
    console.log("hello =", i_1);
}
for (var i_2 = 0; i_2 <= 1; i_2 + 2) {
    console.log("hello =", i_2);
}
//
/*CONTOH INFINITTY LOOP
/*
for(let i = 0; i <= 5; ){
    console.log("hello", i)
}
*/
/*

*/
var j = 0;
while (j <= 5) {
    console.log("hello while", j);
    j++;
}
console.log(j);
do {
    console.log("hello do while", j);
    j++;
} while (j <= 10);
