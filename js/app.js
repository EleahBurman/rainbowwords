/*-------------------------------- Constants --------------------------------*/
//audio from audio.js
import {playBornThisWay, playPhotograph} from './audio.js'
// const bornThisWayAudio = playbornThisWay()
// const photographAudio = playphotograph()
//create objects within an array that is equal to winningwords
const winningWordsa = [
  {A0: 'n', A1: 'o', A2: 'n', A3: 'b', A4: 'i', A5: 'n', A6: 'a', A7: 'r', A8: 'y'},
  {D2: 'g', D3: 'e', D4: 'n', D5: 'd', D6: 'e', D7: 'r'},
  {F0: 'g', F1: 'a', F2: 'y'},
  {G3: 't', G4: 'r', G5: 'a', G6: 'n', G7: 's'},
  {H3: 'f', H4: 'e', H5: 'm', H6: 'm', H7: 'e'},
  {B9: 'l', C9: 'e', D9: 's', E9: 'b', F9: 'i', G9: 'a', H9: 'n'},
]

//create a const for random letters assign a random letter to open strings that are not set by winning words
const randomLetters = [
  {A9: '',B0: '', B1: '', B2: '', B3: '', B4: '', B5: '', B6: '', B7: '', B8: '', C0: '', C1: '', C2: '', C3: '', C4: '', C5: '', C6: '', C7: '', C8: '', D0: '', D1: '', D8: '', E0: '', E1: '', E2: '', E3: '', E4: '', E5: '', E6: '', E7: '', E8: '', F3: '', F4: '', F5: '', F6: '', F7: '', F8: '', G0: '', G1: '', G2: '', G8: '', H0: '', H1: '', H2: '', H8: '', I0: '', I1: '', I2: '', I3: '', I4: '', I5: '', I6: '', I7: '', I8: '', I9: '', J0: '', J1: '', J2: '', J3: '', J4: '', J5: '', J6: '', J7: '', J8: '', J9: ''}
]


/*---------------------------- Variables (state) ----------------------------*/
//include variables with the term let for board (build logic), turnsleft, winner, message (winning and losing) (why is board One not working)
let winner, turn, boardVal, loser
let board = []
let completedWords = []
let words = []
let wordPlaces = []
let allsquaresclicked=[]
/*------------------------ Cached Element References ------------------------*/
// square choices are equal to each div in class column
const squareChoices = document.querySelectorAll('.column')
// include message every time someone chooses a wrong letter or winning word using query selector
const message = document.querySelector('#message')  
// include reset button using query selector
const resetButton = document.querySelector('#reset-button')
const lightDarkButton = document.querySelector('#light-dark-button')
let listwords = document.querySelectorAll('.listword')
const trophybox = document.querySelector('.trophybox')
const body = document.querySelector('body')
/*----------------------------- Event Listeners -----------------------------*/
//squareChoices targeting the item click square to invoke handle click function
squareChoices.forEach(function(squareChoice){
  squareChoice.addEventListener('click', handleClick)
})
//listens for the click of the reset button and is then initialized
resetButton.addEventListener('click', init)
//lightdark button to click for a light mode versus dark mode
lightDarkButton.addEventListener('click', dark)
/*-------------------------------- Functions --------------------------------*/
//initializer for the turnsLeft, winner, render
init()
function init (){
  turn = 40
  winner = false
  loser = false
  boardVal = 0
  board = [null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,]
  listwords.forEach(word => {
      word.classList.remove('strikethrough')
    }) 
  completedWords=[]
  words=[]
  wordPlaces=[]
  allsquaresclicked=[]
  removeRainbow()
  removeStrikethrough()
  resetBoard()
  hideImages ()
  render ()
}

//reset sets up board for both winning and losing letters by implementing functions
function resetBoard(){
  setBoard()
  getRandomletter()
}

function render(){
  //if turn is not 0 and winner is not true, then you have turns left
  if (turn !== 0){
    if (winner !== true){
    message.textContent = `You have ${turn} clicks left`
    }
    //otherwise message loser because turn is 0
  } else if (turn === 0){
    messageLoser()
  }
}

function setBoard (){
  //for each object we iterate through the winning words array and look at each object
  winningWordsa.forEach(obj=> {
    //we used object.keys we iterate through in order to get keys as a string
    Object.keys(obj).forEach(key=>{
      const winningLetter = document.querySelector(`#${key}`)
      //dynamically pass a key through an object to access a value by using bracket notation
      winningLetter.textContent = obj[key]
    })
  })
}

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
      })
    })
}

