/* =============== Problem - 1 =============== */

// function cubeNumber(number) {
//     if((typeof number == "number") && (number >= 0)){
//         const result = Math.pow(number, 3);
//         return result;
//     }
//     else{
//         return "You have typed invalid value";
//     }
// }
// const numberValue = 4;
// const cubeResult = cubeNumber(numberValue);
// console.log(cubeResult);



/* =============== Problem - 2 =============== */

// function matchFinder(string1, string2) {

//     if(!string1 || !string2){
//         return "String mandatroy";
//     }
//     else if(string1.includes(string2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const strValue1 = "Hello Bangladesh";
// const strValue2 = "Bangladesh";
// const matchResult = matchFinder(strValue1, strValue2);
// console.log(matchResult);



/* =============== Problem - 3 =============== */

// function sortMaker(arr) {
//     const[element_1, element_2] = arr;

//     if(element_1 === element_2){
//         return "equal";
//     }

//     else if(element_1 > 0 && element_2 > 0){
//         return arr.sort((element_1, element_2) => element_2 - element_1);
//     }

//     else{
//         return "Invalid Input";
//     }
// }

// const arrayValue = [20, 30, 40, 50, 60, 70, 80, 90, 100];
// const result = sortMaker(arrayValue);
// console.log(result);



/* =============== Problem - 4 =============== */

// function findAddress(obj){
//     const street = obj.street || "__";
//     const house = obj.house || "__";
//     const society = obj.society || "__";

//     const result = ` Street: ${street}, House: ${house}, Society: ${society}`;
//     return result;
// }

// const propertyValue = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// }
// const result = findAddress(propertyValue);
// console.log(result);





/* =============== Problem - 5 =============== */

function canPay(changeArray, totalDue){
    if(changeArray.length === 0){
        return 'Empty Array';
    }

    let sum = 0;
    for (const num of changeArray) {
        sum+= num; 
    }

    console.log(sum);
    if(sum >= totalDue){
        return true;
    }

    else{
       return false;
    }
}
const arrayValue = [10, 5, 5];
const chipsPrice = 20;
const result = canPay(arrayValue, chipsPrice);
console.log(result);