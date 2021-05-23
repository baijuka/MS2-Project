// question are stored in the questions object  
const questions = [
    {
        question: "What is the capital of United Kingdom?",
        option1: "England",
        option2: "London",
        option3: "Manchester",
        option4: "Scotland",
        correctAnswer: "option2"
    },

    {
        question: "What curreny is used in Aland Islands?",
        option1: "Dollar",
        option2: "British Pound",
        option3: "Denar",
        option4: "Euro",
        correctAnswer: "option4"
    },

    {
        question: "What language is widely spoken in Albania?",
        option1: "Albanian",
        option2: "German",
        option3: "Dutch",
        option4: "French",
        correctAnswer: "option1"
    },

    {
        question: "What language is widely spoken in Andorra?",
        option1: "Swedish",
        option2: "Catalan",
        option3: "Norwegian",
        option4: "French",
        correctAnswer: "option2"
    },

    {
        question: "Vienna is the capital of which country?",
        option1: "Switzerland",
        option2: "Italy",
        option3: "Norway",
        option4: "Austria",
        correctAnswer: "option4"
    },

    {
        question: "What is the capital of Belarus?",
        option1: "Minsk",
        option2: "Pristina",
        option3: "Kiev",
        option4: "Bern",
        correctAnswer: "option1"
    },

    {
        question: "_____ is the currency of Belgium?",
        option1: "Swiss Franc",
        option2: "Denar",
        option3: "Euro",
        option4: "Dollar",
        correctAnswer: "option3"
    },

    {
        question: "What language is spoken in Bosnia and Herzegovina?",
        option1: "Norwegian",
        option2: "Swedish",
        option3: "German",
        option4: "Bosnian",
        correctAnswer: "option4"
    },

    {
        question: "Sofia is the capital of _______ ?",
        option1: "Bulgaria",
        option2: "Jersey",
        option3: "Malta",
        option4: "Croatia",
        correctAnswer: "option1"
    },

    {
        question: "Which currency is used in Croatia?",
        option1: "Croatian Pound",
        option2: "Croatian Kuna",
        option3: "Euro",
        option4: "Croatian Ruble",
        correctAnswer: "option2"
    },

    {
        question: "What is language is being spoken in Cyprus?",
        option1: "German",
        option2: "Ductch",
        option3: "Greek",
        option4: "Spanish",
        correctAnswer: "option3"
    },

    {
        question: "Prague is the capital of __________?",
        option1: "Czech Republic",
        option2: "Estonia",
        option3: "Hungary",
        option4: "Latvia",
        correctAnswer: "option1"
    },

    {
        question: "What is the capital of Denmark?",
        option1: "Douglas",
        option2: "Kiev",
        option3: "Bucharest",
        option4: "Copenhagen",
        correctAnswer: "option4"
    },

    {
        question: "What is the international dialing code for Estonia?",
        option1: "372",
        option2: "54",
        option3: "271",
        option4: "974",
        correctAnswer: "option1"
    },

    {
        question: "298 is the international dialing code for which country?",
        option1: "Faroe Islands",
        option2: "Finland",
        option3: "Malta",
        option4: "Isle of Man",
        correctAnswer: "option1"
    },

    {
        question: "What is the capital of Finland?",
        option1: "Warsaw",
        option2: "Helsinki",
        option3: "Bucharest",
        option4: "Lisbon",
        correctAnswer: "option2"
    },

    {
        question: "____ is the capital of France?",
        option1: "Lyon",
        option2: "Paris",
        option3: "Touulouse",
        option4: "Berlin",
        correctAnswer: "option2"
    },

    {
        question: "What is the international dialing code for Germany?",
        option1: "52",
        option2: "11",
        option3: "44",
        option4: "49",
        correctAnswer: "option4"
    },

    {
        question: "What language is spoken in Gibraltar?",
        option1: "English",
        option2: "Spanish",
        option3: "German",
        option4: "Greek",
        correctAnswer: "option1"
    },

    {
        question: "What currency is used in Greece?",
        option1: "Greek Dinar",
        option2: "Greek Krone",
        option3: "Euro",
        option4: "Swiss Franc",
        correctAnswer: "option3"
    },

    {
        question: "Whatcurrency is being used in Guernsey?",
        option1: "Euro",
        option2: "British Pound",
        option3: "Swiss France",
        option4: "Danish Krone",
        correctAnswer: "option2"
    },

    {
        question: "_________ is the language of Holy See?",
        option1: "Greek",
        option2: "Latin",
        option3: "French",
        option4: "English",
        correctAnswer: "option2"
    },

    {
        question: "What language is spoken in Hungary?",
        option1: "Swedish",
        option2: "Dutch",
        option3: "French",
        option4: "Hungarian",
        correctAnswer: "option4"
    },

    {
        question: "What is the capital of Iceland?",
        option1: "Reykjavik",
        option2: "Ljubljana",
        option3: "Chisinau",
        option4: "Budapest",
        correctAnswer: "option1"
    },

    {
        question: "What is the international calling code for Ireland?",
        option1: "353",
        option2: "253",
        option3: "313",
        option4: "364",
        correctAnswer: "option1"
    },

    {
        question: "What is the approximate population of Isle of Man?",
        option1: "84497",
        option2: "847215",
        option3: "45871",
        option4: "258741",
        correctAnswer: "option1"
    },

    {
        question: "What currency is used in Italy?",
        option1: "Italian Lira",
        option2: "Euro",
        option3: "Italian Krona",
        option4: "Swiss Franc",
        correctAnswer: "option2"
    },

    {
        question: "What language is spoken in Jersey?",
        option1: "German",
        option2: "English",
        option3: "Greek",
        option4: "Spanish",
        correctAnswer: "option2"
    },

    {
        question: "What is the capital of Latvia?",
        option1: "Reykjavik",
        option2: "Monaco",
        option3: "Kiev",
        option4: "Riga",
        correctAnswer: "option4"
    },

    {
        question: "What language is spoken in Liechtenstein",
        option1: "German",
        option2: "Greek",
        option3: "French",
        option4: "Latin",
        correctAnswer: "option1"
    },

    {
        question: "What is the international calling code for Lithuania?",
        option1: "77",
        option2: "345",
        option3: "148",
        option4: "370",
        correctAnswer: "option4"
    },

    {
        question: "________ is the capital of Luxembourg?",
        option1: "Luxembourg",
        option2: "Jersey",
        option3: "Denmark",
        option4: "Sweden",
        correctAnswer: "option1"
    },

    {
        question: "What langugae is spoken in Macedonia?",
        option1: "Macedonian",
        option2: "English",
        option3: "Greek",
        option4: "Latin",
        correctAnswer: "option1"
    },

    {
        question: "What is the approximate population of Malta?",
        option1: "425384",
        option2: "25501",
        option3: "313454",
        option4: "58157",
        correctAnswer: "option1"
    },

    {
        question: "What language is spoken in Moldova?",
        option1: "Russian",
        option2: "Romanian",
        option3: "Bulgarian",
        option4: "Spanish",
        correctAnswer: "option2"
    },

    {
        question: "What language is spoken in Monaco?",
        option1: "French",
        option2: "Romanian",
        option3: "Greek",
        option4: "Latin",
        correctAnswer: "option1"
    },

    {
        question: "What is the international dialing code for Montenegro?",
        option1: "374",
        option2: "157",
        option3: "382",
        option4: "274",
        correctAnswer: "option3"
    },

    {
        question: "What is the capital of Netherlands?",
        option1: "Rotterdam",
        option2: "Tilburg",
        option3: "Vienna",
        option4: "Amsterdam",
        correctAnswer: "option4"
    },

    {
        question: "What language is the capital of Norway?",
        option1: "Halden",
        option2: "Haugesund",
        option3: "Oslo",
        option4: "Brussels",
        correctAnswer: "option3"
    },

    {
        question: "What currency is used in Poland?",
        option1: "Polish Zloty",
        option2: "Polish Mark",
        option3: "Euro",
        option4: "Ruble",
        correctAnswer: "option1"
    },

    {
        question: "What is the international calling code for Portuagal?",
        option1: "417",
        option2: "351",
        option3: "96",
        option4: "387",
        correctAnswer: "option2"
    },

    {
        question: "What language is spoken in Republic of Kosovo?",
        option1: "Albanian",
        option2: "Romanian",
        option3: "Bulgarian",
        option4: "Russian",
        correctAnswer: "option1"
    },

    {
        question: "What is the capital of Romania?",
        option1: "Brasov",
        option2: "Oradea",
        option3: "Helsinki",
        option4: "Bucharest",
        correctAnswer: "option4"
    },

    {
        question: "_______ is the capital of Russia?",
        option1: "Saint Petersburg",
        option2: "Moscow",
        option3: "Gerogia",
        option4: "Kiev",
        correctAnswer: "option2"
    },

    {
        question: "What is the appoximate population of San Marino?",
        option1: "33005",
        option2: "15055",
        option3: "5827",
        option4: "43250",
        correctAnswer: "option1"
    },

    {
        question: "What language is spoken in Serbia?",
        option1: "Russian",
        option2: "Serbian",
        option3: "Latvian",
        option4: "Latin",
        correctAnswer: "option2"
    },

    {
        question: "What is the international calling code for Slovakia?",
        option1: "421",
        option2: "451",
        option3: "248",
        option4: "432",
        correctAnswer: "option1"
    },

    {
        question: "Waht is the capital of Slovenia?",
        option1: "Maribor",
        option2: "Celje",
        option3: "Ljubljana",
        option4: "Koper",
        correctAnswer: "option3"
    },

    {
        question: "Madrid is the capital of ________?",
        option1: "Greece",
        option2: "Spain",
        option3: "Austria",
        option4: "Finland",
        correctAnswer: "option2"
    },

    {
        question: "What language is spoken in Svalbard and Jan Mayen?",
        option1: "Norwegian",
        option2: "Swedish",
        option3: "Dutch",
        option4: "Greek",
        correctAnswer: "option1"
    },

    {
        question: "__________ is the capital of Sweden?",
        option1: "Brussels",
        option2: "Stockholm",
        option3: "Gothenburg",
        option4: "Kronoberg",
        correctAnswer: "option2"
    },

    {
        question: "What is the international calling code for Switzerland?",
        option1: "41",
        option2: "174",
        option3: "81",
        option4: "43",
        correctAnswer: "option1"
    },

    {
        question: "What language is spoken in Ukraine?",
        option1: "Russian",
        option2: "Croatian",
        option3: "Ukranian",
        option4: "Latin",
        correctAnswer: "option3"
    }
];

