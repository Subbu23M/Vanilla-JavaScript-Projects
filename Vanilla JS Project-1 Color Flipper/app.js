// Declared & Assigned
const colors = ['green', 'red', 'rgba(133,122,200)', '#F15025'];

// Selecting the Elements

// Declared & Assigned
const span = document.querySelector('.span-color')

const btn = document.getElementById('btn');

const bodyElement = document.querySelector('body');

// Event Listeners

// Ananymous function
const result = function () {
    const colorsValue = colors[Math.floor(Math.random() * colors.length)];

    bodyElement.style.backgroundColor = colorsValue;
    span.textContent = colorsValue;
}

btn.addEventListener('click', result);