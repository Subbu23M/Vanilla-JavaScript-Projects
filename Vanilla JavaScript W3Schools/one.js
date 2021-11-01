// Vanilla JS is kind of a programming language to program the behavior of web pages.

// JavaScript was invented by Brendan Eich in 1995.

// Placing scripts at the bottom of the <body> element improves the display speed.

// Ending statements with semicolon is not required, but highly recommended.

// In a programming language, variables are used to store data values.

// JavaScript uses the var keyword to declare variables.

// An equal sign is used to assign values to variables.

// function functionName(){
//     block of code
// }

// JavaScript programmers tend to use camel case that starts with a lowercase letter:

// Example: firstName, lastName, masterCard, interCity.

function myChange(){
    document.getElementById('change').style.color='red';
}

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var x = "4" + 2 + 3;

console.log(x); 
// 423

var y = 2 + 3 + "7";
console.log(y);
// 57

// Data Types:
// undefined
var z; 

// Number
z = 24;

// String
z = 'Hello JS';

console.log(z);

// The typeof operator returns "object" for arrays because in JavaScript arrays are objects.

// A JavaScript function is a block of code designed to perform a particular task.

// function with parametres
function addNum(x,y){
    return (x + y);
}

// Calling function with arguments
console.log(addNum(4,9));

// Objects : Property : Property Value

var myFamily = {
    firstName : 'Subramanyam',
    lastName : 'Dindukurthi',
    age : 24,
    place : 'Kadapa',

    // function
    // In the example below, this is the myFamily object that "owns" the function function.
    function:   function () 
    {
        return this.firstName + "   " + this.lastName;
    }
};

console.log(myFamily.function());

// JS Strings: Group of characters placed in Single Quote or Double Quotes.

// Escape Character:

// Double Quote:
console.log('Hello World i am learning \" Vanilla JS \"');

// Single Quote:
console.log('It\'s my time to show my talent');

// For best readability, programmers often like to avoid code lines longer than 80 characters.

// If a JavaScript statement does not fit on one line, the best place to break it is after an operator.

// JavaScript String Methods:

var myName = 'Subramanyam';

//length:The length property returns the length of a string.
console.log(myName.length);

// Finding a String in a String
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.

var myQuote = 'A serial shows Ambedkar was the leader of Ambedkar Bheemrao Family';
console.log(myQuote.indexOf('Ambedkar'));

// Find the position of the character h in the string txt.
var text = 'abcdefghijklmno';
var postion = text.indexOf('h');
console.log(postion);

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
console.log(myQuote.lastIndexOf('Ambedkar'));

// Both indexOf() and lastIndexOf() return [-1] if the text is not found.

// Both methods accept a second parameter as the starting position for the search.
console.log(myQuote.indexOf('Ambedkar',14));

// The lastIndexOf() methods searches backwards (from the end to the beginning).
console.log(myQuote.lastIndexOf('Ambedkar',16));

console.log(myQuote.search('Ambedkar'));

// The two methods, indexOf() and search(), are equal?

// They accept the same arguments (parameters), and return the same value?

// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.

// Extracting String Parts:There are 3 methods for extracting a part of a string.

// 1) The slice() Method
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

// This example slices out a portion of a string from position 7 to position 12 (13-1).

var fruitTypes = 'Mango,Strawberry,Grapes,Kiwi';
console.log(fruitTypes.slice(6,15));

// If you omit the second parameter, the method will slice out the rest of the string.
console.log(fruitTypes.slice(7));

// Use the slice method to return the word "bananas".n-1

var txt = "I can eat bananas all day";
var x = txt.slice(10,17);
console.log(x);

// 2) The substring() Method : substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

// The substr() Method:substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

// 3) Replace()
var myMessage = 'Please Visit Office as early as possible and Office';
console.log(myMessage);

// To replace all matches, use a regular expression with a /g flag (global match)
console.log(myMessage.replace(/Office/g,'Home'));

// By default, the replace() method replaces only the first match.

// Use the correct String method to replace the word "Hello" with the word "Welcome".

var txt = "Hello World";
txt = txt.replace("Hello", "Welcome");
console.log(txt);

