/* get the elements of the index.html file*/
const timerDOM = document.getElementById("secs");
const germanName = document.getElementById('germanName');
const englishName = document.getElementById('englishName');
const containerField = document.getElementById('field-container');
const imgDiv = document.getElementById('img-div');



let active = true;
let displayNameInTextfield = false;

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

// the bonus is [10]
const bonusAnimal = [
  {
    germanName: "das Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz",
    englishName: "the Beef labeling monitoring task transfer law",
    image: "./images/shocked.jpg"
  }
];

let currentLevel = 0;

/* -- this function got called and will be executed the first time -- */
enterNames(animals[5]);

/* change the layout of the page to enter the German and English name */
function enterNames(animal) {
  germanName.innerText = `${animal.germanName}`;
  englishName.innerText = `${animal.englishName}`;
  startTimer(timerDOM, 4);
} // is working

/* display only the English name  */
function enterOnlyEnglishNames(animal) {
  germanName.innerText = ``;
  englishName.innerText = `${animal.englishName}`;
  startTimer(timerDOM, 4);
} // is working

/* change the images */
function changeImages(animal) {
  imgDiv.querySelector("img").src = `${animal.image}`;
} // is working


/* check the written entry of the user with the textfield */
function checkAnswer() {
  let answerOfUser = document.getElementById('answer').value;
  let correctAnswer = animals[3].germanName;
  
  /* convert answerOfUser to lowercase */
  let userString = answerOfUser;
  userString = userString.toLowerCase();
  answerOfUser = userString;
  console.log(answerOfUser);
  //console.log(answerOfUser, typeof answerOfUser); is a string
  //answerOfUser.toLowerCase(); // is not working

  /* convert correctAnswer to lowercase */
  let correctString = correctAnswer;
  correctString = correctString.toLowerCase();
  correctAnswer = correctString;
  console.log(correctAnswer);

  /* check if the answer and correct answer are the same */
  if(correctAnswer === answerOfUser) {
    console.log('yea you got that!');
  } else console.log('sorry that is not correct');

  // take the germanName of the animals array
  // take the entry of the user in the textarea id='correctAnswer' value='correctAnswer'
  // compare the 'answer' with the 'correctAnswer'
  // change both 'answer' and 'correctAnswer' to lowerCase()
  
}

/* check in the answerOfUser if there are ä, ö, ü or ae, oe, ue */
function checkUmlaut() {
  let answerOfUser = document.getElementById('answer').value;
  let correctAnswer = animals.germanName;
  //document.getElementById('correctAnswer').value;


  //   Schildkröte or schildkroete
// replace string''

// "Schildkröte".replace('ö', 'oe');

}


checkAnswer();

/* display at the end how many correct answers were given of the user  */

/* this function will be called inside of the layout functions */
function startTimer(element, time) {
  const intervalId = setInterval(() => {
    if (time <= 1) {
      clearInterval(intervalId);
      currentLevel++;      
    }
    element.innerHTML = --time;
  }, 1000);
} // if --time -1 otherwise time-- until 0 but it starts one second later
// change the condition from time <= 0 to time <= 1






