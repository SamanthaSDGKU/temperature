console.log("if-statement");

// ---if statement --- 
// if(condition){
//     code to be executed if the condition is true
// }

if(3<=5){
    console.log("I am inside the if statement");
}

let student1=45;
let student2=45;

if(student1==student2){
    console.log("Both are the same");
}

// ---- if-else statement ---- 
// if(condition){
//     code to be executed if the condition is true
// }else{
//     code to be executed if the condition is false
// }

let isTrue = true; 

if(isTrue){
    console.log("Yes");
}else{
    console.log("No");
}

//Challenge: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age = 50;

if(age>=21){
    console.log("You are an adult");
}else{
    console.log("You are underage");
}

// ---- if-else if-else statement ---- 
// if(condition){
//     code to be executed if condition is true
// }else if(condition2){
//     code to be executed if condition2 is true
// }else{
//     code to be executed if conditions are false
// }

age = 7;

if(age<13){
    console.log("Child");
}else if(age<21){
    console.log("Teenager");
}else if(age<64){
    console.log("Adult");
}else{
    console.log("Senior");
}


function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10
    }
    console.log("Your ticket price is: $" + price);
}


function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    document.getElementById("weather").classList.remove("cold","hot");
    
    let outfit;
    if(tmp<15){
        outfit="Jacket";
        document.getElementById("weather").classList.add("cold");
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt";
        document.getElementById("weather").classList.add("hot");
    }

    document.getElementById("weather").innerHTML="You should wear : " + outfit;
}