// Event handling

let btnStart1 = document.getElementById("btnStart1");
btnStart1.addEventListener("click", hello);

function hello() {
    alert('Hello');
}


// select ten questions randomly

//window.onload = function() {
//  startGame();
//};

let questionCount, gameQuestions, correctAnswer;
let score = 0;
let askedAll = false;

function startGame() {
    
    questionCount = 0;
    gameQuestions = pickQuestions();
 // var questionSet = rndQuestions(gameQuestions);
  askQuestion(gameQuestions);
}

let randomQuestions = [] ;

function pickQuestions() { 
    for (i=0; i<=9; i++) {
        const selection = questions[Math.floor(Math.random() * questions.length)];
        if (!randomQuestions.includes(selection)) {
            randomQuestions.push(selection);
        }
    }
  return randomQuestions;
}



function rndQuestions(questArray) {
  for ( x of questArray){
   //  document.write(x.question+'<br>'+'Options: '+x.option1+'  '+x.option2+'  '+x.option3+'  '+x.option4+'<br><br>');
}
}

// Ask the first question from the random questions array

function askQuestion(qlist) {
    let i = questionCount;
    correctAnswer ='';
    document.getElementById('question').textContent = qlist[i].question;
    document.getElementById('option1').textContent = qlist[i].option1;
    document.getElementById('option2').textContent = qlist[i].option2;
    document.getElementById('option3').textContent = qlist[i].option3;
    document.getElementById('option4').textContent = qlist[i].option4;
    correctAnswer = qlist[i].correctAnswer;
    questionCount++;
    checkQuestionCount(questionCount);
}

function checkQuestionCount(count) {
  if (count === 10) {
      document.getElementById('btnNext').style.display ="none";
      askedAll = true;
      if (askedAll) {
          quizComplete();
      } else {
        document.getElementById('btnNext').style.display ="block";
      }
  } 
}

function nextQuestion() {
    askQuestion(gameQuestions);
}

function button(userAnswer) {
   checkAnswer(userAnswer);   
}

function checkAnswer(userAnswer){
    if (userAnswer == correctAnswer) {
        score++;
        alert(score);
        document.getElementById('scoreLevel').textContent = score + ' / ' + '10';
    }
}


// Check the answer

//let userAnswer = prompt('Language of Gibralter');  // need to change with correct code
//if (userAnswer.toLowerCase() === randomQuestions[0].correctAnswer.toLowerCase()) {
//    console.log("You are right");} else {
 //       console.log("You are wrong");}


/*   ---------------- Sample quiz script  ------------------

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

------------------ sample end --------- */