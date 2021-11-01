// JavaScript is the programming language of the Web.

// JavaScript to program the behavior of web pages.

// The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code !

// JavaScript was invented by 'Brendan Eich' in 1995, and became an ECMA standard in 1997.

// Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

// JavaScript can "display" data in different ways:innerHTML alert() colnsole.log();

// Ending statements with semicolon is not required, but highly recommended.

// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

// A good practice is to put spaces around operators ( = + - * / ).

// In a programming language, variables are used to store data values.JavaScript uses the var keyword to declare variables.

// Strings are written inside double or single quotes. Numbers are written without quotes.If you put a number in quotes, it will be treated as a text string.

// It's a good programming practice to declare all variables at the beginning of a script.

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var rollNumber = "25" + 2 + 5;
console.log(rollNumber);

var ageNumber = 2 + 7 + '4';
console.log(ageNumber);

// If you add a number and a string, the result will be a string!

// JavaScript Operators:Operators are nothing but Symbols (+  -  *   /  %  **).
// Operands are numbers/values between those symbols.

// JavaScript programmers tend to use camel case that starts with a lowercase letter:firstName, lastName, masterCard, interCity.

// JavaScript Arithmetic:

// Add Two Numbers:
var productsAdd = 24 + 32;
console.log(productsAdd);

// Subtract Two Numbers:
var productsSub = 44 - 32;
console.log(productsSub);

// Multiply Two Numbers:
var productsMul = 24 * 32;
console.log(productsMul);

// Divide Two Numbers:Displays Quotient
var productsDivide = 24 / 12;
console.log(productsDivide);

// % Two Numbers:Displays Remainder
var productsModulous = 91 % 30;
console.log(productsModulous);

// Exponentation
var expoNen = 2 ** 5;
console.log(expoNen);

// Operator Precedence:Follows BODMAS Rule.
// Operator precedence describes the order in which operations are performed in an arithmetic expression.

var precedNum = 24 + (32 * 3);
console.log(precedNum);

// JavaScript Assignment Operators:Assignment operators assign values to JavaScript variables.

// The = assignment operator assigns a value to a variable.
var x = 24;

// The += assignment operator adds a value to a variable.
x += 6;
console.log(x);

// The -= assignment operator subtracts a value from a variable.
x -= 9;
console.log(x);

// The *= assignment operator multiplies a variable.
x *= 0;
console.log(x);

// The /= assignment divides a variable and displays Quotient
var y = 25;
y /= 12
console.log(y);

// The %= assignment operator assigns a remainder to a variable.
var y = 25;
y %= 12
console.log(y);

// JavaScript Data Types:JavaScript variables can hold many data types: numbers, strings, objects, boolean, arrays and more.
// Declare var and assigned value
// Single = used to assign values
// Double == used to comparison and return Boolean Values (True or False).

var ageOfSubramanyam = 24; 
var ageOfSravani = 26;

var ageResults = (ageOfSubramanyam == ageOfSravani);

// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
console.log(typeof(ageResults));

// The typeof operator returns "object" for arrays because in JavaScript arrays are objects.

// A JavaScript function is a block of code designed to perform a particular task.
function addNumber(a,b){
    return a + b; 
}

console.log(typeof(addNumber(2,4)));
console.log(addNumber(2,4));

// We can call/invoke the function with its name by passing the arguments.

// JavaScript Objects:
var populIndia = {
    // Property : Value
    states : 29,

    union : 11,
    population : 120,
    male : 'sixty crores',
    districts : 100,
    fullDetails : function(){
        return 'Total Population in India in Crores is: '  + this.population ;
    }
};

console.log(populIndia.districts);

console.log(populIndia.fullDetails());