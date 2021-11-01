// JavaScript HTML DOM
// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// When a web page is loaded, the browser creates a Document Object Model of the page.
// Dynamically access and update the content, structure, and style of a document.
// The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

// JavaScript - HTML DOM Methods
// In the DOM, all HTML elements are defined as objects.

document.body.style.backgroundColor = 'teal';
document.body.style.color = 'orange';

// Global window object
console.log(window);

// Returns HTML Document
console.log(document);

// 1)The getElementById Method:The most common way to access an HTML element is to use the id of the element.
document.getElementById('change').style.color = 'yellow';

// Assign to a variable and we can apply multiple styles.

const element = document.getElementById('change');

element.style.fontSize = '2rem';
element.style.textAlign = 'center';

// 2)Finding HTML Elements by Tag Name.
const headings = document.getElementsByTagName('h2');

headings[0].style.textTransform = 'lowercase';
headings[1].style.textDecoration = 'underline';

// returns node list
console.log(headings);

// returns length
console.log(headings.length);

// 3)Finding HTML Elements by Class Name:
const buttons = document.getElementsByClassName('btn');

// returns length
console.log(buttons.length);

// 4)Finding HTML Elements by CSS Selectors.
const fruits = document.querySelector('#special');
console.log(fruits);

// Selects Single Element
const range = document.querySelector('.Orange');
console.log(range);

// Selects All Elements
// returns nodelist
const rangee = document.querySelectorAll('.Orange');
// console.log(rangee);

rangee.forEach(function(fruit){
    fruit.style.color = 'yellow'
});

// Returns a node object or node list
const button = document.getElementById('btn');

// nodeName of an element node is the same as the tag name.
console.log(button.nodeName);

// Returns nodeName
console.log(button.nodeName);

// Returns CSS Styles which we applied. 
console.log(button.style);

// If the element is not found,will contain null.

// JavaScript HTML DOM - Changing HTML
// The HTML DOM allows JavaScript to change the content of HTML elements.

// Changing HTML Content:The easiest way to modify the content of an HTML element is by using the innerHTML property.

// JavaScript HTML DOM - Changing CSS
// The HTML DOM allows JavaScript to change the style of HTML elements.

// The onload event can be used to check the visitor's browser type and browser version.

// The onchange Event:The onchange event is often used in combination with validation of input fields.

// Ananymous function()
function changeText(){
    var z = document.getElementById('text');
    z.value = z.value.toUpperCase();
}

// JavaScript HTML DOM Navigation
// With the HTML DOM, you can navigate the node tree using node relationships.

// Every HTML element is an HTML element node.

// The text inside HTML elements are text nodes.

// Every HTML attribute is an attribute node.

// All comments are comment nodes.

// With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.

// New nodes can be created, and all nodes can be modified or deleted.

// First select the elements.
const fruitList = document.getElementById('fruits');

// childNodes
console.log(fruitList.childNodes);

// children
console.log(fruitList.children);

// firstChild
console.log(fruitList.firstChild);

// lastChild
console.log(fruitList.lastChild);

// parentNode
console.log(fruitList.parentNode);

//nextSibling
const next = document.getElementsByClassName('first');
// console.log(next);

const nextItem = next.nextSibling;
console.log(nextItem);

//previousSibling
const prev = document.getElementsByClassName('last');
// console.log(prev);

const preItem = prev.previousSibling;
console.log(preItem);

// Accessing the innerHTML property is the same as accessing the nodeValue.

// for single prevSibling and nextSibling we should add the next/prevSibling number of times to escape from whitespaces.
// For this we can use prevElementSibling and nextElementSibling.

const header = document.getElementById('headerthree');

// returns null
console.log(header.nodeValue);

// The nodeValue Property:The nodeValue property specifies the value of a node.
console.log(header.firstChild.nodeValue);

// textContent
console.log(header.textContent);

// innerHTML
console.log(header.innerHTML);

// getAttribute()
const firstValue = document.querySelector('.cycle');

// returns className
const classValue = firstValue.getAttribute('class');
console.log(classValue);

const secondValue = document.querySelector('.bicycle');

// returns idName
const idValue = secondValue.getAttribute('id');
console.log(idValue); 

// setAttribute()
// navigating the DOM
const lastValue = secondValue.nextElementSibling;

// Adding the className / idName dynamically and also innerHTML/textContent/nodeValue
lastValue.setAttribute('class','cycle');
lastValue.setAttribute('id','agarbathi');
lastValue.textContent = 'Hello,World!';

console.log(lastValue);

// Selected all the classes
const classValues = document.querySelectorAll('.cycle');
console.log(classValues);

// className
const navClass = document.getElementById('nav');
const classVal = navClass.className;

// returns className
console.log(classVal);

// Add className dynamic
const naviClass = document.getElementById('navi');
naviClass.className = 'naviClass';
console.log(naviClass);

// If you add dynamic classes more than one it over writes the previous one.
// classList
// naviClass.classList.add('first','second','third',......)
// naviClass.classList.remove('first','second','third',......)

// check whether class contains or not
let classResult = navClass.classList.contains('class');

if(classResult){
    console.log('True');
}else{
    console.log('False');
}
// console.log(classResult);

// We can create element and text and we can append to the body
// createElement

// selected the element
const divResult = document.getElementById('result');

// createElement
const headerElement = document.createElement('h1');

// createTextNode
const headerValue = document.createTextNode('Hey,Pianno');

// appendChild
headerElement.appendChild(headerValue);

// Added className dynamically 
headerElement.className = 'color'
// headerElement.classList.add('color');

// displays on browser after External JS
// document.body.appendChild(headerElement);

// added in selected element (div) at the end
// divResult.appendChild(headerElement)

// console.log(divResult.children);

// createElement createTextNode appendChild adds created element at the end by default.

// insertBefore(createElement,location)
document.body.insertBefore(headerElement,divResult);

// createElement
const smallHeading = document.createElement('h4');

// createTextNode
const smallText = document.createTextNode('Hello Sunrisers Hyderabad');

// add classList
smallHeading.classList.add('color')

// appendChild
smallHeading.appendChild(smallText);

// replaceChild(new,old)
document.body.replaceChild(smallHeading,divResult);

// createElement
const medHead = document.createElement('h3');

// without creating createTextNode and appending the,
// createElement.appendChild(createTextNode),
// document.body.appendChild(createElement),
// we can use 

// innerText
medHead.innerText = `Hey,this is sanju samson`;

// prepend
// adds at the beginning of the Document
document.body.prepend(medHead);

// remove()
const removeElement = document.getElementById('remove');

// removed its childNodes
removeElement.remove();
// available in HTML Document it disappears from DOM.

// removeChild()
const headElement = document.querySelector('#child');

const headSix = headElement.querySelector('h6');

headElement.removeChild(headSix);

console.log(headSix);

// available in HTML Document and also in Console. 

// innerHTML
const htmlvalue = document.getElementById('html');
console.log(htmlvalue.innerHTML);

const smallHead = document.createElement('h6');
smallHead.innerHTML = ` Hello MI and DC `;
document.body.appendChild(smallHead); 

// textContent
console.log(htmlvalue.textContent);

// Select the element
const qualTwo = document.querySelector('.sun');

console.log(qualTwo);
// returns nodeValue

qualTwo.textContent = 'Hello ramu';