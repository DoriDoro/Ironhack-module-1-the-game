/* get the elements of the quiz.html file*/
const timerDOM = document.getElementById("secs");
const germanName = document.getElementById('germanName');
const englishName = document.getElementById('englishName');
const containerField = document.getElementById('field-container');
const answer = document.getElementById('answer');
const imgDiv = document.getElementById('img-div');
var currentLevel = 0;

/* array with German and English names of the animal and the pics */
const animals = [
  {
    germanName: "der Fuchs",
    englishName: "the fox",
    image: "./images/fox.jpg"
  },

  {
    germanName: "das Nashorn",
    englishName: "the rhinoceros",
    image: "./images/rhinoceros.jpg"
  },

  {
    germanName: "die Eidechse",
    englishName: "the lizard",
    image: "./images/lizard.jpg"
  },

  {
    germanName: "der Schmetterling",
    englishName: "the butterfly",
    image: "./images/butterfly.jpg"
  },

  {
    germanName: "das Meerschweinchen",
    englishName: "the guenia pig",
    image: "./images/gueniapig.jpg"
  },

  {
    germanName: "der Waschbär",
    englishName: "the raccon",
    image: "./images/raccon.jpg"
  },

  {
    germanName: "das Kängoru",
    englishName: "the kangaroo",
    image: "./images/kangaroo.jpg"
  },

  {
    germanName: "der Schneeleopard",
    englishName: "the snow leopard",
    image: "./images/snowleopard.jpg"
  },

  {
    germanName: "das Eichhörnchen",
    englishName: "the squirrel",
    image: "./images/squirrel.jpg"
  },

  {
    germanName: "die Schildkröte",
    englishName: "the turtle",
    image: "./images/turtle.jpg"
  }
];


/* change the layout of the page to enter the German and English name */
function enterNames(animal) {
  let emptyDiv = document.getElementById('correctAnswer');
  emptyDiv.innerHTML = ``; 
  emptyDiv.classList.remove('red', 'green');

  germanName.innerText = `${animal.germanName}`;
  englishName.innerText = `${animal.englishName}`;
  answer.setAttribute(`disabled`, true);
} // is 


/* display only the English name  */
function enterOnlyEnglishNames(animal) {
  answer.removeAttribute(`disabled`);
  germanName.innerText = ``;
  englishName.innerText = `${animal.englishName}`;
  answer.focus();
  startTimer(timerDOM, 10, checkAnswer);
} // is working


/* change the images */
function changeImages(animal) {
  imgDiv.querySelector("img").src = `${animal.image}`;
} // is working


/* check the written entry of the user with the textfield */
function checkAnswer() {
  answer.setAttribute(`disabled`, true);
  let answerOfUser = answer.value.toLowerCase(); // necessary to compare the answer of the user and the germanName in the array
  let correctAnswer = animals[currentLevel].germanName.toLocaleLowerCase();
  let correct = document.getElementById('correctAnswer');
   // console.log(`why`, answerOfUser, correctAnswer);
   
  /* check if the answer and correct answer are the same */
    if(correctAnswer === answerOfUser) {
      correct.innerHTML = `<div id="correctAnswer">${animals[currentLevel].germanName} - YEAH, that is correct!</div>`;
      //addText = document.getElementById('correctAnswer');
      correct.classList.add('green');
    } else {
    correct.innerHTML = `<div id="correctAnswer">${answerOfUser}  - NOPE, sorry folk</div>`;
    correct.classList.add('red');
  }
  currentLevel++;
  startTimer(timerDOM, 5, startRound);
}

/* display at the end how many correct answers were given of the user  */


function startTimer(element, time, clbk) {
  const intervalId = setInterval(() => {
    if (time === 1) {
      clearInterval(intervalId);
      clbk();
    }
    element.innerHTML = --time;
  }, 1000);
} // if --time -1 otherwise time-- until 0 but it starts one second later
// change the condition from time <= 0 to time <= 1


/* this is the first called function */
function startRound() {
  const currentAnimal = animals[currentLevel];
  answer.value = ``;
  enterNames(currentAnimal);
  changeImages(currentAnimal);

  startTimer(timerDOM, 10, function() {
    // console.log(`so far so good`)
    enterOnlyEnglishNames(currentAnimal);
  });
}

/* call the function to start the programm */
startRound();


