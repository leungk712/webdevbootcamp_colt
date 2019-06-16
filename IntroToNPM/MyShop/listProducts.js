var faker = require('faker');

// console.log(faker.commerce.productName());
console.log(faker.commerce.price());

for(var i = 0; i < 10; i++){
    console.log(faker.commerce.productName() + " " + "- $ " + faker.commerce.price());
}