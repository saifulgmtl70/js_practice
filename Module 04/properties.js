var shoppingCart = {
    books: 3,
    sunglass: 3,
    keyboard: 5,
    mouse:2,
    pen:10,
    shoe:4
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);


for(var i = 0;i < keys.length; i++){
    // console.log(keys.values[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);

}

// for in loop //
