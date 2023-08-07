/*Task - 1:   Declaring Varable */

// var name = 'Saiful Islam Azad';
// console.log(name);
// var age = 22;
// console.log(age);
// var isMarried = false;
// console.log(isMarried);



/*Task - 2: Changing Value of a variable */

// let number = 189;
// console.log(number);
// const age = 21;
// console.log(age);
// age = 22;
// console.log(age);


/*Task - 3:Basic Mathematical Operatioin between two values */

// let num_1 = 60;
// let num_2 = 15;
// // Summation
// var sum = num_1 + num_2;
// console.log("Sum is :", sum);
// // Substraction
// var sub = num_1 - num_2;
// console.log("Substraction is :", sub);
// // Multification
// var mult = num_1 / num_2;
// console.log("Multification is :", mult);
// // Deivision
// var div = num_1 / num_2;
// console.log("Division is :", div);
// // Reminder
// var remind = num_1 % num_2;
// console.log("Reminder is :", remind);


/*Task - 4:  Basic Comparision between two values */

// var number_1 = 65;
// var number_2 = 34;
// var number_3 = 23;
// var number_4 = 43;
// var number_5 = 50;
// var number_6 = 50;

// var isEqual = number_1 > number_2;
// console.log(number_1, "greater than ", number_2);

// var isEqual = number_3 < number_4;
// console.log(number_3, "less than ", number_4);

// var isEqual = number_3 < number_4;
// console.log(number_5, "equal to  ", number_6);



/*Task - 5:  Basic Condtional Statements */

// var age = 12;
// if(age > 18){
//     console.log("You are adult");
// }
// else{
//     console.log("Tumi ekhono nadan baccha. jao babu fidar khao...");
// }



/*Task - 6:  Printing odd number using while loop */

// var numbers = 7;
// while(numbers <= 19){
//     console.log(numbers);
//     numbers+= 2;
// }



/*Task - 7:  Array */

// var myArray = [34, 23, 54, 65, 76, 89, 56, 90, 45];
// console.log(myArray);
// var arrLength = myArray.length;
// console.log(arrLength);
// console.log(myArray[4]);
// myArray[4] = 77;
// console.log(myArray);
// console.log(myArray[4]);
// myArray.pop();
// console.log(myArray);
// myArray.push(400);
// console.log(myArray);



/*Task - 8:  Array in for loop */

// var amarArray = ['Azad', 'Saiful', 'Saiful', 'Asif', 'Hridoy', 'Apon'];
// for(var i = 0; i < amarArray.length; i++){
//     console.log(i,": ", amarArray[i]);
// }



/*Task - 9:  Finding number from an array  */

// function myArray(arrNum){
//     for(var i = 0; i < arrNum.length; i++){
//         var value = arrNum
//         // console.log(arrNum[i]);
//     }
// }

// const mArray = [43, 54, 33, 50, 70, 50, 78, 90, 88, 98, 102, 120, 90, 300];
// myArray(mArray);



/*Task - 10:  Multification using by function  */

// function Multification(num1, num2, num3){
//     var mult = num1 * num2 * num3;
//     return mult;
// }

// const mult = Multification(32, 34, 45);
// console.log(mult)




/*Task - 11:  Declaring  object  */

// var profile = {
//     name: "Saiful Islam",
//     roll: 172526,
//     session: 2018-19,
//     section: "B1",
//     blood_group: "A+",
//     age: 22
// }

