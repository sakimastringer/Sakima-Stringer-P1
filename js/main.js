// constants //
// Player's Choices //
const COLORS = {
    '0' : 'black',
    '1' : 'purple',
    '2' : 'blue',
    '3' : 'red',
    '4' : 'orange',
    '5' : 'white',
}


// state varibles //

let choices = {
}

let win = {
}

let lose =  {
}


// cached elements //

const messageEl = document.querySelectorAll('h1')
const playAgainButton = document.querySelector('#button')
const choiceEl = document.querySelectorAll('#choices')


// event listeners //

// functions //
Init()
function init() {
    choice = [
        [0, 0, 0], //<!-- Row 1 -->
        [0, 0, 0], //<!-- Row 2 -->
    ]
    win = null
    render ()
}






