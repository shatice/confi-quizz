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
const questionItem = document.querySelector('#question');
const answersItems = document.querySelectorAll('#answersList li');

/**
 * Gets questions content
 */

function getNewQuestion(a) {
  for (let i=0; i < json.questions[a].answers.length; i++) {
    questionItem.innerHTML = json.questions[a].question;  
    answersItems[i].innerHTML = json.questions[a].answers[i].answer;
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

for (let j = 0; j < answersItems.length; j++) {
  answersItems[j].addEventListener('click', function() {
    count++;
    if (count > json.questions.length -1) {
      return;    
    } else {
      shuffle(json.questions[count].answers)
      getNewQuestion(count);
    }
  });
}

