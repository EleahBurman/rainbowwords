//Choice of game - "Rainbow Words"
//Theme - "Rainbow (lgbt)""
//Find 6 lgbt words in the board in 10 turns - there will be 6 board options (A-E). Plays "Born this Way" when you find all 6 words and words turn rainbow. Win gold, silver, or bronze medal image based on number of guesses. You can toggle between a light rainbow theme and a dark rainbow theme

/*-------------------------------- Constants --------------------------------*/
//audio from audio.js
//winning squares given for each board with the string letters attached to each spot - in total there will be 6 words correct on each of the 6 boards - total of 36 words -- should I get rid of letters and make just numbers - would that make easier for later?
const winningWordsa = [
  {A0: 'N', A1: 'O', A2: 'N', A3: 'B', A4: 'I', A5: 'N', A6: 'A', A7: 'R', A8: 'Y'},
  {D2: 'G', D3: 'E', D4: 'N', D5: 'D', D6: 'E', D7: 'R'},
  {F0: 'G', F1: 'A', F2: 'Y'},
  {G3: 'T', G4: 'R', G5: 'A', G6: 'N', G7: 'S'},
  {H3: 'F', H4: 'E', H5: 'M', H6: 'M', H7: 'E'},
  {B9: 'L', C9: 'E', D9: 'S', E9: 'B', F9: 'I', G9: 'A', H9: 'N'}
]

/*---------------------------- Variables (state) ----------------------------*/
//include variables with the term let for board (build logic), turnsleft, winner, message (winning and losing) (why is board One not working)
//let boardOne, turnsLeft, winner, message
/*------------------------ Cached Element References ------------------------*/
// include losingSquares (random letters), using query selector, loop, math floor and math random
// inclue message every time someone chooses a wrong letter or winning word using query selector
const messageUser = document.querySelector('#message')  
// include reset button using query selector -should I use query selector?
const resetBtn = document.querySelector('#reset-buton')
//randomize losing letters spots using math random and set numbers equal to spaces - cached element
/*----------------------------- Event Listeners -----------------------------*/
//squareChoices targeting the item click square to invoke handle click flunction
//listens for the click of the reset button and effects function turn, and initializer, new game
//lightvDark button to click for a light rainbow mode versus dark rainbow mode
/*-------------------------------- Functions --------------------------------*/
//go through each element in the winning words array and each key becomes an id in html (find elements by using ids)
function setBoard (){
  winningWordsa.forEach(obj=> {
    //for each object we iterate through the winning words array and look at each object
    Object.keys(obj).forEach(key=>{
      console.log(key)
      //we used object.keys to get keys included in an object as strings
      const winningLetter = document.querySelector(`#${key}`)
      console.log(winningLetter)
      //dynamically pass a key through an object to access a value by using bracket notation
      winningLetter.textContent = obj[key]
    })
  });
}
setBoard()

//initializer for the board, turnsLeft, winner, render
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
