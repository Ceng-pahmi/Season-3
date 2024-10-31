var grade = 86;
if (grade >= 80) {
    console.log("Congratulations! You are graduate!");
}
else {
    console.log("You only participant");
}
// type IColor = ("red" | "yellow" | "green")
var trafficLight = "green";
if (trafficLight == "red") {
    console.log("stop");
}
else if (trafficLight == "yellow") {
    console.log("be careful");
}
else if (trafficLight == "green") {
    console.log("go");
}
else {
    console.log("invalid color");
}
console.log(12 == 12);
console.log(12 === "12");
console.log(12 === "13");
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("be careful");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("invalid color");
        break;
}
console.log;
{
    '------------';
}
var expr = "Durian";
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are $2.79 a pound");
        break;
    default:
        console.log("Sorry, we are aout of ".concat(expr));
        break;
}
switch (true) {
    case grade >= 80:
        console.log("congratulations you are Graduate");
        break;
    default:
        console.log("you only participant");
        break;
}
console.log('=======');
// and selection
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
// or selectoin
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
