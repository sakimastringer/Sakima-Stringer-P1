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


// let main = getRandomItem //


// cached elements //'

// selecting h1 element //
const messageEl = document.querySelector('h1')
// selecting Button element //
const playAgainButton = document.querySelector('button')
// selecting square element //
const choiceEls = document.querySelectorAll('.square')
// selecting Main Image //
const mainImageEl = document.getElementById('.mainImage')
// selecting timer //
const timerEl = document.getElementById('timer')
console.log(choiceEls)


// event listeners //
// Attached method using variable name //
playAgainButton.addEventListener('click', resetChoices)
 console.log()


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
    choices.forEach(function (cellValue, index) {

        const cellEl = document.getElementById(index)

        cellEl.style.backgroundColor = tileColors[cellValue]
    })
}



// Declaring function //
function resetChoices() {
    choices = []
    console.log('test')
    // calling the render //
    render()
}

var count = 9, shotClock= setInterval(function() {
    ("counter")(count-1);
    if(count == 0) clearInterval(shotClock);

}, 1000);

// function matchImages() {
//     // Match options are from the string referenced above //
//     const options = "tileColors".length
//     if (options === 2)
//     // if(mainImage === picked Image)matched
//     // Everything else other than above line in not a match //   
//     else {unmatched()}
// }

function getRandomItem(str) {
    const randomIdx = Math.floor(Math.random() * str.length)
    const item = str[randomIdx]

    return item
}

let str = choices

const result = getRandomItem(str)
console.log(result)






