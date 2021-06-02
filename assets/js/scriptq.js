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
        question: "What currency is being used in Guernsey?",
        option1: "Euro",
        option2: "British Pound",
        option3: "Swiss Franc",
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
        question: "What is the capital of Norway?",
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

var questionCount, correctAnswer, userAnswer;
var  gameQuestions = [];
var score = 0;
var qlength = 0;
var askedAll = false;

// Event handling

let btnStart1 = document.getElementById("btnStart1");
btnStart1.addEventListener("click", createQuizroom);


function createQuizroom() {
    //remove the gameintro block
    document.querySelector('div.gameIntro').remove();

    // create a new div element to use quiz container
    var quizWrap = document.createElement('div');

    // add class and id
    quizWrap.className = 'quizContainer';
    quizWrap.id = 'quizContainer';
    
    // create a div for question
    var newDiv1 = document.createElement('div');
    newDiv1.className = 'question';
    
    // create a h4 element for display question
    var newh4q = document.createElement('h4');
    newh4q.textContent = "Sample Question"
    newh4q.id="question"
    
    // add newh4q to newDiv1
    newDiv1.appendChild(newh4q);

    //add newDiv1 to quizWrap

    quizWrap.appendChild(newDiv1);

     // create a div for options
     var newDiv2 = document.createElement('div');
     
          
     // create a <ul> element for display question
     var newulOpt = document.createElement('ul');
     newulOpt.className = 'ulOption';

     // list items for ul

     var newli1 = document.createElement('li');
     newli1.className= 'option';
     newli1.id = 'option1';
     newli1.classList.add('option1');
     newli1.setAttribute('onclick', "checkAnswer('option1')");

     var newli2 = document.createElement('li');
     newli2.className= 'option';
     newli2.id = 'option2';
     newli2.classList.add('option2');
     newli2.setAttribute('onclick', "checkAnswer('option2')");

     var newli3 = document.createElement('li');
     newli3.className= 'option';
     newli3.id = 'option3';
     newli3.classList.add('option3');
     newli3.setAttribute('onclick', "checkAnswer('option3')");

     var newli4 = document.createElement('li');
     newli4.className= 'option';
     newli4.id = 'option4';
     newli4.classList.add('option4');
     newli4.setAttribute('onclick', "checkAnswer('option4')");

    // add list items to ul

     newulOpt.appendChild(newli1);
     newulOpt.appendChild(newli2);
     newulOpt.appendChild(newli3);
     newulOpt.appendChild(newli4);

    // add ul to newDiv2
    newDiv2.appendChild(newulOpt);

     
    // create a div for question
    var newDiv3 = document.createElement('div');
    newDiv3.className = 'scorePanel';
    newDiv3.id ="scorePanel";

    //create a <p> element for score panel
    var p4score = document.createElement('p');
    p4score.innerHTML="<span id='qpanel'>QUESTION: <span id='qcount'>0/0</span></span> <span id='spanel'>SCORE: <span id='score'>0/0</span></span>";

    //add pr4score to newDiv3
    newDiv3.appendChild(p4score);

    // create a div for Next button
    var newDiv4 = document.createElement('div');
    newDiv4.className = 'next';
    newDiv4.id ="next";

    //create a button element for newDiv4
    var newButton = document.createElement('button');
    newButton.textContent = 'NEXT';
    newButton.id = 'btnNext';
    newButton.classList.add('btnNext');
   // newButton.style.visibility = 'hidden';
    newButton.setAttribute('onclick', "nextQuestion()");

    //add button to newDiv4
    newDiv4.appendChild(newButton);
    
    //create a div for result display (CORRECT OR WRONG)
    var newDiv5 = document.createElement('div');
    newDiv5.classList.add('result');
    
    //create an h3 element for display the result
    var hresult = document.createElement('h3');
    hresult.id = 'hresult';
    hresult.innerHTML = "<span id='sresult'></span>";

    //add hresult to newDiv5
    newDiv5.appendChild(hresult);

    //add newDiv1, newDiv2, newDiv3, newDiv4, newDiv5 to quizWrap
 
     quizWrap.appendChild(newDiv1);
     quizWrap.appendChild(newDiv2);
     quizWrap.appendChild(newDiv3);
     quizWrap.appendChild(newDiv5);
     quizWrap.appendChild(newDiv4);
 
    // add newly created to the play ground
    var container = document.querySelector('div.playGround');
    container.appendChild(quizWrap);


      // invoke startGame function
    startGame();
    }

function startGame() {
    askedAll = false;
    questionCount = 0;
    score = 0;
    document.getElementById('btnNext').style.visibility ="hidden";
    document.getElementById('option1').style.pointerEvents = "auto";
    document.getElementById('option2').style.pointerEvents = "auto";
    document.getElementById('option3').style.pointerEvents = "auto";
    document.getElementById('option4').style.pointerEvents = "auto";
    gameQuestions = pickQuestions(questions);
    qlength = gameQuestions.length;
    askQuestion(gameQuestions);
}