// Converting to Upper and Lower Case.
var myLaw = 'avika sree';
var myLawChange = myLaw.toUpperCase();
console.log(myLawChange);

var myDaughter = 'AVIKA SREE';
var myDaughterChange = myDaughter.toLowerCase();
console.log(myDaughterChange);

// The concat() Method:concat() joins two or more strings.
var schoolName = 'Ravindra Bharathi';
var collegeName = 'Vignan Junior College';
var result = schoolName.concat('  ' ,collegeName);
console.log(result);

// The concat() method can be used instead of the plus operator.
var schoolName = 'Ravindra Bharathi';
var collegeName = 'Vignan Junior College';
var result = schoolName +' ' +collegeName;
console.log(result);

// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

// String.trim():The trim() method removes whitespace from both sides of a string.
var userRequest = '            Yes, I am coming to the office';
console.log(userRequest.trim());

// Extracting String Characters:There are 3 methods for extracting string characters.

// 1)The charAt() Method:The charAt() method returns the character at a specified index (position) in a string.
var name = 'Subramanyam';
console.log(name.charAt(4));

// If no character is found,charAt() returns an empty string
console.log(name.charAt(12));

// 2)The charCodeAt() Method:The charCodeAt() method returns the unicode of the character at a specified index in a string.
// The method returns a UTF-16 code (an integer between 0 and 65535).

console.log(name.charCodeAt(2));

// 3)Property Access:ECMAScript 5 (2009) allows property access [ ] on strings.
console.log(name[4]);

// If no character is found, [ ] returns undefined.
console.log(name[13]);

// Converting a String to an Array
// A string can be converted to an array of characters with the split() method.

var myGreet = 'good morning';
var mySplit = myGreet.split('');
console.log(mySplit);

// JavaScript Numbers:JavaScript has only one type of number. Numbers can be written with or without decimals.

// WARNING !!
// JavaScript uses the [+] operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

// If you add two numbers, the result will be a number.
var rollNumber = 25;
var hallTicketNumber = 21;
var resultAdd = rollNumber + hallTicketNumber;
console.log(resultAdd);

// If you add two strings, the result will be a string concatenation.
var greetOct = 'Hello';
var greetNov = 'November';
var monthResult = greetOct +'  ' + greetNov;
console.log(monthResult); 

// If you add a number and a string, the result will be a string concatenation.

// If you add a string and a number, the result will be a string concatenation.
var p = 12;
var q = 24;
var z = 'The result:' + p + q;
console.log(z);

// The JavaScript interpreter works from left to right.

// First 25 + 25 is added because a and b are both numbers.

// Then 50 + "29" is concatenated because z is a string.

var a = 25;
var b = 25;
var c = '29';
var z = a + b + c;
console.log(z);

// The JavaScript interpreter works from left to right.

// First 10 + 20 is added because a and b are two numbers.

// Then 30 + "30" is concatenated because z is a string.

// Numeric Strings:JavaScript strings can have numeric content.
var l = 23;
console.log(typeof(l));

var m = '23'
console.log(typeof(m));

// JavaScript will try to convert strings to numbers in all numeric operations.

var subtractStrings = '23';
var subtractionStrings = '22';
var subS = subtractStrings - subtractionStrings;
console.log(subS);

var subtractStrings = '2';
var subtractionStrings = '22';
var subS = subtractStrings * subtractionStrings;
console.log(subS);

var subtractStrings = '22';
var subtractionStrings = '22';
var subS = subtractStrings / subtractionStrings;
console.log(subS);

var subtractStrings = 22;
var subtractionStrings = '22';
var subS = subtractStrings / subtractionStrings;
console.log(subS);

var subtractStrings = 22;
var subtractionStrings = 'TwentyTwo';
var subS = subtractStrings / subtractionStrings;
console.log(subS);
console.log(isNaN(subS));

// returns NaN
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// You can use the global JavaScript function isNaN() to find out if a value is a number.

// JavaScript uses the + operator to concatenate the strings.

var notNumber = NaN;
var numb = 23;
var naNumber = notNumber + numb;

