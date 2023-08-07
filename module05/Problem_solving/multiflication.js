// function Factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     } 
//     return result;
// }

// const number = 6;
// const myfact = Factorial(number);
// console.log("Factorial of :", number, "is", myfact);



// Factorial in reverse way//

function fctOtial(num){
    let rest = 1;
    for(let i = num; i >= 1; i--){
        rest = rest * i;
    }
    return rest;
}

const number = 6;
const fact = fctOtial(number);
console.log("factorial of", number, "is :", fact);
