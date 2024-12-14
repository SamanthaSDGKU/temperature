console.log("function.js")

//creating the funcion
function greet(name){
    return "Hello World from a Function! and Hello " + name;
}

// function example(){
//     return "Example";
// }
console.log(greet("Luis"));


//Anonymous Functions
let greetTwo = function(name){
    return "Hello World from an Anonymous Function! and Hello " + name;
}

console.log(greetTwo("Luis"));


//create a function, with multiple parameters
function greetThree(name, place){
    return "Hello " + name + " from " + place;
}

function multiplyThree(num){
    return num * 3;
}

console.log(multiplyThree(4)); //12
console.log(multiplyThree(3)); //9
console.log(multiplyThree(5)); //15

//Challenge
function combineNames(firstName, secondName){
    return firstName + " " + secondName;
} //"Luis Alan"
console.log(combineNames("Luis","Alan"));

function sum(sum1, sum2){
    return sum1 + sum2;
}

let result = sum(5,10);
console.log("The result of the sum is: " + result); //5 

//Prompts
// let productName = prompt("Enter the product name: ");
// let productPrice = Number(prompt("Enter the price: "));
// console.log(productName);
// console.log(productPrice);
// console.log(sum(2,productPrice));


// function addCart(price){
//     let total=0;
//     total=total+price;
//     return total;
// }

// total = addCart(productPrice);

// function calculateTaxes(total){
//     return 1.11 * total;
// }


// console.log("The total is: " + calculateTaxes(total));
// document.write("<p>"+ productName + " " + calculateTaxes(total).toFixed(2) +"</p>");

//Mini Challenge
//create a subtraction function
//the parameters should be placed using prompts
//the output should be "The result of subtraction NUM1 and NUM2 is: RESULT"
//NUM1, NUM2 and RESULT are variables
//display the result in the console and in the html 
// let num1 = Number(prompt("Enter the first value: "));
// let num2 = Number(prompt("Enter the second value: "));
// let total=0;

// function subtraction(){
//     total = num1 - num2;
//     console.log("The result of subtracting " + num1 + " - " + num2 + "is: " + total);
//     document.write("<p>The result of subtracting " + num1 + " - " + num2 + "is: " + total+"</p>")
// }
// subtraction();

//Linking a function to a button:)
function addProduct(){
    let prodName = prompt("Enter the product name: "); 
    document.getElementById("list").innerHTML+=`<p>${prodName}</p>`;
}