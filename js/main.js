// Constants //
// Player's Choices //
const tileColors = {
    '0': 'black',
    '1': 'purple',
    '2': 'blue',
    '3': 'red',
    '4': 'orange',
    '5': 'white',
}


// State varibles //

let choices

let match

let win

let delay

let counterState

let mainColor


// let main = getRandomItem //


// cached elements //'

// selecting h1 element //
const messageEl = document.querySelector('h1');
// selecting Button element //
const playAgainButton = document.querySelector('button');
// selecting square element //
const choiceEls = document.querySelectorAll('.square');
// selecting Main Image //
const mainImageEl = document.getElementById('mainImage');



// Event listeners //
// EventListener for click squares //
document.getElementById("choices").addEventListener('click', handleClick)


// Functions //

// Initializing game play //
init()
function init() {
    choices = [
        0, 1, 2, 3, 4, 5, //<!-- choices array -->
    ]
    delay = 1000;
    win = null
    main = getRandomItem(choices) 
    match = 0
    // render function //
    render()
}

// Renderin g Functions //
function render() {
    renderChoices()
}

// Function for rendering choices //
function renderChoices() {
    choices.forEach(function (cellValue, index) {
        const cellEl = choiceEls[index]
        cellEl.setAttribute('id', cellValue)
        cellEl.style.backgroundColor = tileColors[cellValue]
    })
    mainImageEl.style.backgroundColor = tileColors[main]
    console.log(main)
    setTimeout(hideChoices, 2000)
}

// Declaring function for hinding choices//
function hideChoices() {
    // forEach //
    choiceEls.forEach(function (cellEl, index) {
        // Background color for 6 choices //
        cellEl.style.backgroundColor = "goldenrod"
    })
}

// Function for hadleClick //
function handleClick(evt) {
    console.log(evt.target.id, main)
    const currentSquare = evt.target.id
    // // change background color to match current sqaure color //
    if (evt.target.id == 'choices') {
        return
    }
    // background colors for squares //
    evt.target.style.backgroundColor = tileColors[evt.target.id]
    // // if statement if id matches the main variable //
    if (evt.target.id == main) {
        console.log(match)
        match++ 
        shuffleChoices()
        nextTurn()
    }  else { 
        setTimeout(hideChoices, 2000)   
    }
}

// Render function for next turn //
function nextTurn(){
    
    main = getRandomItem(choices)
    console.log(choices, main)
    render()  
}

// Funtion for picking choices and proceeding //
function shuffleChoices(){
    console.log("shuffle", choices)
    newData = [...choices].sort((a, b) => 0.5 - Math.random())
    choices = [...newData]
    console.log('choices after sort', choices)
}

// Function for ramdomizing selections //
function getRandomItem(str) {
    const randomIdx = Math.floor(Math.random() * str.length)
    const item = str[randomIdx]
    
    return item
}