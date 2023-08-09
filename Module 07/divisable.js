function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Invalid Input";
    }

    const firstElement = arr[0];
    const secondElement = arr[1];

    if (typeof firstElement !== 'number' || typeof secondElement !== 'number') {
        return "Invalid Input";
    }

    if (firstElement === secondElement) {
        return "equal";
    } else {
        const sortedArray = [Math.min(firstElement, secondElement), Math.max(firstElement, secondElement)];
        return sortedArray;
    }
}

// ফাংশন টেস্ট করুন
console.log(sortMaker([5, 2]));   // [2, 5]
console.log(sortMaker([3, 3]));   // "equal"
console.log(sortMaker([7, 'a'])); // "Invalid Input"
console.log(sortMaker([4]));      // "Invalid Input"
