function doubleNumber(num1){
    return num1*2;
}

console.log(doubleNumber(4));
console.log(doubleNumber(10));

function combineNames(firstName="unknown",lastName="unknown"){
    return firstName + " " + lastName;
}

console.log(combineNames("Derrick","Lapp"));
console.log(combineNames("Derrick"));
console.log(combineNames());

function convertToSeconds(minutes){
    return minutes*60;
}

console.log(convertToSeconds(5));
console.log(convertToSeconds(10));