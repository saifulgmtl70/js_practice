let sum = 0;

for(let i = 1; i <= 7; i++){
    sum = sum + i
    console.log('Factorial of' ,i , 'is: ', sum);
}

function FactorialSu(number){
    let sum = 0;
    for(let i = 0; i <number.length; i++){
        sum = sum + i;
        console.log("Factorials", i, 'Is: ', sum);
    }
    return sum;
}

FactorialSu(10);