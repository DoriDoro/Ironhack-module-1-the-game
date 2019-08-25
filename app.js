/* get the elements of the quiz.html file*/
const timerDOM = document.getElementById("secs");
const germanName = document.getElementById('germanName');
const englishName = document.getElementById('englishName');
const containerField = document.getElementById('field-container');
const answer = document.getElementById('answer');
const imgDiv = document.getElementById('img-div');
var currentLevel = 0;
var currentScore = 0;




// difficult questions
const difficultGermanWords = [
  {
    germanName: "die Heizölrückstoßabdämpfung",
    englishName: "the fuel oil recoil damping",
    image: "./images/damping.jpg",
    letters: 24
  },
  {
    germanName: "die Donaudampfschifffahrtskapitänskajüte",
    englishName: "the Danube steamship captain's cabin",
    image: "./images/ship.jpg",
    letters: 36
  },
  {
    germanName: "das Weihnachtsmannschokoladeeinpackpapier",
    englishName: "the Santa Claus chocolate wrapping paper",
    image: "./images/santaClaus.jpg",
    letters: 37
  },
  {
    germanName: "der Restmülltütenverschlusssicherungsdraht",
    englishName: "the residual waste bag closure and safety wire",
    image: "./images/wire.jpg",
    letters: 38
  },
  {
    germanName: "das Telekommunikationsdienstleistungsunternehmen",
    englishName: "the telecommunications service providers",
    image: "./images/telecom.png",
    letters: 44
  },
  {
    germanName: "die Verkehrsinfrastrukturfinanzierungsgesellschaft",
    englishName: "the transport infrastructure finance company",
    image: "./images/traffic.jpg",
    letters: 47
  },
  {
    germanName: "die Aufmerksamkeitsdefizitmedikamentenbeipackzettelschriftfarbe",
    englishName: "the attention deficit medication package leaflet color",
    image: "./images/color.jpg",
    letters: 59
  },
  {
    germanName: "der Mehrwertsteuerharmonierungskompromisslösungskommissionsbeschluß",
    englishName: "the Commission Decision on harmonisation of VAT compromise solutions",
    image: "./images/shocked.jpg",
    letters: 62
  },
  {
    germanName: "das Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz",
    englishName: "the beef labeling monitoring task transfer law",
    image: "./images/law.jpg",
    letters: 63
  },
  {
    germanName: "die Selbstzerstörungsauslösungsschalterhintergrundbeleuchtungsglühlampensicherungshalterschraube",
    englishName: "the self-destruct trip switch backlighting incandescent lamp retaining screw",
    image: "./images/screw.jpg",
    letters: 92
  }
];


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


/* to choose the level */
var questions;
const level =  localStorage.getItem("difficulty");

if (level === "easy" || !level) {
  questions = animals;
} else {
  questions = difficultGermanWords;
}


/* array for the images for the score */
const scoreImg = [
    "./images/wellDone.jpg",
    "./images/congratiolation.jpg",
    "./images/startAgain.png"
]

/* change the layout of the page to enter the German and English name */
function enterNames(question) {
  let emptyDiv = document.getElementById('correctAnswer');
  emptyDiv.innerHTML = ``; 
  emptyDiv.classList.remove('red', 'green');

  germanName.innerText = `${question.germanName}`;
  englishName.innerText = `${question.englishName}`;
  answer.setAttribute(`disabled`, true);
} // is working


/* display only the English name  */
function enterOnlyEnglishNames(question) {
  answer.removeAttribute(`disabled`);
  germanName.innerText = ``;
  englishName.innerText = `${question.englishName}`;
  answer.focus();

  /* check the chosen level of the user */
  if(level === 'easy') {
    startTimer(timerDOM, 15, checkAnswer);
  } 
  if (level === 'hard') {
    // console.log(difficultGermanWords[currentLevel].letters, typeof difficultGermanWords[currentLevel].letters + '---');
      if(difficultGermanWords[currentLevel].letters <= 50 ) {      
      startTimer(timerDOM, 20, checkAnswer);
      } else startTimer(timerDOM, 30, checkAnswer);
  }
} // is working


/* change the images */
function changeImages(question) {
  imgDiv.querySelector("img").src = `${question.image}`;
} // is working


/* check the written entry of the user with the textfield */
function checkAnswer() {
  answer.setAttribute(`disabled`, true);
  let answerOfUser = answer.value.toLowerCase(); // necessary to compare the answer of the user and the germanName in the array
  let correctAnswer = questions[currentLevel].germanName.toLocaleLowerCase();
  let correct = document.getElementById('correctAnswer');
   // console.log(`why`, answerOfUser, correctAnswer);
   
  /* check which level the user seleted */
  if(level === 'easy') {
    if(correctAnswer === answerOfUser) {
      correct.innerHTML = `<div id="correctAnswer">${questions[currentLevel].germanName} - <b> YEAH, that is correct! </b> </div>`;
      currentScore += 1;
      correct.classList.add('green');
    } else {
      correct.innerHTML = `<div id="correctAnswer">${questions[currentLevel].germanName}  - <b> NOPE, sorry folk </b> </div>`;
      correct.classList.add('red');
    } 
  }else {
      if(correctAnswer === answerOfUser) {
        correct.innerHTML = `<div id="correctAnswer">${questions[currentLevel].germanName} - <b> YEAH, that is correct! </b> <br /> 
        this word has ${difficultGermanWords[currentLevel].letters} letters! </div>`;
        currentScore += 1;
        correct.classList.add('green');
      } else {
        correct.innerHTML = `<div id="correctAnswer">${questions[currentLevel].germanName}  - <b> NOPE, sorry folk </b> <br /> 
        this word has ${difficultGermanWords[currentLevel].letters} letters! </div>`;
        correct.classList.add('red');
      }
    }

  currentLevel++;
  startTimer(timerDOM, 5, startRound); 
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
  const deleteDiv = document.getElementById('remClass');
  // deleteBorderDiv.classList.remove('border');
  deleteDiv.remove();

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
  if (!questions) return
  const currentAnimal = questions[currentLevel];
  answer.value = ``;

  /* check the chosen level of the user */
  if(level === 'easy') {
    /* check if the game is already at the end or if there are some animals in the array left */
    if(currentLevel < questions.length) {   
      enterNames(currentAnimal);
      changeImages(currentAnimal);

      startTimer(timerDOM, 10, function() {
        enterOnlyEnglishNames(currentAnimal);
    });
    } else lastPage();
  }

  if(level === 'hard') {
    if(currentLevel < questions.length) {
        enterNames(currentAnimal);
        changeImages(currentAnimal);

        if(difficultGermanWords[currentLevel].letters <= 50) {
          startTimer(timerDOM, 15, function() {
            enterOnlyEnglishNames(currentAnimal);
          });
        }
        else if(difficultGermanWords[currentLevel].letters > 50) {
          startTimer(timerDOM, 25, function() {
            enterOnlyEnglishNames(currentAnimal);
          });
        }
    } else lastPage(); 
  }
}


/* call the function to start the programm */
startRound();
