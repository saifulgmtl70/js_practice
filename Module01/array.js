var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(letters);
console.log(letters[7]);
 letters.push('h');
 console.log(letters);
 letters.push('i');
 console.log(letters);
 letters.push('j');
 console.log(letters);
 letters.push('k', 'l', 'm');
 console.log(letters);
 letters.pop();
 console.log(letters);
 letters.pop();
 console.log(letters);

 letters.shift();
 console.log(letters);
 letters.unshift('a');
 console.log(letters);
 letters.unshift('a');
 console.log(letters);

 letters.splice(5,6);
 console.log(letters);
 letters.splice(4,5);
 console.log(letters);