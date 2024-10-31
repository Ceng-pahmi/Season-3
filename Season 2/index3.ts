let grade = 86
if (grade >=80) {
    console.log("Congratulations! You are graduate!")
} else {
    console.log("You only participant")
}

// type IColor = ("red" | "yellow" | "green")

let trafficLight : string = "green"

if (trafficLight == "red") {
 console.log("stop")   
} else if (trafficLight == "yellow") {
    console.log("be careful")
} else if (trafficLight == "green") {
    console.log("go")
} else {
    console.log("invalid color")
}


console.log (12 == 12)
console.log(12 === "12")
console.log(12 === "13")

switch (trafficLight) {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("be careful")
        break;
    case "green":
        console.log("go")
        break;
    default:
        console.log("invalid color")
        break;
}

console.log {'------------'}

const expr: string = "Durian";
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are $2.79 a pound");
        break;
    default:
        console.log(`Sorry, we are aout of ${expr}`)
        break;
}
switch (true) {
    case grade >= 80 :
        console.log("congratulations you are Graduate")
        break;
    default:
        console.log("you only participant")
        break;
}

console.log('=======')
// and selection
console.log(true && true) ; // true
console.log(true && false) ; // false
console.log(false && false) ; // false
// or selectoin
console.log(true || true) ; // true
console.log(true || false); // true
console.log(false|| false) ; // false

 console.log("result :", 65 >= 57 && ("a == A" || 54 == "54"))  // true

 // |= SELECTON


console.log ("b" != "B" ) // true
console.log(!true) // false
console.log('aa' != "AA" && 677<= 87) // false

let str : string = "Typescript"
if (str === "typescript") {
    if (56 == 45) {
        console.log("ngapain")
        
    }else {
     console.log("ngak ngapa2an")
    }
    console.log("this is typescript")
}else {
    console.log("this my typescript")
}
  

let value2 : Number = 23
let result5 : Number | string = value2 && 'hello world'
console.log(result5) // hello world , kanan 

let value3 : Number = 0
let result6 : Number | string = value2 && 'hello world'
console.log(result6) // hello world , kanan 

let value4 : Number = 0
let result7 : Number | string = value4 || ''
console.log(result7) // '', kanan 

let value5 : string = "dimas"
let result8 : Number | string = value5 || 'Guest'
console.log(result5) // dimas , kiri 



