/* get the elements of the index.html file*/
const btnNext = document.getElementById("btn-sub");
const secs = document.getElementById("secs");

/* get the elements of the introduction.html file */
const startGame = document.getElementById("start-btn");

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
  },

  {
    germanName:
      "das Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz",
    englishName: "the Beef labeling monitoring task transfer law",
    image: "./images/shocked.jpg"
  }
];
// the bonus is [10]

let currentLevel = 0;

/* insert the correct German word out of the array to the textfield */
function displayGermanName() {
  const displayName = document.getElementById("field");
  displayName.innerText = `${animals[currentLevel].germanName}`;
}

createLayout(animals[currentLevel]);

function createLayout(animal) {
  const main = document.getElementById("main");

  main.innerHTML = `<div class="container">
    <div class="animal-name border">
     <p>German: <br />
     <b>${animal.germanName}</b></p>
     <p>English: <br/>
        ${animal.englishName}</p>
    </div>
    <div class="img-div">
    </div>
   </div>
   <div class="container">
    <div class="time">
     <p id="secs">10</p>
    </div>
    <div>
     <p class="list">ä = alt + 123 <br />
                    ö = alt + 148 <br />
                    ü = alt + 129 </p>
    </div>
   </div>
    <div class="container">
     <textarea class="field border" placeholder="Enter your text here..."></textarea>
     <textarea id="field" class="field border"></textarea>
    </div>
    `;
  const timerDOM = document.getElementById("secs");
  startTimer(timerDOM, 10);
}

function createLayoutExercise(animal) {
  const main = document.getElementById("main");
  main.innerHTML = `<div class="container">
        <div class="animal-name border">
        <p>German: </p>
        <p>English: <br/>
            ${animal.englishName}</p>
        </div>
        <div class="img-div">
        </div>
    </div>
    <div class="container">
        <div class="time">
        <p id="secs">30</p>
        </div>
        <div>
        <p class="list">ä = alt + 123 <br />
                        ö = alt + 148 <br />
                        ü = alt + 129 </p>
        </div>
    </div>
        <div class="container">
        <textarea class="field border" placeholder="Enter your text here..."></textarea>
        <textarea id="field" class="field border"></textarea>
        </div>
        `;
  const timerDOM = document.getElementById("secs");
  startTimer(timerDOM, 30);
}

/* first action on the page: start the timer when clicked on the Let's start link on the introduction.html file */
//
function startTimer(element, time) {
  const intervalId = setInterval(() => {
    if (time <= 0) {
      clearInterval(intervalId);
      currentLevel++;
      createLayout(animals[currentLevel]);
    }
    element.innerHTML = --time;
  }, 1000);
}
