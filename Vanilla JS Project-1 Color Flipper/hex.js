// Declared & Assigned
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Selecting the Elements

const span = document.querySelector('.span-color');
const btn = document.getElementById('btn');
const bodyElement = document.querySelector('body');

// Ananymous function
function hexCol() {
    // Declared & Assigned
    let hexSymbol = "#";

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * hexValues.length);

        // reassigned
        hexSymbol = hexSymbol + hexValues[randomNumber];
        console.log(hexSymbol);
    }
    bodyElement.style.backgroundColor = hexSymbol;

    span.textContent = hexSymbol;
}

btn.addEventListener("click", hexCol);