function handleClick(event) {
  const sqrIdx = event.target.id
  //check if the square has already been clicked
  if(allsquaresclicked.includes(sqrIdx)){
    return
  }
  //continue the game if there is no winner or loser
  if (winner !== true && loser !== true){
  //turn is subtracted every time a box is clicked
  turn--
  //every time we click on square, coordinates are added
  allsquaresclicked.push(sqrIdx)
  //for each word
  winningWordsa.forEach((word) => {
    //if truthy that word is within the sqrIdx array
    if (word[sqrIdx]) {
      //turn the square rainbow
      rainbow(event.target.id)
      //add board value
      updateBoard()
      //cross out word
      crossout()
      //check if the user has won
      checkWinword()
    }
  })
  render()
  }
  //otherwise the game is over
  else {
    messageLoser()
  }
}

//updateBoard will change the null spot to add 1 if the letter is in the board
function updateBoard(){
  //add board val every time a winning square is clicked for the first time
    boardVal++
}

function checkWinword(){
  //if current boardval = the amount of correct square choices
  let total = winningWordsa.reduce((acc, word) => {
    //we are adding the length of each object in the array to get a total value
    return acc + Object.keys(word).length
    //starting value is 0
  }, 0)
  //if the boardval is equal to the total amount of correct words
  if (boardVal === total){
    winnerWins()
  }
}

function rainbow (id) {
  //created element which is equivalent to the the div you click on 
  const element = document.querySelector(`#${id}`)
  //add classlist to that particular element
  element.classList.add('rainbow')
}

//removes rainbow class when reset is pressed
function removeRainbow (){
  //for each square remove anything with the class list rainbow
  squareChoices.forEach(square => {
    square.classList.remove('rainbow')
  })
}

function crossout(){
  //iterate through each word object to see if it exists in the array
  winningWordsa.forEach(wordObject => {
    //makes all the values from object.values into one string with join to create singular words
    let word = Object.values(wordObject).join('')
    words.push(word)
    //finds all of word's locations
    let wordPlace = Object.keys(wordObject)
    wordPlaces.push(wordPlace)
  })
  //have to access word places array of arrays by using forEach to find the index corresponding to the word Place
  wordPlaces.forEach((wordPlace, idx) => {
    // use every and includes to see the array exists within the array - we want to see if all the word places are inside allsquaresclicked
    let hasAll = wordPlace.every(elem => allsquaresclicked.includes(elem))
      if (hasAll === true) {
        //we want the idx (location) of the words to be pushed inside the completed words array
      completedWords.push(words[idx])
      }
  })
//iterate through each completed word
completedWords.forEach(word => {
  //console.log(`Trying to cross out word: ${word}`)
  //strikeout word using class list add
  const wordfound = document.querySelector(`#${word}`)
  wordfound.classList.add('strikethrough')
})
}

//remove strikethrough after reset
function removeStrikethrough(){
  //iterate through each word object to see if it exists in the array
  winningWordsa.forEach(wordObject => {
    //makes all the values from object.values into one string with join to create singular words
    let word = Object.values(wordObject).join('')
    words.push(word)
    //finds all of word's locations
    let wordPlace = Object.keys(wordObject)
    wordPlaces.push(wordPlace)
  })
  //have to access word places array of arrays by using forEach to find the index corresponding to the word Place
  wordPlaces.forEach((wordPlace, idx) => {
    // use every and includes to see the array exists within the array - we want to see if all the word places are inside allsquaresclicked
    let hasAll = wordPlace.every(elem => allsquaresclicked.includes(elem))
      if (hasAll === true) {
        //we want the idx (location) of the words to be pushed inside the completed words array
      completedWords.push(words[idx])
      }
  })

  //each time we have a completed word
completedWords.forEach(word => {
  //strikeout word
  const wordfound = document.querySelector(`#${word}`) 
  //removes class list of strikethrough
  wordfound.classList.remove('strikethrough')
})
}

function winnerWins(){
  //reassign value of winner to true
  winner = true
  //message winner
  messageWinner()
  playBornThisWay()
}

