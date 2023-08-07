// function takaToDollar(taka){
//     // console.log(taka)
//     const dollar = taka * 0.0092;
//     return dollar;
// }

// const myTaka = 250;
// const myDollar = takaToDollar(myTaka);
// console.log("the value of ", myTaka, "in dollar is : ", myDollar);


// function add(a, b){
//     return a + b;
// }
// console.log(add("adam" + "eve"));


// var a = 5;
// var b = 8;
// var c = 4;
// var d = 6;
// var highest = Math.max(a,b,c,d);
// console.log(highest);


// const number = 78;
// const answer = Math.abs(number);
// console.log(answer);

// var a = 2;
// var b = 3;
// if(a < b){
//     console.log("Hello");
// }


function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
  
    return fibSeries;
  }
  
  function fibonacciMultiplication(a, b) {
    const fibA = fibonacci(a);
    const fibB = fibonacci(b);
  
    let result = 0;
    for (let i = 0; i < fibA.length; i++) {
      result += fibA[i] * fibB[i];
    }
  
    return result;
  }
  
  // Example usage:
  const num1 = 6;
  const num2 = 4;
  const multiplicationResult = fibonacciMultiplication(num1, num2);
  console.log(`Fibonacci multiplication of ${num1} and ${num2} is ${multiplicationResult}`);
  