// constants //
// Player's Choices //
const tileColors = {
    '0': 'black',
    '1': 'purple',
    '2': 'blue',
    '3': 'red',
    '4': 'orange',
    '5': 'white',
}


// state varibles //

let choices

let match

let win

let timer

let delay

let counterState

let mainColor


// let main = getRandomItem //


// cached elements //'

// selecting h1 element //
const messageEl = document.querySelector('h1')
// selecting Button element //
const playAgainButton = document.querySelector('button')
// selecting square element //
const choiceEls = document.querySelectorAll('.square')
// selecting Main Image //
const mainImageEl = document.getElementById('mainImage')
// selecting Timer Display//
const displayEl = document.querySelector('#gameClock')
// selecting SubMessage //
const subEl = document.querySelector("#submessage")
// console.log(choiceEls)


// event listeners //
// Attached method using variable name //
// playAgainButton.addEventListener('click', resetChoices)
//  console.log()
document.getElementById("choices").addEventListener('click', handleClick)





// functions //
init()
function init() {
    choices = [
        0, 1, 2, 3, 4, 5, //<!-- Row 1 -->

    ]
    delay = 1000;
    // timer =  setInterval(cb, delay)
    win = null
    main = getRandomItem(choices) 
    match = 0

    render()
}

function render() {
    renderChoices()
    // renderMessage()

}
// console.log(choices)

function renderChoices() {
    choices.forEach(function (cellValue, index) {

        const cellEl = document.getElementById(index)

        cellEl.style.backgroundColor = tileColors[cellValue]
    })
    mainImageEl.style.backgroundColor = tileColors[main]
    console.log(main)
    setTimeout(hideChoices, 2000)

}


// Declaring function //
function hideChoices() {
    console.log('test')
    choiceEls.forEach(function (cellEl, index) {
    
        cellEl.style.backgroundColor = "goldenrod"
    })

}

function handleClick(evt) {
    console.log(evt.target.id, main)
    // const currentSquare = evt.target.id
    // // change background color to match current sqaure color //
    if (evt.target.id == 'choices') {
        return
    }
    evt.target.style.backgroundColor = tileColors[evt.target.id]
    // // if statement if id matches the main variable //
    if (evt.target.id == main) {
        console.log(match)
        match++ 
        shuffleChoices()
        nextTurn()
    }  else { 
        // setTimeout(hideChoices, 2000)
  
    }
    // // if it is a match game over //
    //  if (match = then(gameOver)) {
    // }
    // // else hides current color after select delay //

}

function nextTurn(){
    
    main = getRandomItem(choices)
    console.log(choices, main)
    render()
   
}

function shuffleChoices(){
    choices = choices.sort((a, b) => 0.5 - Math.random())
    console.log(choices)
}

function getRandomItem(str) {
    const randomIdx = Math.floor(Math.random() * str.length)
    const item = str[randomIdx]

    return item
}



// Invoking callback function //
function cb() {
    // Defining counter direction //
    counterState--;
    // Invoking subMessage //
    // upDateSubMessage()
    // Invoking stopTimer
    stopTimer()
    // Rendering everything above //
    render()
}






