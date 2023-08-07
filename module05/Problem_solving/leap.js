// function leapYear(year){
//     const remider = year % 400;
//     if(remider == 0){
//         return true;
//     }  
//     else{
//         // console.log("Not a leap year");
//         return false;
//     }
// }

// const myleapYear = leapYear(2000);
// console.log(myleapYear);
// // const herleapYear = leapYear(2024);
// // console.log(herleapYear);



function yearLeap(year){
    // console.log(year);
    const remider = year % 4;
    if(remider === 0){
        // console.log(year, " is leap year");
        return true;
    }
    else{
        // console.log(year, " is not leap year");
        return false;
    }
}

const isLeapYear = yearLeap(2020);
console.log(isLeapYear);