// i know i will need more lol


const quizData = [
    {
        question: 'which languace',
        a: 'java',
        b: 'CSS',
        c: 'html',
        d: 'Pyython',
        correct: 'a',
    },
    {
        question: 'what is a boolean',
        a: 'dont know',
        b: 'i know',
        c: 'we know',
        d: 'true',
        correct: 'b',
    },
    {
        question: 'what is a boolean',
        a: 'dont know',
        b: 'i know',
        c: 'we know',
        d: 'true',
        correct: 'c',
    },
    {
        question: 'what is a boolean',
        a: 'dont know',
        b: 'i know',
        c: 'we know',
        d: 'true',
        correct: 'd',
    },

];

const quiz = document.getElementById('#quiz');
const answerEls = document.querySelector('.answer'); 
const questionEl = document.getElementById('question');
const a_text = document.getElementById('#a_text');
const b_text = document.getElementById('#b_text');
const c_text = document.getElementById('#c_text');
const d_text = document.getElementById('#d_text');
const submitBtn = document.getElementById('#submit');

let currentQuiz = 0
let score =0 

laodQuiz()

function laodQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answerEls 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answerEl = answerEl.id
        }
    })
    return answer 
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++   
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            laodQuiz()
        // } else {
        //     quiz.innerHTML = 
        //     <h2>You answered ${score}/${quizData.lengt} questions correctly<h2>
            
        //     <button onclick="location.reload()">
               
        }
    }
})