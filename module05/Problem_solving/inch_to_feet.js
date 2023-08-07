// const myInchs = 12;
// const myFeet = myInchs / 12;
// console.log("Amar Feet holo: ", myFeet);


// const tarInchs = 150;
// const tarFeet = tarInchs / 12;
// console.log("Tar feet holo: ", tarFeet);


// const unarInchs = 72;
// const unarFeet = unarInchs / 12;
// console.log("Unar Feet holo: ", unarFeet);

function inchTofeet(inchs){
    const feet = inchs / 12;
    return feet;
}

const myinchses = 144;
const myFeet = inchTofeet(myinchses);
const feets = myFeet.toFixed(2);
console.log("Amar feet hoccche: ", feets);
