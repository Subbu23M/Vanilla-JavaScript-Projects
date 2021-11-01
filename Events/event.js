// currentTarget
const btns = document.querySelectorAll('.btn');
// console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // console.log(e.type);
        // console.log(e.currentTarget);
        // e.currentTarget.style.backgroundColor = 'green';
        console.log('target',e.target);
        e.target.style.color = 'red';
    });
});

// target-when we click changes affects only on nested elements

const container = document.querySelector('.container');
const heading = document.querySelector('.head');
const button = document.querySelector('.button');

heading.addEventListener('click',function(){
    heading.style.color = 'blue';
});

// Select the formElements Dynamically

const form = document.getElementById('form');

const text = document.getElementById('text');

const password = document.getElementById('password');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('Hello');
    console.log(text.value);
    console.log(password.value);
});

localStorage.setItem('name','john');
localStorage.setItem('fruit','peter');

localStorage.setItem('firstName','subbu');

const name =localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');

localStorage.clear();
// Even though we removed the key and its value we can able to see in console because of localStorage.

// sessionStorage.setItem('name','john');

const familyMem = ['awesome','array','multy'];
console.log(familyMem);

// localStorage.setItem('friends',familyMem);

localStorage.setItem('family',JSON.stringify(familyMem));

const values = JSON.parse(localStorage.getItem('family'));
console.log(values[2]);
