// function tallestPerson(numbers){
//     let tallest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element > tallest){
//             tallest = element;
//         }
//     }
//     return tallest;
// }

// const heightValue = [167, 190, 120, 165, 137] ;
// const tallestRes = tallestPerson(heightValue);
// console.log("The tallest height is: ", tallestRes);


function tallestFriends(height){
    let tallest = height[0];
    for (const iterator of height) {
        if(iterator > tallest){
            tallest =  iterator;
        }
    }
    return tallest;
}
const heightValue = [180, 178, 190, 198, 187, 189, 192, 176];
const theTallestFriend = tallestFriends(heightValue);
console.log("The tallest friends's height is: ", theTallestFriend);