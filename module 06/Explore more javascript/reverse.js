function reverseString(str){
    for (let i = str.length; i >= 0; i--) {
        const element = str[i];
        console.log(element);
        
    }

}

const myString = "Hello bangladesh....";
const reversed = reverseString(myString);
console.log(reversed);