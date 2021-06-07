//Initialise gloable variables
var questions;
var userChoice;

// Read questions from country.json file

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
       questions = JSON.parse(this.responseText);
    }
};

request.open("GET", '../json/country.json', true);

request.send();

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