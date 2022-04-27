// For this project you will make a Rock, Paper, and Scissors game.

// The design of your webpage is completely up to you. The only requirements are as follows:
// - A user is able to choose between three options, Rock, Paper, and Scissors.
// - When an option is chosen, it must be obvious to the user which option has been chosen.
// - When clicking a 'submit' button, the user's choice will be submitted and it will be compared against a randomly generated computer choice.
// - The user is then presented with an alert that tells them if they won, tied, or lost, and includes the user's input as well as the computer's input.

//rounds
//players

//Global Variables
let outcome = document.getElementById('outcome')
let gameArea = document.getElementById('game-area')
let gameStart = document.getElementById('start')
let compDiv = document.getElementById('comp-choice')
let userChoiceDiv = document.getElementById('player-choice')

//Array hold the 3 different results of the game.
let result = ['You Won!', 'You Lost!', 'You Tied!']

//Function to start game and reset.
function startGame() {
    gameArea.style.display = 'flex'
    gameStart.style.display = 'none'
    outcome.style.display = 'none'
    userChoiceDiv.innerHTML = ''
    compDiv.innerHTML = ''
    outcome.firstChild.remove()
}

// Function to check computer and user choices, when Start Game button is pressed
function check() {
    const computerChoice = ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)]
    let userChoice = document.querySelector('input[name=choice]:checked').value
    resultOutcome(userChoice, computerChoice)
}

// Function for game logic
function resultOutcome(value1, value2) {
    if(value1 === value2) {
        tiedBlock(value1, value2)
    }
    if(value1 === 'rock' && value2 === 'scissor') {
        wonBlock(value1, value2)
    } else if(value1 === 'rock' && value2 === 'paper') {
        lostBlock(value1, value2)
    }
    if(value1 === 'scissor' && value2 === 'paper') {
        wonBlock(value1, value2)
    } else if (value1 === 'scissor' && value2 === 'rock') {
        lostBlock(value1, value2)
    }
    if(value1 === 'paper' && value2 === 'rock') {
        wonBlock(value1, value2)
    } else if(value1 === 'paper' && value2 === 'scissor') {
        lostBlock(value1, value2)
    }
}

// 3 Functions for win, lost, tied result.
function wonBlock(value1, value2) {
    alert(`Computer chose ${value2}. ${result[0]}`)
    addResult(result[0], value2, value1)
}

function lostBlock(value1, value2) {
    alert(`Computer chose ${value2}. ${result[1]}`)
    addResult(result[1], value2, value1)
}

function tiedBlock(value1, value2) {
    alert(`Computer chose ${value2}. ${result[2]}`)
    addResult(result[2], value2, value1)
}

//Function to add the result to the game screenin the document page.
function addResult(string, computerChoice, userChoice) {
    const newH1 = document.createElement('h1')
    const divText = document.createTextNode(string)
    outcome.style.display = 'block'
    gameArea.style.display = 'none'
    compDiv.innerHTML = computerChoice
    userChoiceDiv.innerHTML = userChoice
    newH1.appendChild(divText)
    outcome.prepend(newH1)
}



