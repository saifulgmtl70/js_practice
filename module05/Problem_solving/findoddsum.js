// function getSumArray(numbers){
//     // console.log(numbers);
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, " :", element, "Sum is: ", sum);
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumArray(myNumbers);




// function arraySum(arr){
//     // console.log(arr)
//     let add = 0;
//     for(let i = 0; i < arr.length; i++){
//         const indx = i;
//         const arrNumber = arr[indx];
//         add = add + arrNumber;
//         console.log(indx, arrNumber, 'Sum is : ', add);
//     }
// }

// const myArr = [22, 13, 34, 43, 34, 16, 43, 45, 78];
// arraySum(myArr);


function getOddNum(Numbers){
    const oddNumbers = [];
    let sum =0;
    for(var i = 0; i < Numbers.length; i++){
        const index = i;
        const element = Numbers[index];
       if(element % 2 != 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
        sum = sum + element;
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNum(myNumbers);
console.log(oddNumbers);
const oddSUm = getOddNum(oddNumbers);
console.log("Sum odd: ", oddSUm);