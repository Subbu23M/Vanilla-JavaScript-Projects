// First Select HTML element.

// Declared & Assigned
// const para1 = document.getElementById("para");

/*
    1)addEventListener - Higher Order function
    2)Second Argument (Ananymous function) is Call Back function
*/

// para1.addEventListener("click", function () {
//     para1.innerHTML = "you clicked me!";
// });

// First Select HTML elements

// Declared & Assigned
const countNum = document.getElementById('count');

// Declared & Assigned
const decreaseBtn1 = document.getElementById('decreaseBtn');

// Declared & Assigned
const resetBtn1 = document.getElementById('resetBtn');

// Declared & Assigned
const increaseBtn1 = document.getElementById('increaseBtn');

// We should use event handlers to update number

/*
    Here,
    1)addEventListener - Higher Order Function
    2)Ananymous function - Call back function
*/

// 1) Increase the number
increaseBtn1.addEventListener('click', function () {

    // console.log(countNum.innerHTML + 1);

    // Here we should convert String to Number - Type Conversions
    countNum.innerHTML = Number(countNum.innerHTML) + 1;
    countNum.style.color = 'red'
});

// 2)Reset the number
resetBtn1.addEventListener('click', function () {
    countNum.innerHTML = 0;
    countNum.style.color = 'green';
});

// 3)Decrease the Number
decreaseBtn1.addEventListener("click", function () {
    // console.log(countNum.innerHTML - 1);

    // Here we should convert String to Number - Type Conversions
    countNum.innerHTML = Number(countNum.innerHTML) - 1;
    countNum.style.color = "blue";
});