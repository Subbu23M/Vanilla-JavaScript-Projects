// Select the elements
const h1Element = document.querySelector('h1');
const h3Element = document.querySelector('h3');
const h4Element = document.querySelectorAll('h4');
const paragraphElement = document.querySelector('p');
const btnElement = document.querySelector('.btnOne');
const btnElement2 = document.querySelector('.btnTwo');
const inputElement = document.querySelector('input');
const anchorElement = document.querySelector('a');


// Added these class from External CSS file.
h1Element.classList.add('headerOne');

// function expression
const addClass = function () {
    // Declared & Assigned
    const hasClass = h1Element.classList.contains('headerOne');

    // Use if...else conditional statement
    if (hasClass) {
        h1Element.classList.remove('headerOne');
    } else {
        h1Element.classList.add('headerOne');
    }
}

// Event Listener
btnElement.addEventListener('click', addClass);

// Event Listener
btnElement2.addEventListener('mousedown', function () {
    console.log('button is pressed');
});

btnElement2.addEventListener('mouseup', function () {
    console.log('button is released');
});

btnElement2.addEventListener('click', function () {
    console.log('when mousedown and mouseup are succeed');
});

btnElement2.addEventListener('mouseenter', function () {
    paragraphElement.classList.add('btnStyle');
    console.log('works like css hover effect');
});

btnElement2.addEventListener('mouseleave', function () {
    paragraphElement.classList.remove('btnStyle');
    console.log('removes css hover effect');
});

// key events

// inputElement.addEventListener('keypress',function(){
//     console.log('when key is pressed');
// });

// inputElement.addEventListener('keydown',function(){
//     console.log('when key is stop typing');
// });

inputElement.addEventListener('keyup', function () {
    // console.dir(inputElement);
    console.log(inputElement.value);
});

// About Current Target - return target HTML element source code. 
h3Element.addEventListener('click', function (e) {
    console.log(e.currentTarget);
    console.log(e.type);
});

// function declaration
function removeAnchor(e) {
    e.preventDefault();
}

// When we click anchor tag it moves to the top of the web page. To prevent it we can use e.preventDefault()
// And also when we click submit button page reloads we can stop reloading.

// Here we are passing function reference not invoking 
anchorElement.addEventListener('click', removeAnchor);

h4Element.forEach(function (ele) {
    ele.addEventListener('click', function (e) {
        console.log('currentTarget', e.currentTarget);
        e.currentTarget.style.color = 'red';

        console.log('target', e.target);
        e.target.style.color = 'blue';
    });
});

// About localStorage
localStorage.setItem('name', 'anil');

const keyValue = localStorage.getItem('name');
console.log(keyValue);

localStorage.setItem('age', 24);

localStorage.removeItem('age');

localStorage.clear();

// Declared
let fruitsArray;

if (localStorage.getItem('fruits')) {
    // assigned
    fruitsArray = JSON.parse(localStorage.setItem('fruits'))
} else {
    fruitsArray = [];
}
console.log(fruitsArray);

fruitsArray.push('apple');
fruitsArray.push('mango');
localStorage.setItem('fruits', JSON.stringify(fruitsArray));