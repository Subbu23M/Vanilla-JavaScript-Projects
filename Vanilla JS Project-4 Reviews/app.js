// Array of Objects
const reviewsCarousel = [
  {
    id: 1,
    name: "avva adams",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    id: 2,
    name: "arielle ferera",
    job: "digital marketer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },

  {
    id: 3,
    name: "kieren lee",
    job: "government employee",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },

  {
    id: 4,
    name: "jordi",
    job: "businessman",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },

];

console.log(reviewsCarousel);
// returns nodeValue

// Selecting the elements
const image = document.getElementById('person-image');

console.log(image);
// returns nodeValue

const studentName = document.getElementById('name');

console.log(studentName);
// returns nodeValue

const jobType = document.getElementById('job-role');

console.log(jobType);
// returns nodeValue

const studentInfo = document.getElementById('info');

console.log(studentInfo);
// returns nodeValue

const previousButton = document.querySelector('.previous-button');

console.log(previousButton);
// returns nodeValue

const nextButton = document.querySelector('.next-button');

console.log(nextButton);
// returns nodeValue

const randomButton = document.querySelector('.random-button');

console.log(randomButton);
// returns nodeValue

// initial value
// Global variable
let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){

  // CallBack function as referance
  showDetails();
});

// Ananymous function
function showDetails(){
  const item = reviewsCarousel[currentItem];

  image.src = item.image;
  studentName.textContent = item.name;
  jobType.textContent = item.job;
  studentInfo.textContent = item.text;
}

// nextPerson
nextButton.addEventListener('click',function(){
  currentItem++;

  if(currentItem > reviewsCarousel.length - 1){
    currentItem = 0;
  }

  // CallBack function as referance
  showDetails();
});

// prevPerson
previousButton.addEventListener('click',function(){
  currentItem--;

  if(currentItem < 0){
    currentItem = reviewsCarousel.length - 1;
  }

  // CallBack function as referance
  showDetails();
});

// randomPerson
randomButton.addEventListener('click',function(){
  currentItem = Math.floor(Math.random() * reviewsCarousel.length);
  console.log(currentItem);

  // CallBack function as referance
  showDetails();
});