// Here we should remember,

// 1).minus-icon & .answer-title to be hidden.
// 2)When Question Displays - We should Hide Minus Icon.
// 3)When Answer Displays - We should Hide Plus Icon.

// Selecting the elements

// const btns = document.querySelectorAll('.question-button');

// console.log(btns);
// returns nodeValue

// parentElement - moves from question-button to question-title to question

// Array Iteration Method
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);

//         const question = e.currentTarget.parentElement.parentElement;
//         console.log(question);

//         question.classList.toggle('show-answer');
//     });
// });

const articleList = document.querySelectorAll('.question');

console.log(articleList);
// returns nodeValue

// Array Iteration Method
articleList.forEach(function(art){
    // console.log(art);

    const btn= art.querySelector('.question-button');
    // console.log(btn);

    btn.addEventListener('click',function(){
        articleList.forEach(function(item){
            // console.log(item);

            if(item !== art){
                item.classList.remove('show-answer');
            }
            
        });

        art.classList.toggle('show-answer');
    });
});