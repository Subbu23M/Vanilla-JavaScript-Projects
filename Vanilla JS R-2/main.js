// JavaScript Events:
function displayDate(){
    document.getElementById('date').innerHTML=Date();
}

// JavaScript Strings:Strings are nothing but group of characters enclosed within Single Quotes or Double Quotes.

// Single Quote:
var myName = 'Subramanyam';
console.log(myName);

// Double Quotes:
var myPlace = 'Kadapa';
console.log(myPlace);

// String Length:To find the length of a string, use the built-in length property.
console.log(myName.length);
console.log(myPlace.length);

// Escape Character:

// The sequence \"  inserts a double quote in a string.
var greetText = 'Hello,everyone \" Good Morning \"';
console.log(greetText);

// The sequence \'  inserts a single quote in a string
var footerText = 'It\'s my time to learn JS';
console.log(footerText);

var nextLine = 'To move to next line we use \\n';
console.log(nextLine);

// For best readability, programmers often like to avoid code lines longer than 80 characters.

// If a JavaScript statement does not fit on one line, the best place to break it is after an operator.

// Single = means to assign a value to any variable name.

// Double == means for comparison.

// Triple === means used for comparison and check whether typeof() equals or not.

// JavaScript String Methods:

// 1) String Length:To find the length of a string, use the built-in length property.
console.log(myName.length);
console.log(myPlace.length);

// 2)Finding a String in a String
// The indexOf() method returns the index of (the position of) the [first occurrence] of a specified text in a string.
var constCommand = 'Demolish the walls everythings which has four walls';
console.log(constCommand.indexOf('walls'));

// The indexOf() method accepts a second parameter as the starting position for the search.
console.log(constCommand.indexOf('walls',31));

// 3)The lastIndexOf() method returns the index of the [last occurrence] of a specified text in a string.
console.log(constCommand.lastIndexOf('walls'));

// The lastIndexOf() methods searches backwards (from the end to the beginning),
console.log(constCommand.lastIndexOf('walls',20));

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
console.log(constCommand.lastIndexOf('ant'));
console.log(constCommand.indexOf('blue'));

// 4)The search() method searches a string for a specified value and returns the position of the match.
console.log(constCommand.search('the'));

// The two methods, indexOf() and search(), are not equal?
// The search() method cannot take a second start position argument.

// Extracting String Parts:

// 1)slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

var fruitNames = 'Banana, Apple, Tomato, Potato';
console.log(fruitNames.slice(7,13));

// If you omit the second parameter, the method will slice out the rest of the string.
console.log(fruitNames.slice(7));

// If a parameter is negative, the position is counted from the end of the string.
console.log(fruitNames.slice(-9));

// 2)The substring() Method:substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.
console.log(fruitNames.substring(7,13));

// If you omit the second parameter, substring() will slice out the rest of the string.
console.log(fruitNames.substring(5));

// 3)The substr() Method:substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
console.log(fruitNames.substr(5,4));

// If you omit the second parameter, substr() will slice out the rest of the string.
console.log(fruitNames.substr(6));

// If the first parameter is negative, the position counts from the end of the string.
console.log(fruitNames.substr(-7));

// The replace() method replaces a specified value with another value in a string.
var quoteText = 'Hey do your home work from home';
console.log(quoteText);

var replaceQuote = quoteText.replace('home','class');
console.log(replaceQuote);

// By default, the replace() method replaces only the first match.

// To replace all matches, use a regular expression with a /g flag (global match)
var replaceQuote = quoteText.replace('/home/g','class');
console.log(replaceQuote);

// Converting to Upper and Lower Case:
var peopleMedia = 'chandra';
console.log(peopleMedia.toUpperCase());

var studentName = 'CHANDRA';
console.log(studentName.toLowerCase());

// The concat() Method:concat() joins two or more string.
var mobileName = 'Samsung';
var mobilePrice = 10000;
var mobConcat = mobileName.concat(mobilePrice);
console.log(mobConcat);

// String.trim():The trim() method removes whitespace from both sides of a string.
var whiteSpace = '            Hello,World!';
console.log(whiteSpace.trim());

// Extracting String Characters.
// The charAt() Method:The charAt() method returns the character at a specified index (position) in a string.
var charString = 'Rishika';
console.log(charString.charAt(3));

// Property Access:
console.log(charString[4]);

// A string can be converted to an array of characters with the split() method.
console.log(charString.split(''));

