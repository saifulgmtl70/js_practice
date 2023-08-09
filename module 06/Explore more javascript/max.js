// const jim = 76;
// const dela = 56;

// if(jim > dela){
//     console.log("Jim will get the cake");
// }
// else{
//     console.log('Dela will get the cake');
// }




// --------------------------------------------------
// const jim = 84;
// const dela = 96;
// const jinku = 99;

// if(jim > dela && jim > jinku){
//     console.log("Jim will get the cake");
// }

// else if(dela > jim && dela > jinku){
//     console.log("Dela will get the cake");
// }

// else{
//     console.log("Jinku will get the cake");
// }

function getMaxValue(num1, num2, num3){

    const maxNumber = Math.min(num1, num2, num3);
    console.log("min number is: ", maxNumber);
}
getMaxValue(20, 43, 56)