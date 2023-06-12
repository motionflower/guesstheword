const secretWordConst = `secretword`;
let myForm = document.querySelector(`.myForm`);
let questionMarks = document.querySelector(`.displayWord`);
let numberOfQuestionMarks = ``;
let guessingProgress = secretWordConst;

// displays number of question marks based on secretWord
if (secretWordConst) {
  for (let i = 0; i < secretWordConst.length; i++) {
    numberOfQuestionMarks += '?';
  }
  questionMarks.innerHTML = numberOfQuestionMarks;
}


if (myForm) {
  myForm.addEventListener(`submit`, myFormSubmitEvent => {
    myFormSubmitEvent.preventDefault();

    let myInput = document.querySelector(`#myInput`).value;
    let guessedLetter = guessingProgress.indexOf(myInput);

    // creates new string with question marks instead of letters
    let revertStringArray = guessingProgress.split('');
    revertStringArray[guessedLetter] = `?`;
    let revertedReplacedString = revertStringArray.join('');
    guessingProgress = revertedReplacedString;
    

    if (guessedLetter >= 0) {
      // creates new string with right letter instead of question mark
      // splits question mark string into array
      let stringArray = numberOfQuestionMarks.split('');
      // array takes letter position and replaces it with the input letter
      stringArray[guessedLetter] = myInput;
      // makes the array a string again
      let replacedString = stringArray.join('');
      numberOfQuestionMarks = replacedString;
      questionMarks.innerHTML = replacedString;
      
      document.querySelector(`#myInput`).value = "";

      if (replacedString == secretWordConst) {
        alert(`you won!`);
      }
    }
    else
     console.log(`you didn't guess`);
     document.querySelector(`#myInput`).value = "";
  }) 
}


// intro
const splash = document.querySelector(`.splash`);

document.addEventListener('DOMContentLoaded', (e)=> {
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 1600);
})