// If the separator is omitted, the returned array will contain the whole string in index [0].

// JavaScript Number Methods:
// 1)The toString() Method:The toString() method returns a number as a string.
var rollNumber = 24;

console.log(typeof(rollNumber));

var rollNumberConvert = rollNumber.toString();
console.log(typeof(rollNumberConvert));

// 2)The toFixed() Method:toFixed() returns a string, with the number written with a specified number of decimals.
var productPrice = 10.2536;
console.log(productPrice.toFixed(0));
console.log(productPrice.toFixed(2));
// toFixed(2) is perfect for working with money.

// 3)The toPrecision() Method:toPrecision() returns a string, with a number written with a specified length.
console.log(productPrice.toPrecision(6));

// 4)The valueOf() Method:valueOf() returns a number as a number.
console.log(productPrice.valueOf());

// The parseInt() Method:parseInt() parses a string and returns a whole number.
console.log(parseInt(productPrice));

// parseFloat()	Parses its argument and returns a floating point number.
console.log(parseFloat(productPrice));

// JavaScript Arrays:JavaScript arrays are used to store multiple values in a single variable.
var cementCompanies = ['Dalmia','Ultratech','Penna','Nagarjuna','Trishul','Zuari'];
console.log(cementCompanies);

// Access the Elements of an Array.
console.log(cementCompanies[3]);

// Changing an Array Element.
cementCompanies[2] = 'Priya';
console.log(cementCompanies);

// Access the Full Array:With JavaScript, the full array can be accessed by referring to the array name.
console.log(cementCompanies);

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
console.log(typeof(cementCompanies));

// The length Property:The length property of an array returns the length of an array (the number of array elements).
console.log(cementCompanies.length );

// The length property is always one more than the highest array index.

// Accessing the First Array Element.
console.log(cementCompanies[2]);

// Accessing the Last Array Element.
console.log(cementCompanies[cementCompanies.length-1]);

// The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// JavaScript Array Methods:
// 1)Converting Arrays to Strings:The JavaScript method toString() converts an array to a string of (comma separated) array values.
var andhraNewsChannels = ['TV5','ABN','TV9','NTv','V6News','HMTV'];
console.log(andhraNewsChannels);
console.log(typeof(andhraNewsChannels));

var arrConvert = andhraNewsChannels.toString();
console.log(arrConvert);
console.log(typeof(arrConvert));

// 2)The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator.

console.log(andhraNewsChannels.join('*'));

// Pushing:The push() method adds a new element to an array (at the end):
var pushArray = andhraNewsChannels.push('99tv');
console.log(andhraNewsChannels);

// Popping:The pop() method removes the last element from an array:
var popArray = andhraNewsChannels.pop();
console.log(popArray);
console.log(andhraNewsChannels);

// Shifting Elements:Shifting is equivalent to popping, working on the first element instead of the last.
var shiftArray = andhraNewsChannels.shift();
console.log(shiftArray);
console.log(andhraNewsChannels);

// The unshift() method adds a new element to an array (at the beginning).
var unshiftArray = andhraNewsChannels.unshift('primetv')
console.log(unshiftArray);
// The unshift() method returns the new array length.

console.log(andhraNewsChannels);

//Splicing an Array:The splice() method can be used to add new items to an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).

var carCompanies = ['Renault','Hyundai','Wolkswagon','BMW'];
console.log(carCompanies);

// The second parameter (2) defines how many elements should be removed.
carCompanies.splice(2,0,'Mahaindra','Toyota');
console.log(carCompanies);

var cycleCompany = ['Hercules','Axendy'];
cycleCompany.splice(1,0,'Renault');
console.log(cycleCompany);

cycleCompany.splice(0,2);
console.log(cycleCompany);

// Slicing an Array:The slice() method slices out a piece of an array into a new array.
var sliceArray = andhraNewsChannels.slice(1);
console.log(sliceArray);
// The slice() method creates a new array. It does not remove any elements from the source array.

var pencilCompany = ['HP','Apsara','Nataraja','Traingle'];
console.log(pencilCompany);
console.log(pencilCompany.slice(1,3));

// Sorting an Array:The sort() method sorts an array alphabetically.
var sortArray = andhraNewsChannels.sort();
console.log(sortArray);

// Reversing an Array:The reverse() method reverses the elements in an array.
console.log(carCompanies);
var reverseArray = carCompanies.reverse();
console.log(reverseArray);