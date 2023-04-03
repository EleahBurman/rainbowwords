//Choice of game - "Rainbow Words"
//Theme - "Rainbow (lgbt)""
//Find 6 lgbt words in the board in 10 turns - there will be 6 board options (A-E). Plays "Born this Way" when you find all 6 words and words turn rainbow. Win gold, silver, or bronze medal image based on number of guesses. You can toggle between a light rainbow theme and a dark rainbow theme

/*-------------------------------- Constants --------------------------------*/
//audio from audio.js
//create objects within an array that is equal to winningwords
const winningWordsa = [
  {A0: 'n', A1: 'o', A2: 'n', A3: 'b', A4: 'i', A5: 'n', A6: 'a', A7: 'r', A8: 'y'},
  {D2: 'g', D3: 'e', D4: 'n', D5: 'd', D6: 'e', D7: 'r'},
  {F0: 'g', F1: 'a', F2: 'y'},
  {G3: 't', G4: 'r', G5: 'a', G6: 'n', G7: 's'},
  {H3: 'f', H4: 'e', H5: 'm', H6: 'm', H7: 'e'},
  {B9: 'l', C9: 'e', D9: 's', E9: 'b', F9: 'i', G9: 'a', H9: 'n'}
]
const locationWinningvalues = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A8', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'F0', 'F1', 'F2', 'G3', 'G4', 'G5', 'G6', 'G7', 'H3', 'H4', 'H5', 'H6', 'H7', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9'
]
//create a const for random letters assign a random letter to open strings that are not set by winning words
const randomLetters = [
  {A9: '',B0: '', B1: '', B2: '', B3: '', B4: '', B5: '', B6: '', B7: '', B8: '', C0: '', C1: '', C2: '', C3: '', C4: '', C5: '', C6: '', C7: '', C8: '', D0: '', D1: '', D8: '', E0: '', E1: '', E2: '', E3: '', E4: '', E5: '', E6: '', E7: '', E8: '', F3: '', F4: '', F5: '', F6: '', F7: '', F8: '', G0: '', G1: '', G2: '', G8: '', H0: '', H1: '', H2: '', H8: '', H9: '', I0: '', I1: '', I2: '', I3: '', I4: '', I5: '', I6: '', I7: '', I8: '', I9: '', J0: '', J1: '', J2: '', J3: '', J4: '', J5: '', J6: '', J7: '', J8: '', J9: ''}
]

/*---------------------------- Variables (state) ----------------------------*/
//include variables with the term let for board (build logic), turnsleft, winner, message (winning and losing) (why is board One not working)
let winner, turnsLeft, message
/*------------------------ Cached Element References ------------------------*/
// square choices are equal to anything in class column
const squareChoices = document.querySelectorAll('.column')
// include message every time someone chooses a wrong letter or winning word using query selector
const messageUser = document.querySelector('#message')  
// include reset button using query selector
const resetBtn = document.querySelector('#reset-buton')
/*----------------------------- Event Listeners -----------------------------*/
//squareChoices targeting the item click square to invoke handle click flunction
squareChoices.forEach(function(squareChoice){
  squareChoice.addEventListener('click', handleClick)
})
//listens for the click of the reset button and effects function turn, and initializer, new game
//lightvDark button to click for a light rainbow mode versus dark rainbow mode
/*-------------------------------- Functions --------------------------------*/
//initializer for the turnsLeft, winner, render
init()
function init (){
  turnsLeft = 10
  winner = false
  setBoard()
  getRandomletter()
  //render ()
}
//go through each element in the winning words array and each key becomes an id in html (find elements by using ids)
function setBoard (){
  //for each object we iterate through the winning words array and look at each object
  winningWordsa.forEach(obj=> {
    //we used object.keys to get keys included in an object as strings
    Object.keys(obj).forEach(key=>{
      console.log(key)
      const winningLetter = document.querySelector(`#${key}`)
      console.log(winningLetter)
      //dynamically pass a key through an object to access a value by using bracket notation
      winningLetter.textContent = obj[key]
    })
  })
}
setBoard()

function getRandomletter(x){
    //alphabet is a string of every letter
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z']
    let emptyString = ''
    randomLetters.forEach(obj2=> {
      Object.keys(obj2).forEach(key2=>{
      //returns values
        const losingLetter = document.querySelector(`#${key2}`) 
        //key 2 is now changed from an empty string to a random letter of alphabet
        key2 = (emptyString + `${alphabet[(Math.floor(Math.random() * 26))]}`)
        losingLetter.textContent = key2
        console.log(key2)
      })
    })
}
getRandomletter()

//function handleClick using parseInt to make each space into numbers for each board - board one is A1-100, board 2 is B1-100 for each space. There will be 6 boards. Include checkWinword and render

function handleClick(event){
//   //if square choices equal the keys of winning words then change letters rainbow
  const sqrIdx = (event.target.id) 
  console.log(event.target.id , 'event')
    locationWinningvalues.includes(sqrIdx) ? console.log('yes') : console.log('no')
  
//   // if squareChoices === winningWordsA.forEach(value => {
//   //   //return letter transformed to a bubble rainbow version of it
//   //   return 
//   // });
}
//function render that has updateBoard, renderBoard, updateMessage, winningMessage within it
//function updateBoard using if, else: if its a winning option it will turn rainbow using innerHTML and an image source (each letter will be photoshopped or a graphic video of a rainbow word turning), else you are sent a losing message using innerHTML
//function renderboard - uses forEach as it iterates over the squares through the board
//function updateMessage using if winning option, else if losing option
//function winningMessage if and else if for gold (6 guesses), silver(7-8 guesses), and bronze(9 to 10 guesses)  using innerHTML, also include playBornThisWay (will include clip in a separate audio.js)
//function handleClick using parseInt to make each space into numbers for each board - board one is A1-100, board 2 is B1-100 for each space. There will be 6 boards. Include checkWinword and render
//function turn, using for loop that needs to be less than 10 turns. Resets with reset button
//function checkWinword using for each, mathabs, and the const randomWinningwords, and set to winner=true
//function toggleLightRainbow using classes can toggle from a lighter rainbow scheme to a darker rainbow scheme
//function checkDark will check if someone prefers dark mode over light mode using window match media and class name
