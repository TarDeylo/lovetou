const questions = [
    {
      question: "What do I enjoy doing the most?",
      options: ["Making music", "Talking to you","Coding" ,"Excercising"],
      answer: "Talking to you"
    },
    {
      question: "What is my star sign?",
      options: ["Saggitarius", "Libra", "Cancer", "Aries"],
      answer: "Saggitarius"
    },
    {
      question: "When is my Birthday?",
      options: ["24 jan", "15 Oct", "14 Dec", "29 Mar"],
      answer: "14 Dec"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quiz = document.getElementById('quiz');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitBtn = document.getElementById('submitBtn');
  const surprise = document.getElementById('surprise');
  const messageElement = document.getElementById('message');
  
  function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(btn);
    });
  }
  
  function checkAnswer(option) {
    if (option === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showSurprise();
    }
  }
  
  function showSurprise() {
    quiz.style.display = 'none';
    surprise.style.display = 'block';
    if (score === questions.length) {
      messageElement.textContent = "You won the game phof ke you you won my heart kwakudala ,I made this to express my love in different forms as an artist ,and in this I want to say NDIYAKUTHANDA mntuwam ";
    } else {
      messageElement.textContent = "You did your best, and that's what matters. I love you!";
    }
  }
  
  submitBtn.addEventListener('click', displayQuestion);
  displayQuestion();
  const knowMePage = document.getElementById('know-me-page');
const quizStartPage = document.getElementById('quiz-start-page');
const quizPage = document.getElementById('quiz');
const surprisePage = document.getElementById('surprise');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const playBtn = document.getElementById('playBtn');
const skipBtn = document.getElementById('skipBtn');

yesBtn.addEventListener('click', function() {
  knowMePage.style.display = 'none';
  quizStartPage.style.display = 'block';
});

noBtn.addEventListener('click', function() {
  alert("Let's see if you can learn more about me!");
  knowMePage.style.display = 'none';
  quizStartPage.style.display = 'block';
});

playBtn.addEventListener('click', function() {
  quizStartPage.style.display = 'none';
  quizPage.style.display = 'block';
  displayQuestion();
});

skipBtn.addEventListener('click', function() {
  quizStartPage.style.display = 'none';
  quizPage.style.display = 'block';
  displayQuestion();
});

// Quiz logic (same as before)

// Surprise logic (same as before)

  