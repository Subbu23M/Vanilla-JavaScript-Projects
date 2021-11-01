let count = 0;

// Selecting the elements
const spanElement = document.getElementById('span-number')

const btns = document.querySelectorAll('.btn')
// End of selecting elements

// Array Iteration Method
// Ananymous function
btns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        // console.log(event.currentTarget.classList);
        const styles = event.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            spanElement.style.color = 'teal'
        }
        if (count < 0) {
            spanElement.style.color = 'blue'
        }
        if (count == 0) {
            spanElement.style.color = 'red'
        }
        spanElement.textContent = count;
    });
});