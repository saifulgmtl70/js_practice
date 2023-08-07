
function barbieKen(myString){
    // console.log(myString);
    let total = 0
    for(let i = 0; i < myString.length; i++){
        console.log(myString[i]);
    }

    const stringLength = myString.length;
    console.log("Total Number of this String is :", stringLength);

    const remider = stringLength % 2;
    if(remider == 0){
        console.log("Hi Ken!");
    }
    else{
        console.log("Hi Barbie!");
    }
}

barbieKen("HelloAmarBangladesh");














































