const country = "Bangladesh";
const age = 52;
const isIndepentent = true;
const student = {
    id: 172625,class:12,name:'azad'
};
const friends = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function add(num2, num3){
    return num2 + num3;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndepentent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);


//...............................
console.log(friends.includes(19));
console.log(friends.includes(30));




//Cocatenation String //
const newFriends = [32, 33, 32,53,43];
const allFriends = newFriends.concat(friends);
console.log(allFriends);