// console.log(profile.name);




                /* Problem Solving Checklist/Self assessment */

    /* Task -1:  Converting Feet to Inch */

    // function feetToInch(feet){
    //     const inchs = feet * 12;
    //     return inchs;
    // }

    // const feetValue = 10;
    // const inchResult = feetToInch(feetValue);
    // console.log(inchResult);



    //    /* Task -2:  Converting Cenitmeter to Metter */
    //    function cenitmeterToMeter(cenitmeter){
    //         const meter = cenitmeter / 100;
    //         return meter;
    //    }

    //    const cmValue = 2000;
    //    const mResult = cenitmeterToMeter(cmValue);
    //    console.log("The Meter Value is: ", mResult);


    // /* Task -3:  Converting Cenitmeter to Metter */
    // function paperRequirements(bangla, english, math){
    //     const banglaBookPage = bangla * 100;
    //     console.log(bangla,"ti Bangla Book er jonno Page lagbe: ", banglaBookPage);
    //     const englishBookPage = english * 200;
    //     console.log(english, "ti English Book er jonno Page lagbe: ", englishBookPage);
    //     const mathBookPage = math * 300;
    //     console.log(math, "ti Math Book er jonno Page lagbe: ", mathBookPage);
    //     const total_books = banglaBookPage + englishBookPage + mathBookPage;
    //     // return total_books;
    //     console.log("Total Books Lagbe holo: ", total_books);
    // }

    // const banglaBooksQuantity = 40;
    // const englishBooksQuantity = 30;
    // const mathBooksQuantity = 50;
    // const BooksPage = paperRequirements(banglaBooksQuantity, englishBooksQuantity, mathBooksQuantity);


    // function pandaCost(singaraPrice, somuchaPrice, jilapiPrice){
    //     // console.log(singaraPrice, somuchaPrice, jilapiPrice);
    //     const totalSingaraPrice = singaraPrice * 3;
    //     console.log("Total Singara Price hocche:" , totalSingaraPrice );
    //     const totalSomuchaPrice = somuchaPrice * 4;
    //     console.log("Total Singara Price hocche:" , totalSomuchaPrice );
    //     const totalJilapiPrice = jilapiPrice * 5;
    //     console.log("Total Singara Price hocche:" , totalJilapiPrice );
        
    //     const totalPrice = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
    //     console.log("Total Price is : ", totalPrice);
    // }

    // pandaCost(7, 10, 15);

    // function getOddNumbers(arr) {
    //     return arr.filter(num => num % 2 !== 0);
    // }

    // const arrayValue = [89, 45, 44, 90, 890, 45, 60, 86, 69];
    // const resultOdd = getOddNumbers(arrayValue);
    // console.log(resultOdd);
      
    
    // function getEvenNumbers(arr) {
    //     return arr.filter(num => num % 2 == 0);
    // }

    // const arrayValue = [89, 45, 44, 90, 890, 45, 60, 86, 69];
    // const resultEven = getEvenNumbers(arrayValue);
    // console.log(resultEven);
      
    

    // function sumArray(arr) {
    //     let sum = 0;
      
    //     for (const num of arr) {
    //       sum += num;
    //     }
      
    //     return sum;
    // }

    // const arrayValue = [3, 23, 50, 44, 100];
    // const resultSum = sumArray(arrayValue);
    // console.log("Sum is ", resultSum);
      

      
    /* Task -4:  Find Largest Name from an array */

    // function bestFriend(friends){
    //     // console.log(friends);
    //     let largestName = friends[0];
    //     for(let i = 1; i < friends.length; i++){
    //         if(friends[i].length > largestName.length){
    //             largestName = friends[i];
    //         }
    //     }
    //     return largestName;
    // }

    // const myFriendList = ['Masab', 'Sheikh Hriody', 'Asif', 'Nafis', 'Apon', 'Rayian', 'Arafat'];
    // const largestNameFriend = bestFriend(myFriendList);
    // console.log(largestNameFriend);




     /* Task -5:  Find the negative number from an number array set */

    // function getPositiveNumber(numberArray){
    //     const positiveResult = [];
    //     for(const num of numberArray){
    //         if(num >= 0){
    //             positiveResult.push(num);
    //         }
    //         else{
    //             break;
    //         }
    //     }
    //     return positiveResult;
    // }
    // const numArrayValue = [3, 6, 78, -99, -90, -54, 34, 554, -78, -88, -100, 299];
    // const porstiveNumberArrray = getPositiveNumber(numArrayValue);
    // console.log(porstiveNumberArrray);



/* Find the largest number than 80 from an array */

function fibonacciSeries(numTerms) {
    let fibonacci = [0, 1];
  
    if (numTerms <= 2) {
      return fibonacci.slice(0, numTerms);
    }
  
    for (let i = 2; i < numTerms; i++) {
      const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextNumber);
    }
  
    return fibonacci;
  }
  
  // Example usage:
  const numTerms = 10;
  const result = fibonacciSeries(numTerms);
  console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  