console.log(naNumber);
// returns NaN

console.log(typeof(naNumber));
// returns number

var notNumber = NaN;
var numb = '23';
var naNumber = notNumber + numb;
console.log(naNumber);

// returns NaN23 concatenated.

var a = 23;
var b = 0;
var c = a / b;

console.log(c);
// returns Infinity

console.log(typeof(c));
// returns number

// Single = means we assign value.
// Double == means the two values should be equal (comparison).
// Triple === means the two values should be equal and the typeOf() also should be equal then only we see the result as True.

// JavaScript Number Methods.
// 1)The toString() method returns a number as a string.
var a = 24;

// To convert a number into String without providing the number in Quotes we use,
var d = a.toString();

var b = 23;
var c = d + b;
console.log(c);
// returns 2423

// 2)The toExponential() Method:toExponential() returns a string, with a number rounded and written using exponential notation.

// 3)The toFixed() Method:toFixed() returns a string, with the number written with a specified number of decimals.
var productPrice = 11.566;
console.log(productPrice.toFixed(0));
console.log(productPrice.toFixed(2));
// toFixed(2) is perfect for working with money.

// 4)The toPrecision() Method:toPrecision() returns a string, with a number written with a specified length.
var commodityQuantity = 121.23467;
console.log(commodityQuantity.toPrecision());
console.log(commodityQuantity.toPrecision(2));
console.log(commodityQuantity.toPrecision(4));
console.log(commodityQuantity.toPrecision(6));

// Converting Variables to Numbers
// 1)Number() :	Returns a number, converted from its argument.
var e = '24';

// To convert String into number we use
var h = Number(e);

var f = 24;
var g = h + f;
console.log(g);

// 2)The parseInt() Method:parseInt() parses a string and returns a whole number.
var wholeNumber = 24.3219;
console.log(parseInt(wholeNumber));

var wholeNum = 'age 24';
console.log(parseInt(wholeNum));
// If the number cannot be converted, NaN (Not a Number) is returned.

// 3)The parseFloat() Method:parseFloat() parses a string and returns a number.
var parFlo = 121.23;
console.log(parseFloat(parFlo));

// JavaScript Arrays:JavaScript arrays are used to store multiple values in a single variable.
var carNames = ['Hyundai','Suzuki','Toyoto']

//Access the Full Array
console.log(carNames);

// Accessing the First Array Element
console.log(carNames[0].toLowerCase());

// Changing an Array Element.
carNames[2] = 'BMW';

console.log(carNames);

console.log(typeof(carNames));

console.log(Array.isArray(carNames));

// The length Property:The length property of an array returns the length of an array (the number of array elements).
console.log(carNames.length);

// Accessing the Last Array Element.
console.log(carNames.length-1);

// JavaScript Array Methods:
// 1)toString() : converts an array to a string of (comma separated) array values.
var childNames = ['Avika','Bhaanu','Darshini','Sitha']

console.log(childNames); 
// returns Array

console.log(childNames.toString());
// returns String

// 2)The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator.

var childNames = ['Avika','Bhaanu','Darshini','Sitha']

console.log(childNames); 
// returns Array

console.log(childNames.join(' & '));
// returns String

// 3) The push() method adds a new element to an array (at the end).
var pushElements = childNames.push('Sreeja');
console.log(childNames);

// 4) The pop() method removes the last element from an array.

var popElements = childNames.pop();
console.log(popElements);

// The pop() method returns the value that was "popped out".

// 5)Shifting is equivalent to popping, working on the first element instead of the last.

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// The shift() method returns the string that was "shifted out".

var shiftElements = childNames.shift();
console.log(shiftElements);
console.log(childNames);

// 6)The unshift() method adds a new element to an array (at the beginning).
var unshiftElements = childNames.unshift('Dharmam');
console.log(childNames);

// Changing Elements:Array elements are accessed using their index number.
childNames[0] = 'Srimathi'
console.log(childNames);

// 7)The length property provides an easy way to append new elements to an array without using the push() method.
childNames[childNames.length] = 'Sailaja';
console.log(childNames);

