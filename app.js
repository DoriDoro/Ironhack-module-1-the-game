

/* get the elements of the quiz.html file*/
const timerDOM = document.getElementById("secs");
const germanName = document.getElementById('germanName');
const englishName = document.getElementById('englishName');
const containerField = document.getElementById('field-container');
const answer = document.getElementById('answer');
const imgDiv = document.getElementById('img-div');
var currentLevel = 0;
var currentScore = 0;


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

/* array for the images for the score */
const scoreImg = [
    "./images/wellDone.jpg",
    "./images/congratiolation.jpg",
    "./images/startAgain.png"
]

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
  startTimer(timerDOM, 16, checkAnswer);
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
      currentScore += 1;
      correct.classList.add('green');
    } else {
      correct.innerHTML = `<div id="correctAnswer">${animals[currentLevel].germanName}  - NOPE, sorry folk</div>`;
      correct.classList.add('red');
  }
  currentLevel++;
  startTimer(timerDOM, 6, startRound); 
}


/* display at the end how many correct answers were given of the user  */
function lastPage() {
  /* --- variables for the last page --- */
  const germanContent = document.querySelector('#german');
  const deleteEnglishContent = document.querySelector('#english');

  /* delete the content of the German and the English p's of the website */
  germanContent.innerText = '';
  deleteEnglishContent.innerText = '';

  /* remove the border class of the english div */
  const deleteBorder = document.getElementById('remClass');
  deleteBorder.classList.remove('border');

  /* enter the score to the german paragraph */
  germanContent.innerText = `You gain ${currentScore} points in this game `;

  /* display the according image to the score */
  const imgScore = document.getElementById('img-div');
  if(currentScore <= 3 ) {
    imgScore.querySelector("img").src = `${scoreImg[2]}`;
  } else if (currentScore >= 4 && currentScore <= 7) {
    imgScore.querySelector("img").src = `${scoreImg[1]}`;
  } else imgScore.querySelector("img").src = `${scoreImg[0]}`;

  /* delete the latest result out of the div */
  let deleteCorrect = document.getElementById('correctAnswer');
  deleteCorrect.innerHTML = '';

}


function startTimer(element, time, clbk) {
  element.innerHTML = time;
  const intervalId = setInterval(() => {
    if (time === 0) {
      clearInterval(intervalId);
      clbk();
      return;
    }
    element.innerHTML = --time;
  }, 1000);
} 



/* this is the first called function */
function startRound() {
  const currentAnimal = animals[currentLevel];
  answer.value = ``;

  /* check if the game is already at the end or if there are some animals in the array left */
  if(currentLevel < animals.length) {
    console.log(currentLevel, animals.length);
    
    enterNames(currentAnimal);
    changeImages(currentAnimal);

    startTimer(timerDOM, 10, function() {
    // console.log(`so far so good`)
    enterOnlyEnglishNames(currentAnimal);
  });
} else lastPage();
  
}

/* call the function to start the programm */
  startRound();