function pickQuestions(qArray) { 
    let randomQuestions = [];
    do {
        const selection = qArray[Math.floor(Math.random() * qArray.length)];
        if (!randomQuestions.includes(selection)) {
            randomQuestions.push(selection);
        }
    } while (randomQuestions.length < 10);
  return randomQuestions;
}

// Start asking questions from the random questions array

function askQuestion(qlist) {
    checkQuestionCount(questionCount, qlist.length);
    let i = questionCount;
    correctAnswer ='';

    document.getElementById('question').textContent = qlist[i].question;
    document.getElementById('option1').textContent = qlist[i].option1;
    document.getElementById('option2').textContent = qlist[i].option2;
    document.getElementById('option3').textContent = qlist[i].option3;
    document.getElementById('option4').textContent = qlist[i].option4;
    document.getElementById('qcount').innerHTML = i+1+' /'+qlist.length;
    document.getElementById('score').innerHTML = score+' /'+qlength;
    document.getElementById('btnNext').style.visibility ="visible";

    correctAnswer = qlist[i].correctAnswer;

    questionCount++;
    if (questionCount+1 > qlist.length) {
        askedAll = true;
    } else {
        false;
    }
    return null;
    }


function checkQuestionCount(count, arraySize) {
  if (count === arraySize) {
	 quizComplete();
	} else {
           document.getElementById('btnNext').style.visibility ="visible";
	}
    return null;
  } 	

  

function nextQuestion() {
 

    document.getElementById('option1').style.backgroundColor = "rgb(255, 187, 0)";
    document.getElementById('option2').style.backgroundColor = "rgb(255, 187, 0)";
    document.getElementById('option3').style.backgroundColor = "rgb(255, 187, 0)";
    document.getElementById('option4').style.backgroundColor = "rgb(255, 187, 0)";  

    document.getElementById('option1').classList.add('option');
    document.getElementById('option2').classList.add('option');
    document.getElementById('option3').classList.add('option');
    document.getElementById('option4').classList.add('option');
   

        if (askedAll) {
            quizComplete();
        } else {
    	    document.getElementById('option1').style.pointerEvents = "auto";
            document.getElementById('option2').style.pointerEvents = "auto";
            document.getElementById('option3').style.pointerEvents = "auto";
            document.getElementById('option4').style.pointerEvents = "auto";
            document.getElementById('score').innerHTML = score+' /'+qlength;
            document.getElementById('sresult').innerHTML = '';
            askQuestion(gameQuestions);
        }
}

function checkAnswer(userAnswer){
    document.getElementById('option1').style.pointerEvents = "none";
    document.getElementById('option2').style.pointerEvents = "none";
    document.getElementById('option3').style.pointerEvents = "none";
    document.getElementById('option4').style.pointerEvents = "none";
    document.getElementById('btnNext').style.visibility = 'visibile';

    if (userAnswer == correctAnswer) {
        score++;
        document.getElementById('score').innerHTML = score+' /'+qlength;
        document.getElementById('sresult').style.color = 'green';
	document.getElementById('sresult').innerHTML = 'CORRECT';
        document.getElementById(userAnswer).style.backgroundColor = 'green';
	} else {
        document.getElementById('sresult').style.color='red';
        document.getElementById('sresult').innerHTML = 'WRONG';

        document.getElementById(userAnswer).style.backgroundColor = 'red';
	    }
    } 


function quizComplete() {
    document.getElementById('question').textContent = 'Quiz Completed';
    document.getElementById('question').style.color='rgb(255, 247,99)';
    document.getElementById('option1').textContent = '';
    document.getElementById('option2').textContent = '';
    document.getElementById('option3').textContent = '';
    document.getElementById('option4').textContent = '';
    document.getElementById('qcount').innerHTML = 0+' /'+0;
    document.getElementById('score').innerHTML = 0 +' /'+0;
    document.getElementById('sresult').innerHTML = "You scored " + "<span style='color:#d60909'>"+ score + "</span>" + " out of " + "<span style='color:#d60909'>" + qlength + "</span>";
    document.getElementById('sresult').style.color= "blue";
    document.getElementById('btnNext').style.visibility = 'hidden';

    let replayBox = document.createElement('div');
    replayBox.id = 'replayBox';    
    let btnReplay  = document.createElement('button');
    btnReplay.id = 'btnReplay';
    btnReplay.textContent = 'Play Again';
    btnReplay.setAttribute('onclick', 'replayQuiz()');

    //add btnReplay to replayBox
    replayBox.appendChild(btnReplay);

    // Add replayBox to playGround
     document.querySelector('div.quizContainer').appendChild(replayBox);
  
    let btnExit  = document.createElement('button');
    btnExit.id = 'btnExit';  
}

function replayQuiz() {
    document.getElementById('btnReplay').remove();
    document.getElementById('replayBox').remove();
    document.getElementById('sresult').innerHTML = '';
    document.getElementById('question').style.color='white';
    startGame();
}