// Using delete may leave undefined holes in the array. Use pop() or shift() instead.

// 8)The splice() method can be used to add new items to an array.
childNames.splice(2,0,'pranathi','pranavi');

console.log(childNames);

// The first parameter (2) defines the position where new elements should be added.

// Using splice() to Remove Elements.
childNames.splice(0,1);

// The second parameter (1) defines how many elements should be removed.
console.log(childNames);

// The concat() method creates a new array by merging (concatenating) existing arrays.
var cityNames = ['Kadapa','Proddatur','Badvel','Rajampeta'];
var ruralAreas = ['Vaddirala','Somireddipalle','mydhukur','kalasapaadu'];
var concatArrays = cityNames.concat(ruralAreas);
console.log(concatArrays);

// The concat() method can take any number of array arguments.

// The concat() method can also take strings as arguments.

var addVillage = ruralAreas.concat('Yeraagudi');
console.log(addVillage);

//The slice() method slices out a piece of an array into a new array.

var countryNames = ['USA','Africa','India','Australia','Newzeland','Singapore']
var removeCountry = countryNames.slice(2);

console.log(removeCountry);

console.log(countryNames);
// The slice() method creates a new array. It does not remove any elements from the source array.

// The method then selects elements from the start argument, and up to (but not including) the end argument.
var sliceArg = countryNames.slice(1,3);
console.log(sliceArg);

// JavaScript Sorting Arrays:
// 1)The sort() method sorts an array alphabetically.
console.log(childNames.sort());
console.log(countryNames.sort());

// 2)The reverse() method reverses the elements in an array.
console.log(countryNames);
console.log(countryNames.reverse());

// JavaScript Array Iteration Methods:Array iteration methods operate on every array item.

// 1)Array.forEach():The forEach() method calls a function (a callback function) once for each array element.
// forEach() does not returns a new array.

// Array of Objects.
const familyDetails = [
    {
        name : 'Subramanyam', position:'Student', age : 24
    },

    {
        name : 'Sreeram', position:'Supervisor', age : 50
    },

    {
        name : 'Jyothi Latha', position:'Interior Designer', age : 45
    }
];
console.log(familyDetails);
console.log(typeof(familyDetails));

// functionName : familyGroup.
// Ananymous function
function familyGroup(person){
    console.log(person.position.toLowerCase());
}

// call back function as argument.
familyDetails.forEach(familyGroup);

// Ananymous Function
familyDetails.forEach(function(item){
    console.log(item.name.toUpperCase());
})

// 2)Array.map():The map() method creates a new array by performing a function on each array element.

const stateDetails =[
    {
        name : 'Andhra Pradesh', party:'Congress' , members:100
    },

    {
        name : 'Madhya Pradesh', party:'Trunamul' , members:200
    },

    {
        name : 'Himachal Pradesh', party:'Sangparivar' , members:800
    }
];
console.log(stateDetails);
console.log(typeof(stateDetails));

// Ananymous Function
const member = stateDetails.map(function(memb){
    // return 'Hello';
    return memb.members + 12;
});
console.log(member);

// Ananymous function
function memCount(memb){
    console.log(memb.members + 5); 
}

// callback function
stateDetails.map(memCount);

//The map() method does not change the original array.
// Ananymous function
const newState = stateDetails.map(function(rastra){
    return{
        stateName : rastra.name.toUpperCase(),
        memCount : rastra.members * 2
    }
});
console.log(newState);

// Manipulating the DOM
const memDocument = stateDetails.map(function(membe){
    return `<h1> ${membe.name}</h1>`
});

// document.body.innerHTML = memDocument.join('/');
console.log(memDocument);

var rollNum = [24,11,2639,28];

// Ananymous Function
var num = rollNum.map(function(value){
    return value + 2;
});
console.log(rollNum);
console.log(num);

// 3)Array.filter():The filter() method creates a new array with array elements that passes a test.
// Alters the size of the original array.

const youngSters = [24,32,55,31,60];
console.log(youngSters);

// Ananymous function
const youngPeople = youngSters.filter(function(vayaasu){
    return vayaasu < 40;
})
console.log(youngPeople);

