// const student = {
//     name: "Saiful Islam Azad",
//     roll: 172526,
//     department: "CSE",
//     section: "B1",
//     isSingle : true,
//     firends : ['apon', 'arfat', 'azad', 'masab', 'riyadh'],
//     car:{
//         brand: "Tesla",
//         price: 500000,
//         made: 2025,
//     }
// }

// console.log(student);


// const numbers = [45, 65, 23, 98, 19];
// // for(let i = 0; i < numbers.length; i++){
// //     const number = numbers[i];
// //     console.log(number);
// // }


// for(const number of numbers){
//     console.log(number);
// }


const products = [
    {id: 1, name: "Vivo Y72 5G", price: 25000},
    {id: 2, name: "Samsung Galaxy A70", price: 21000},
    {id: 3, name: "Redmi 12", price: 19999},
    {id: 4, name: "Redmin Go", price: 8000},
    {id: 5, name: "Oppo F9", price: 17000},
    {id: 6, name: "Xiomi", price: 16000},
    {id: 7, name: "Symphony ", price: 2000},
    {id: 8, name: "Vivo y21", price: 15000}
    
];



function matchProducts(products, search){
    const mathced = [];
    for (const product of products) {
        if(product.name.includes(search)){
            mathced.push(product);
        }
    }
    return mathced;
}

const result = matchProducts(products, "V");
console.log(result);