// JavaScript Array Iteration Methods.
// Array iteration methods operate on every array item.

//1) Array.forEach():The forEach() method calls a function (a callback function) once for each array element.
// does not return new array.

const familyDetails = [
    {
        name : 'Subramanyam' , age : 24, profession : 'Developer'
    },

    {
        name : 'Nikhil Teja' , age : 22, profession : 'Government Employee'
    },

    {
        name : 'Hari' , age: 23 , profession : 'Teacher'
    },

    {
        name : 'Ezra' , age :25 , profession: 'Mathematics Lecturer'
    }
];
console.log(familyDetails);
console.log(typeof(familyDetails));

// Ananymous function
function showPerson(person){
    console.log(person.name.toUpperCase());
}

// Callback function
familyDetails.forEach(showPerson);

// Ananymous function
familyDetails.forEach(function(position){
    console.log(position.profession.toLowerCase());
});

// 2)The map() method creates a new array by performing a function on each array element.
// The map() method does not change the original array.

// Ananymous function
const ages = familyDetails.map(function(years){
    return years.age + 2;
});
console.log(ages);
console.log(typeof(ages));

const childDetails = [
    {
        namee : 'kumar' , age: 22
    },

    {
        namee : 'kumaran' , age: 25
    },

    {
        namee : 'kumaraswamy' , age: 26
    },

    {
        namee : 'kumarambheem' , age: 27
    }
];
console.log(childDetails);

// Ananymous function
const childPost = childDetails.map(function(naam){
    return{
        fullName : naam.namee.toUpperCase()
    }
});
console.log(childPost);

// Ananymous function
const peopleDocument = childDetails.map(function(human){
    return `<h1> ${human.namee.toUpperCase()} </h1>`
});

// document.body.innerHTML = peopleDocument.join('?')

console.log(peopleDocument);

var number1 = [22,27,23,20];

// Ananymous function
var number2 = number1.map(function(num){
    return num + 21;
});
console.log(number1);
console.log(number2);

// 3) Array.filter():The filter() method creates a new array with array elements that passes a test.
// Alters the size of original array.
const familyEarning = [
    {
        job: 'teacher' , salary: 25000
    },

    {
        job: 'doctor' , salary: 24000
    },

    {
        job: 'lawyer' , salary: 27000
    },

    {
        job: 'nurse' , salary: 29000
    }
];
console.log(familyEarning.length);

// Ananymous function
const salaryEarnings = familyEarning.filter(function(money){
    return money.salary <= 25000
});
console.log(salaryEarnings);
console.log(salaryEarnings.length);
// if condition is not matched it returns a empty array.

// 4)Array.find():The find() method returns the value of the first array element that passes a test function.
// if condition fails it return undefined.
// Better for unique values.
// returns first match .
// returns the object

const districtDetails = [
    {
        districtName : 'Kadapa', id:1
    },

    {
        districtName : 'Chittor', id:2
    },

    {
        districtName : 'Kurnool', id:3
    },

    {
        districtName : 'Ananthapur', id:3
    }
];

// Ananymous function
const districtPosition = districtDetails.find(function(number){
    return number.id === 3
});
console.log(districtPosition);

// Ananymous function
const districtPositio = districtDetails.find(function(number){
    return number.id === 3
});
console.log(districtPositio);
// returns first match 

// Ananymous function
const districtPositi = districtDetails.find(function(number){
    return number.id === 5
});
console.log(districtPositi);
// returns undefined

// 5) Array.reduce():The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. 
// The reduce() method does not reduce the original array.
// The reduce() method can accept an initial value.
const facultySalary = [
    {
        subject : 'Telugu' , earnings : 22222
    },

    {
        subject : 'English' , earnings : 25000
    },

    {
        subject : 'Tamil' , earnings : 21247
    },

    {
        subject : 'Sanskrit' , earnings : 24562
    }
];

// Ananymous function
const salaryCount = facultySalary.reduce(function(accu,curr){
    console.log(`total salary : ${accu}`);
    console.log(`total sum : ${curr.earnings}`);

    // accu += curr.earnings;
    accu = accu + curr.earnings;

    return accu;
},0);
console.log(salaryCount);

// JavaScript Date Objects
var date = Date();
console.log(date);

// JavaScript Math Object:The JavaScript Math object allows you to perform mathematical tasks on numbers.
console.log(Math.PI);

// Math.round():Math.round(x) returns the value of x rounded to its nearest integer.
console.log(Math.round(5.6));
console.log(Math.round(5.4));

// Math.pow():Math.pow(x, y) returns the value of x to the power of y.
console.log(Math.pow(5,2));

// Math.sqrt():Math.sqrt(x) returns the square root of x.
console.log(Math.sqrt(25));

// Math.abs():Math.abs(x) returns the absolute (positive) value of x.
console.log(Math.abs(-25));

// Math.ceil():Math.ceil(x) returns the value of x rounded up to its nearest integer.
console.log(Math.ceil(5.6));

// Math.floor():Math.floor(x) returns the value of x rounded down to its nearest integer.
console.log(Math.floor(4.4));

// Math.sin():Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
console.log(Math.sin(0));

// Math.cos():Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
console.log(Math.cos(0));

// Math.min() and Math.max():Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
console.log(Math.max(25,21,22,097));

console.log(Math.min(17,-79,24,46));

// JavaScript Random
// Math.random():Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
console.log(Math.random());

// Math.random() always returns a number lower than 1.

// JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers.

// returns a random integer from 0 to 9.
console.log(Math.floor(Math.random() * 10));

// returns a random integer from 0 to 10.
console.log(Math.floor(Math.random() * 11));

// returns a random integer from 0 to 99.
console.log(Math.floor(Math.random() * 100));

// returns a random integer from 0 to 100.
console.log(Math.floor(Math.random() * 101));

// JavaScript Booleans:
// Boolen returns True or False

// JavaScript Comparison Operators.
// Comparison Operators:Comparison operators are used in logical statements to determine equality or difference between variables or values.

// We use = for assigning a value to a variable.
// We use == for comparison.
console.log(5 == 4);
console.log(5 == 5);

console.log(5 == '5');

// We use === for comparison and also checks whether the Data Type is equals or not.
var threeEquals = 25;
var fourEquals = '25';

// Here Data Type differs
console.log(threeEquals === fourEquals);

// !=
console.log(5 == 5);
console.log(5 != 5);

// !==
console.log( 5 === '5');
console.log( 5 !== '5');

// >
console.log( 15 > 10);
console.log(17 > 21);

// <
console.log(15 < 12);
console.log(45 < 9);

// >=
console.log(10 >= 10);

// <=
console.log(10 <= 11);