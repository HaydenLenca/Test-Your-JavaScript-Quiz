var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
  
  var highscores = []
  var i = 0;
  var time = 60;
  var score = 0;
 
  document.querySelector("#start").onclick = () => {
  
    showQuestions();
   
  
    setInterval(() => {
      if (time > 0 && i < questions.length)
        time--
      document.querySelector("#time").innerHTML =
        `<h3>${time}</h3>`
  
    }, 1000)
  
    {
      document.querySelector("#score").innerHTML =
        `<h3>${score}</h3>`
  
  
    }
  }
  
  function showQuestions() {
  
    if (i < questions.length) {
      document.querySelector("#questions").innerHTML = `
      <h3>${questions[i].title}</h3>
      <button class="answers">${questions[i].choices[0]}</button>
      <button class="answers">${questions[i].choices[1]}</button>
      <button class="answers">${questions[i].choices[2]}</button>
      <button class="answers">${questions[i].choices[3]}</button>
      `
      document.querySelector('#start').setAttribute("style", "visibility:hidden")
    }
  }
  
  function endGame() {
    document.querySelector('#check').innerHTML =
      `<h3>Game Over</h3>`
    document.querySelector('#questions').innerHTML = ""
    document.querySelector('#highscores').setAttribute("style", "visibility:visible")
    document.querySelector('#time').setAttribute("style", "visibility:hidden")
  }
  
  document.querySelector("#names").addEventListener("submit", function (event) {
    event.preventDefault()
    var username = document.querySelector("#namefield").value
    var currentscores = JSON.parse(localStorage.getItem("scores"))
    if (currentscores) {
      highscores = currentscores
    }
    highscores.push({
      name: username,
      score: score,
    })
    
    localStorage.setItem("scores", JSON.stringify(highscores))
    var allscores = document.querySelector("#allscores")
    for (var x = 0; x < highscores.length; x++) {
      var userscore = document.createElement("div")
      userscore.innerText = highscores[x].name
      allscores.appendChild(userscore)
    }

  })
 
  document.querySelector("#questions").onclick = function (event) {
    event.preventDefault()
    console.log(event.target.innerText)
    console.log(i)
    if (event.target.innerText === questions[i].answer) {
      document.querySelector('#check').innerHTML =
        `<h3>Correct</h3>`
      {
        score += 10;
      }
    } else if (event.target.innerText != questions[i].answer) {
      document.querySelector('#check').innerHTML =
        `<h3>Wrong</h3>`
      time -= 10;
      score -= 10;
    }
  
    document.querySelector("#score").innerHTML =
      `<h3>${score}</h3>`
  
    i++
    if (i < questions.length) {
      showQuestions()
    }
    else {
      endGame()
      
    }
  }