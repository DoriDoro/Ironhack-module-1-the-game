
/* get the elements of the introduction.html file */
const startGame = document.getElementById("start-btn");

// do not dispay the German name on the webpage
function changeGermanName() {
  const nextPage = document.querySelector(".animal-name");
  nextPage.innerHTML = `<p>German: <br /></p>
      <p>English: <br />${animals[0].englishName}</p>
      `;
}

// the submit button which was originally implemented
/* <div class="container">
     <button id="btn-sub" type="submit">Submit</button>
    </div> */

// was for the original process of the game
/* the button events */
// a link of the intruction.html file
if (startGame) {
  startGame.addEventListener("click", function() {
    printSeconds();
  });
}

// the button in the index.html file
if (btnNext) {
  btnNext.addEventListener("click", function() {
    //changeGermanName();

    displayGermanName();
  });
}

// was for the original process
/*function to set the timer */
// set timer to 10 sec
function printSeconds() {
  var counter = 10;
  const getSecs = document.querySelector("#secs");

  const intervalId = setInterval(() => {
    secs.innerText = counter;
    if (counter === 0) clearInterval(intervalId);
    counter -= 1;
  }, 1000);
}

// last exersice 30 sec
function printLastSeconds() {
  var counter = 30;
  const getSecs = document.querySelector("#secs");

  const intervalId = setInterval(() => {
    secs.innerText = counter;
    if (counter === 0) clearInterval(intervalId);
    counter -= 1;
  }, 1000);
}

// <textarea id="field" class="field border"></textarea>


function createLayout(animal) {
  const main = document.getElementById("main");

  main.innerHTML = 
  `<div class="container">
    <div class="animal-name border"> <p>German: <br /> <b> ${animal.germanName}</b></p> <p>English: <br/> ${animal.englishName}</p> </div>
    <div class="img-div"> <img src="${animal.image}> </div>
   </div>
   <div class="container">
    <div class="time"> <p id="secs">10</p> </div>
    <div> <p class="list">ä = alt + 123 <br /> ö = alt + 148 <br /> ü = alt + 129 </p> </div>
   </div>
    <div class="container">
     <textarea class="field border" placeholder="Enter your text here..."></textarea>
    </div>`;
  const timerDOM = document.getElementById("secs");
  startTimer(timerDOM, 10);
  active = false;
  displayNameInTextfield === false;
}


function createLayoutExercise(animal) {
  const main = document.getElementById("main");
  main.innerHTML = 
  `<div class="container">
    <div class="animal-name border"> <p>German: </p>  <p>English: <br/>${animal.englishName}</p></div>
    <div class="img-div"> <img src="${animal.image}> </div>
    </div>
   <div class="container">
    <div class="time"> <p id="secs">30</p> </div>
    <div> <p class="list">ä = alt + 123 <br /> ö = alt + 148 <br /> ü = alt + 129 </p> </div>
   </div>
   <div class="container">
     <textarea class="field border" placeholder="Enter your text here..."></textarea>
     <textarea id="field" class="field border"></textarea>
   </div>`;
  const timerDOM = document.getElementById("secs");
  startTimer(timerDOM, 3);
  active = true;
  displayNameInTextfield = true;
}

/* insert the correct German word out of the array to the textfield */
  function displayGermanName() {
    const timerDOM = document.getElementById("secs");
    startTimer(timerDOM, 3);
    const displayName = document.getElementById("field");
    displayName.innerText = `${animals[currentLevel].germanName}`;
    console.log(displayName);
  }

  function startTimer(element, time) {
    const intervalId = setInterval(() => {
      if (time <= 0) {
        clearInterval(intervalId);
        if(active === true) {
          currentLevel++;
          createLayout(animals[currentLevel]);
        } else createLayoutExercise(animals[currentLevel]);
       
      }
      element.innerHTML = --time;
    }, 1000);
  }


  /* enter additional textfield  with name of the animal in German*/
function addTextfield() {
  containerField.innerHTML += `<textarea id="correctAnswer" class="field border" value="correctAnswer" ></textarea>`;
  startTimer(timerDOM, 4);
} // is working 

/* enter the name of the animal in German into the created textfield */
function enterGermanName(animal) {
  const field = document.getElementById('correctAnswer');
  field.innerText = `${animal.germanName}`;
} // is working



