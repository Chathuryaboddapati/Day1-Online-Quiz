const quizData = [
    {
      question: "1.What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "2.What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
        question: '3.What is the national animal of India?',
        options: ['Cow', 'Elephant', 'Lion', 'Tiger'],
        answer: 'Tiger',
      },
      {
        question: '4.What is the national bird of India?',
        options: ['Parrot', 'Peacock', 'Pigeon', 'Sparrow'],
        answer: 'Peacock',
      },
      {
        question: '5.What is the national fruit of India?',
        options: ['Apple', 'Guava', 'Mango', 'Pineapple'],
        answer: 'Mango',
      },
      {
        question: '6.What is the national tree of India?',
        options: ['Ashoka', 'Banyan', 'Eucalyptus', 'Neem'],
        answer: 'Banyan',
      },
      {
        question: '7.What is the national flower of India?',
        options: ['Jasmine','Lily','Lotus','Rose'],
        answer: 'Lotus',
      },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();