const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which company developed Java?",
        a: "Microsoft",
        b: "Sun Microsystems",
        c: "Google",
        d: "IBM",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<code>",
        correct: "a",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "<!-- -->",
        d: "#",
        correct: "a",
    },
    {
        question: "Which of the following is not a programming language?",
        a: "Python",
        b: "Ruby",
        c: "HTML",
        d: "C++",
        correct: "c",
    },
];

// Shuffle questions each time the page loads
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let shuffledQuizData = shuffle([...quizData]);

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = shuffledQuizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === shuffledQuizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < shuffledQuizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${shuffledQuizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
