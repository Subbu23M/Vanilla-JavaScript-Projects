// Select the element

const btn = document.querySelector('.butn');

// returns node object
// console.log(btn);

const header = document.querySelector('h3');

// returns node object
// console.log(header);

// addEventListener
// Ananymous function

// btn.addEventListener('click',function(){
//     console.log(`Hey,you clicked me!`);
//     header.classList.add('red');
// });

// Ananymous function
function changeStyle(){
    // console.log(`Hey,Mr.Mallana`);

    let hasStyle = header.classList.contains('red');

    if(hasStyle){
        header.classList.remove('red');
    }
    else
    {
        header.classList.add('blue');
    }

}

// callBack function as referance
// withOut user events it returns on console
// btn.addEventListener('click',changeStyle());

// callBack function as referance
// with user events it returns on console
btn.addEventListener('click',changeStyle);

// Selecting the elements
const head = document.querySelector('h4');

// returns node object
// console.log(head);

const btnn = document.querySelector('.butn');

// returns node object
// console.log(btnn);

// click-fires after full action occurs 
btnn.addEventListener('click',function(){
    console.log(`You clicked me!`);
});

// mousedown-button is pressed
btnn.addEventListener('mousedown',function(){
    console.log(`down!`);
});

// mouseup-button is released
btnn.addEventListener('mouseup',function(){
    console.log(`up!`);
});

// mouseenter-moved onto a element
head.addEventListener('mouseenter',function(){
    head.classList.add('blue');
});

// mouseleave-moved out of an element
// works like hover:

head.addEventListener('mouseleave',function(){
    head.classList.remove('blue');
});

// keyevents:useful in forms
// selecting the elements

const formInput = document.getElementById('text');

// console.log(formInput);
// returns node object

// keypress-when key is pressed,when user enters
formInput.addEventListener('keypress',function(){
    console.log(`You pressed a key`);
});

// keydown - when key is down,when user clicked
formInput.addEventListener('keydown',function(){
    console.log('down');
});

// keyup-when key is released
formInput.addEventListener('keyup',function(){
    // console.log('up');
    console.log(formInput.value);
});

// event Object

// Selecting the elements

const buttonClick = document.querySelector('.press');
console.log(buttonClick);
// returns nodeObject

const heade = document.querySelector('h5');
console.log(heade);
// returns nodeObject

// Ananymous function
heade.addEventListener('click',function(e){
    // heade.classList.add('red')
    console.log(e.currentTarget);

    // console.log(this);

    // returns type of addEventListener
    console.log(e.type);
});

// currentTarget-returns which HTML element we clicked

buttonClick.addEventListener('click',function(event){
    console.log(event.currentTarget);
    event.currentTarget.classList.add('blue');

    // returns type of addEventListener
    console.log(event.type);
});

// Selecting the element
const anchorLink = document.getElementById('link');

console.log(anchorLink);
// returns nodeObject

// preventDefault()

// Ananymous function
function clickFunction(e){
    e.preventDefault();
    console.log(e.type);
}

// callback function as referance
anchorLink.addEventListener('click',clickFunction);

// currentTarget VS target

// Selecting the elements

const buttons = document.querySelectorAll('.btns');

console.log(buttons);
// returns nodeObject

// currentTarget
// Array Iteration Methods
buttons.forEach(function(abc){

    // Ananymous function
    abc.addEventListener('click',function(e){
        console.log('currentTarget',e.currentTarget);
        e.currentTarget.style.textTransform = 'capitalize'
    });

});

// target-identifies the element on which the event occured.
// Array Iteration Methods
buttons.forEach(function(abc){

    // Ananymous function
    abc.addEventListener('click',function(e){
        console.log('target',e.target);
        e.target.style.color = 'blue';
    });

});

// Selecting the elements

const contains = document.querySelector('.container');

console.log(contains);
// returns nodeObject

const listItems = document.querySelector('.list-items');

console.log(listItems);
// returns nodeObject

// Ananymous function
function showBubbling(e){
    console.log('currentTarget',e.currentTarget);
    console.log('target',e.target);

    if(e.target.classList.contains('links')){
        console.log(`You clicked on the links`);
    }
}

// Call back function as referance

contains.addEventListener('click',showBubbling);

listItems.addEventListener('click',showBubbling);

// showBubbling - navigates from child to parent - default

// stopBubbling - stops the propagation

// Selecting the elements
const containEr = document.querySelector('.contain');

console.log(containEr);
// returns nodeObject

const headTwo = document.querySelector('.headerTwo');

console.log(headTwo);
// returns nodeObject

const buttonEvent = document.querySelector('.betn');

console.log(buttonEvent);
// returns nodeObject

// Ananymous function
function sayHello(){
    console.log(`Hello,World!`);
}

// Callback function as refarance
headTwo.addEventListener('click',sayHello);

// Ananymous function
buttonEvent.addEventListener('click',function(){

    // Creating HTML element h2 with class and text content
    const elementCreated = document.createElement('h2');
    elementCreated.classList.add('color');
    elementCreated.textContent = `Hello,John Smilga`;
    containEr.appendChild(elementCreated)

});

// Selecting the elements

const form = document.getElementById('form');

console.log(form);
// returns nodeObject

const formText = document.getElementById('name');

console.log(formText);
// returns nodeObject

const formPassword = document.getElementById('password');

console.log(formPassword);
// returns nodeObject

// After hitting the submit button the data moves to a dataBase.

// Ananymous function
form.addEventListener('submit',function(e){
    e.preventDefault
    console.log(`Form is submitted`);

    // to display form values
    console.log(formText.value);
    console.log(formPassword.value);
});

// log statement appears in a second and disappears

// to prevent this we use,
// e.preventDefault