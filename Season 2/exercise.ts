let number = 25
if (number % 2 ) {
    console.log("odd number") 
}else {
    console.log("even number")
}
 // soal no 2
 //Write a code to check whether the number is prime number or not
 //○ Example: 7 → 7 is a prime number
/// ○ Example: 6 → 6 is not a prime number

let number2 = 6
if (number2 % 2) {
    console.log("prime number ")
} else{
    console.log("not prima number")
}
let number3 = 7
if (number3 % 2) {
    console.log("prime number ")
} else{
    console.log("not prima number")
}


 let a = 10
 let b = 4
 let c = 0
 c = a
 a = b
 b = c
 console.log(a)
 console.log(b)
// soal no 3

let res1 = 0
for (let i = 0; i <= 5; i++) {
    res1 = res1 + i
}
 console.log(res1)
 let res4 = 0
for (let i = 0; i <= 3; i++){
    res4 = res4 + i
} 
console.log(res4)

 // soal 4
 let res2 = 1
 for(let i = 4; i >= 1; i--){
    res2 = res2 * i   
    }
    console.log(res2)

    let res3 = 1
 for(let i = 6; i >= 1; i--){
    res3 = res3 * i   
    }
    console.log(res3)

// soal no 5
 let prev_number = 0
 let corrent_number = 1
 console.log("i=", 1, "corrent_number=",corrent_number)
 for( let i = 2; i <= 15; i++){
    let temp = prev_number 
    prev_number = corrent_number
    corrent_number = corrent_number + temp
    console.log("i=", 1, "corrent_number =", corrent_number)
 }