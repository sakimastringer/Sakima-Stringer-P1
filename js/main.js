// constants //
// Player's Choices //
const tileColors = {
    '0' : 'black',
    '1' : 'purple',
    '2' : 'blue',
    '3' : 'red',
    '4' : 'orange',
    '5' : 'white',
}


// state varibles //

let choices 

let match 

let win 

let main = 3 


// cached elements //

// selecting h1 element //
const messageEl = document.querySelector('h1')
// selecting Button element //
const playAgainButton = document.querySelector('button')
// selecting square element //
const choiceEls = document.querySelectorAll('.square')
console.log(choiceEls)


// event listeners //
// Attached method using variable name //
playAgainButton.addEventListener('click', resetChoices)



// functions //
init()
function init() {
    choices = [
        0, 1, 2, 3, 4, 5, //<!-- Row 1 -->
    
    ]
    win = null
    render()
}

function render() {
    renderChoices()
    // renderMessage()

} 
// console.log(choices)

function renderChoices() {
    choices.forEach(function(cellValue, index) {
 
            const cellEl = document.getElementById(index)

            cellEl.style.backgroundColor = tileColors[cellValue]
    }) 
}

// Declaring function //
function resetChoices() {
    choices = []
    console.log('test')
// calling the render
    render()  
}
// console.log(choices)
// calling the function //
// resetChoices()
// console.log(choices)










