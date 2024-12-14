console.log("--------------- Story ---------------");

let name = "Luis";
let place = "school";
let time = 8;
let anotherTime = 6;   

const familyMember = "sister";

console.log("One day " + name + " was late for " + place + ". It was " + time);
console.log(" when the star time was supposed to be at " + anotherTime + ". ");
console.log("My " + familyMember + "was there on time!");

console.log("--------------- Another Story ---------------");


name = "Giancarlo";
place = "work";
time = 12;
anotherTime = 8;

console.log("One day " + name + " was late for " + place + ". It was " + time);
console.log(" when the star time was supposed to be at " + anotherTime + ". ");
console.log(" My " + familyMember + "was there on time!");

function assignmentOne(firstName, place, time, anotherTime){
    const familyMember = "sister";
    
    console.log("One day " + firstName + " was late for " + place + ". It was " + time);
    console.log(" when the star time was supposed to be at " + anotherTime + ". ");
    console.log("My " + familyMember + "was there on time!");
}

assignmentOne("Luis", "work", 11, 7);