// Selecting the elements

const modalButton = document.querySelector('.btn-modal');

console.log(modalButton);
// returns nodeValue

const modalOverlay = document.querySelector('.modal-overlay');

console.log(modalOverlay);
// returns nodeValue

const closeButton = document.querySelector('.close-button');

console.log(closeButton);
// returns nodeValue

// Add addEventListener to the two buttons
modalButton.addEventListener('click',function(){
    modalOverlay.classList.add('display-overlay');
});

closeButton.addEventListener('click',function(){
    modalOverlay.classList.remove('display-overlay');
});