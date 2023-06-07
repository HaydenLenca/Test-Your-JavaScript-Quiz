let startBtn = document.getElementById('start');
let cardHeader = document.getElementsByClassName('cardHeader');
let timer = document.getElementsByClassName('time');
let timeLeft;
let decrement = 10;
let done = 0;
let score = 0;
let wrongAnswer = 0;

function countdown(quizEnd) {
    timeLeft = 75; 
    timer.textContent = 'Time' + timeLeft--;

    let timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            if (done ===0) {
                timer.textContent = 'Time: ' + timeLeft;
                timeLeft--;
            } else {
                timer.textContent = 'Time: ' + timeLeft;
                clearInterval(timeInterval);
            } 
        } else if (timeLeft === 0) {
            timer.textContent = 'Time: ' + timeLeft;
            clearInterval(timeInterval);
            finalScreen(wrongAnswer);
        }
    }, 1000);
}

function setQuizHeader(newText) {
    cardHeader.textContent = newText;
}

function finalScreen (answer) {
    setQuizHeader('All Done!');
    resetContent(answer);
    var newH2 = document.createElement('h2');
    newH2.textContent = 'Your final score is ' + score;
    var quizBody = document.getElementsByClassName('cardBody');
    quizBody.appendChild(newH2);

}

function startQuiz() {
    var numOfQuestions = 5;
    var nextQuestion = 0;
  
    resetContent(nextQuestion);
    startBtn.textContent = '';
    startBtn.setAttribute('style', 'visibility:hidden');

    countdown(done);
    displayQuestion(nextQuestion);

    function displayQuestion(question) {
  
        var questions = ['Commonly used data types DO NOT include:',
            'A very useful tool used during development and debugging for printing content to the debugger is:',
            'The condition in an if / else statement is enclosed with _____.',
            'Arrays in JavaScript can be used to store _____.',
            'String values must be enclosed within _____ when being assigned to variables.'];
        var answers = [['strings', 'booleans', 'alerts', 'numbers'],
        ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
        ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        ['commas', 'curly brackets', 'quotes', 'parenthesis']
        ];

        setQuizHeader(questions[question]);
        displayAnswers(answers[question]);
    }

    function displayAnswers(ans) {
        var body = document.body;

        var buttonStyle = 'background-color:#351c75;color:white;text-align:left;padding-bottom:10px;border-radius:10px;display:block;font-size: 22px;line-height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px;width:250px;'
        var buttonStyleOnClick = 'background-color:#bb5be6;color:white;text-align:left;padding-bottom:10px;border-radius:10px;display:block;font-size: 22px;line-height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px;width:250px;'

        var quizBody = document.getElementsByClassName('cardBody')[0];
        for (i = 0; i < ans.length; i++) {
        
            var newbtn = document.createElement('button');

            newbtn.textContent = i + 1 + '. ' + ans[i];
            newbtn.setAttribute('style', buttonStyle);
            newbtn.className = 'btn';
            quizBody.appendChild(newbtn);
        }

        var ans1 = quizBody.children[0];
        ans1.addEventListener('click', function (event) {
            ans1.setAttribute('style', buttonStyleOnClick);
            verifyAnswer(ans1.textContent);
        });
        var ans2 = quizBody.children[1];
        ans2.addEventListener('click', function (event) {
            ans2.setAttribute('style', buttonStyleOnClick);
            verifyAnswer(ans2.textContent);
        });
        var ans3 = quizBody.children[2];
        ans3.addEventListener('click', function (event) {
            ans3.setAttribute('style', buttonStyleOnClick);
            verifyAnswer(ans3.textContent);
        });
        var ans4 = quizBody.children[3];
        ans4.addEventListener('click', function (event) {
            ans4.setAttribute('style', buttonStyleOnClick);
            verifyAnswer(ans4.textContent);
        });
    }

    function verifyAnswer(userAnswer) {
        var correctAnswerIndex = ['3. alerts', '4. console log', '2. curly brackets', '4. all of the above', '3. quotes'];
        console.log('userAnswer = ' + userAnswer);
        console.log('correctAnswer = ' + correctAnswerIndex[nextQuestion])
        if (userAnswer != correctAnswerIndex[nextQuestion++]) {
            wrongAnswer = 1; 
            if (timeLeft > 10) {
                timeLeft = timeLeft - decrement;
            } else {
                finalScreen(wrongAnswer);
                done = 1; 
            }
            console.log('Wrong answer');
            var quizFooter = document.getElementsByClassName('footer');
            var newhr = document.createElement('hr');
            newhr.setAttribute('width', '100%');
            var newH2 = document.createElement('h2');
            newH2.textContent = 'Wrong!';
            newH2.setAttribute('style', 'color:grey;text-align:left;font-size:20px');
            quizFooter.appendChild(newhr);
            quizFooter.append(newH2);
        } else {
            score++;
        } 
        
        if (nextQuestion >= numOfQuestions) { 
            finalScreen(wrongAnswer);
            done = 1; 
        } else { 
        resetContent(wrongAnswer);
        displayQuestion(nextQuestion);
        }
    }
} 

function resetContent(answer) {
    var quizBody = document.getElementsByClassName('cardBody')[0];
    while (quizBody.firstChild) {
        quizBody.removeChild(quizBody.firstChild);
    }
    if (answer) {
        var quizFooter = document.getElementsByClassName('footer');
        while (quizFooter.firstChild) {
            quizFooter.removeChild(quizFooter.firstChild);
        }
    }
}

    startBtn.addEventListener('click', startQuiz);