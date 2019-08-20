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
