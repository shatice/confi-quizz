console.log("the fish knows");
const json = require('./datas/questions.json');

/**
 * Shuffles array els order
 */

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

/**
 * Gets questions content
 */

const questionTitle = document.querySelector('#questionContainer h1');
const answersList = document.querySelectorAll('#answersList li');

function getNewQuestion(a) {
  for (let i=0; i < json.questions[a].answers.length; i++) {
    questionTitle.innerHTML = json.questions[a].question;  
    answersList[i].innerHTML = json.questions[a].answers[i].answer;
    answersList[i].dataset.value = json.questions[a].answers[i].type; 
  }
}

/**
 * Set answer validation
 */

 function getAnswerValidation(target) {
   if(target.dataset.value === true) {
     console.log('Bonne réponse !')
   } else {
     console.log('Mauvaise réponse :(')
   }
 }

/**
 * Shuffles answers order
 */

shuffle(json.questions[0].answers)

/**
 * Sets questions content
 */

getNewQuestion(0);

/**
 * Switch questions content on click
 */

let count = 0; 

for (let index = 0; index < answersList.length; index++) {
  answersList[index].addEventListener('click', function() {
    count++;

    if (count <= json.questions.length -1) {
      shuffle(json.questions[count].answers)
      getNewQuestion(count);
      getAnswerValidation(event.target)
    } 
    
    else {
      return;    
    }
  });
}

