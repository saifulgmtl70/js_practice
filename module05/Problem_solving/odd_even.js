// function evenOrodd(number){
//     const remider = number % 2;
//     if(remider == 0){
//         console.log(number, " is even number...");
//     }
//     else{
//         console.log(number, " is odd numver");
//     }
// }

// const myNumber = 1110;
// const  oddevenNumnber = evenOrodd(myNumber);





// function evenOrodd(number){
//     const remider = number % 2;
//     if(remider != 0){
//         // console.log(number, " is Odd number...");
//         return true;
//     }
//     else{
//         // console.log(number, " is an Even numver");
//         return false;
//     }
// }

// const isEven = evenOrodd(123);
// console.log(isEven);
// const isOdd = evenOrodd(12);
// console.log(isOdd);



function EvenOdd(number){
    // console.log(number)
    const Bhagshesh = number % 2;
    if(Bhagshesh == 0){
        // console.log(number, " is adn even number....");
        return true;
    }
    else{
        // console.log(number, " isn't an even number. It's an odd number");
        return false
    }
}

const whatisIt = EvenOdd(123);
console.log(whatisIt, "Odd");