function messageWinner(){
  //message gold trophy winner if found in 6 turns
  if (turn > 4){
    message.textContent = `Congratulations! You win a golden rainbow trophy!`
    winner = true
    //create variable golden image to add to DOM
    let goldenimg = document.createElement('img')
    //set golden image's source
    goldenimg.src = './assets/images/gold.png'
    //add the golden image to the classlist trophybox
    goldenimg.classList.add('trophybox')
    //set id of gold image
    goldenimg.setAttribute('id', 'golden-image')
    document.querySelector('.trophybox').style.display='flex'
    trophybox.appendChild(goldenimg)
  }
  //message silver trophy winner if found in 7 turns
  else if (turn == 3){
    message.textContent = `Congratulations! You win a silver rainbow trophy!`
    //create variable silver image to add to DOM
    let silverimg = document.createElement('img')
    //set silver image's source
    silverimg.src = './assets/images/silver.png'
    //add the silver image to the classlist trophybox
    silverimg.classList.add('trophybox')
    //set id of silver image
    silverimg.setAttribute('id', 'silver-image')
    document.querySelector('.trophybox').style.display='flex'
    trophybox.appendChild(silverimg)
  }
  //message bronze winner if found in 8 or more turns
  else if(turn <= 2) {
    message.textContent = `Congratulations! You win a bronze rainbow trophy!`
    //create variable golden image via create element
    let bronzeimg = document.createElement('img')
    //set golden image's source
    bronzeimg.src = './assets/images/bronze.png'
    //add the golden image to the classlist trophybox
    bronzeimg.classList.add('trophybox')
    //set id of bronze image
    bronzeimg.setAttribute('id', 'bronze-image')
    document.querySelector('.trophybox').style.display='flex'
    trophybox.appendChild(bronzeimg)
  }
  console.log(winner, 'winnerwins')
}

function messageLoser(){
  //loser is reassigned to true
  loser=true
  message.textContent = `Better luck next time! You win a photo of a golden trophy!`
  //create trophies image to add to DOM
  let trophiesimg = document.createElement('img')
  //set golden image's source
  trophiesimg.src = './assets/images/trophies.png'
  //add the golden image to the classlist trophybox
  trophiesimg.classList.add('trophybox')
  //set id of trophies image
  trophiesimg.setAttribute('id', 'trophies-image')
  document.querySelector('.trophybox').style.display='flex'
  trophybox.appendChild(trophiesimg)
  console.log(loser, 'loser loses')
  playPhotograph()
}

function hideImages(){
  //class trophy box is no longer displayed
  document.querySelector('.trophybox').style.display='none'
  //remove gold trophy by selecting id
  let goldenimg = document.querySelector('#golden-image')
  //check if gold image is there then remove
  if(goldenimg){
    goldenimg.remove()
  }
  //remove silver trophy by selecting id
  let silverimg = document.querySelector('#silver-image')
  //check if silver image is there then remove
  if(silverimg){
    silverimg.remove()
  }
  //remove bronze trophy by selecting id
  let bronzeimg = document.querySelector('#bronze-image')
  //check if bronze image is there then remove
  if(bronzeimg){
    bronzeimg.remove()
  }
  //remove trophies photo by selecting id
  let trophiesimg = document.querySelector('#trophies-image')
  //check if trophies image is there then remove
  if(trophiesimg){
  trophiesimg.remove()
  }
}

function dark(){
  //body can now be put into dark mode
  body.classList.toggle('dark')
  //select h2 in the html to make it usable
  const headerTwo = document.querySelector('h2')
  //headerTwo can now be put into dark mode
  headerTwo.classList.toggle('dark')
  //select h3 in the html to make it usable
  const headerThree = document.querySelector('h3')
  //headerThree can now be put into dark mode
  headerThree.classList.toggle('dark')
  //select buttons in the html to make it usable
  const buttons = document.querySelectorAll('button')
  //loop through the node list and toggle the class for each button
  buttons.forEach(button => {
    button.classList.toggle('dark')
  })
  if (body.classList.contains('dark')){
    lightDarkButton.innerText = 'Light Mode'
  } else {
    //otherwise change to light mode
    lightDarkButton.innerText = 'Dark Mode'
  }
}

function checkDarkPref() {
  if (
    window.matchMedia('(prefers-color-scheme:dark)').matches &&
    body.className !== 'dark'
  ) {
    dark()
  }
}
checkDarkPref()