// 4)Array.find():The find() method returns the value of the first array element that passes a test function.
// returns first match. Best for unique values.
// if not undefined
const incomeLevel = [1200,500,400,80];

// Ananymous function
console.log(incomeLevel.find(function(money){
    return money < 1000;
}));

// 5)Array.reduce():The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method does not reduce the original array.
const familyEarnings = [
    {
        name : 'Subramanyam' , age:22 , salary : 50000, id:1
    },
    
    {
        name : 'Ramteja' , age:23 , salary : 20000, id:2
    },
    
    {
        name : 'Hero' , age:24 , salary : 22000, id:3
    },
    
    {
        name : 'Lavanya' , age:25 , salary : 25000, id:4
    }
];
console.log(familyEarnings);

// Ananymous function
const totalSalary = familyEarnings.reduce(function(acc,curr){
    console.log(`total : ${acc}`);
    console.log(`current salary:${curr.salary}`);
    
    acc = acc + curr.salary;
    return acc;
},0)
console.log(totalSalary);

// Ananymous function
const totalSalar = familyEarnings.reduce(function(acc,curr){
    console.log(`total : ${acc}`);
    console.log(`current salary:${curr.salary}`);
    
    acc = acc + curr.salary;
    return acc;
},20);
console.log(totalSalar);

// JavaScript Date Objects:JavaScript Date Object lets us work with dates.
var d = Date();
console.log(d);
console.log(typeof(d));

// Date objects are static. The computer time is ticking, but date objects are not.
// When you display a date object in HTML, it is automatically converted to a string.

// JavaScript Math Object:The JavaScript Math object allows you to perform mathematical tasks on numbers.
var mathPie = Math.PI;
console.log(mathPie);

// Math.round():Math.round(x) returns the value of x rounded to its nearest integer.
var x = 4.6;
var y = 4.3;
console.log(Math.round(x));
console.log(Math.round(y));

// Math.pow():Math.pow(x, y) returns the value of x to the power of y.
console.log(Math.pow(5,2));

// Math.sqrt():Math.sqrt(x) returns the square root of x.
console.log(Math.sqrt(64));

// Math.abs():Math.abs(x) returns the absolute (positive) value of x
console.log(Math.abs(-2.2));

// Math.ceil():Math.ceil(x) returns the value of x rounded up to its nearest integer.
console.log(Math.ceil(4.6));

// Math.floor():Math.floor(x) returns the value of x rounded down to its nearest integer.
console.log(Math.floor(4.3));

// Math.sin()
console.log(Math.sin(0));

// Math.cos()
console.log(Math.cos(0));

// Math.min()
console.log(Math.min(54,45,21));

// Math.max()
console.log(Math.max(450,-54,697));

// JavaScript Random:

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
console.log(Math.random());
// Math.random() always returns a number lower than 1.

// JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers.

// returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 10));

// returns a random integer from 0 to 11
console.log(Math.floor(Math.random() * 10));

// returns a random integer from 0 to 100
console.log(Math.floor(Math.random() * 99));

// returns a random integer from 0 to 101
console.log(Math.floor(Math.random() * 100));

// JavaScript Booleans:
// A JavaScript Boolean represents one of two values: true or false.

// JavaScript Comparison Operators.
// == used to compare and return the result True / False.
var productNumber = 10;
var productSize = 11;
console.log(productNumber == productSize);

var productNumber = 11;
var productSize = 11;
console.log(productNumber == productSize);

var productNumber = '11';
var productSize = 11;
console.log(productNumber == productSize);



// === used to compare and also checks whether the data type equals or not.
var wardName = 11;
var parentName = '11';
console.log(wardName === parentName);

// !=
var p = 25;
var q = 22;
console.log(p == q);
console.log(p != q);

// !==
var r = 22;
var s = '22';
console.log(r === s);
console.log(r !== s);

// > 
var t = 22;
var u = 23;
console.log(t > u);

// <
var t = 22;
var u = 23;
console.log(t < u);

// >=
var v = 25;
var w = 25;
console.log(v >= w);

// <=
var v = 24;
var w = 24;
console.log(v <= w);