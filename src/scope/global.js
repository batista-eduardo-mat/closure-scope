//Global Scope

var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Mexico'; // Global scope
    console.log(country);
}

countries();
console.log(country);