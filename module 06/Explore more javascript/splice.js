// const firends = [43, 24, 25, 43, 50, 10, 70, 60, 54, 78];

// const partial = firends.splice(2, 6, 26,44, 52, 12, 73, 64);
// console.log(partial);
// console.log(firends);

function findingBadData(numbers){
    // console.log(numbers)
    const dataResult = [];
    const gooddataResult = [];
    for(const num of numbers){
        if(num >= 0){
            // break;
        }
        else{
            // break;
            dataResult.push(num);
        }
    }
    return dataResult;
}

const numberArray = [33, 21,23, -32, -43, -50, 80, 76, 55, -98, 56, -90, 85, -30, -39];
const badData = findingBadData(numberArray);
console.log(badData);