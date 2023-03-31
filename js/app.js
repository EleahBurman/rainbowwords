//Choice of game - "Rainbow Words"
//Theme - "Rainbow (lgbt)""
//Find 6 lgbt words in the board in 10 turns - there will be 6 board options (A-E). Plays "Born this Way" when you find all 6 words and words turn rainbow. Win gold, silver, or bronze medal image based on number of guesses. You can toggle between a light rainbow theme and a dark rainbow theme

/*-------------------------------- Constants --------------------------------*/
//import randomWinningwordsa, randomWinningwordsb, randomWinningWwordsc, randomWinningwordsd, randomWinningwordse from board.js
//import audio from audio.js
//winning squares given for each board with the string letters attached to each spot - in total there will be 6 words correct on each of the 6 boards - total of 36 words


/*---------------------------- Variables (state) ----------------------------*/
//include variables with the term let for board, turnsleft, winner, message (winning and losing)
/*------------------------ Cached Element References ------------------------*/
// include losingSquares (random letters), using query selector, loop, math floor and math random
// inclue message every time someone chooses a wrong word using query selector
// include reset button using query selector
// include winning message telling them if they get gold, silver or bronze trophies
/*----------------------------- Event Listeners -----------------------------*/
//squareChoices targeting the item click square to invoke handle click flunction
//listens for the click of the reset button and effects function turn
//LightvDark button to click for a light rainbow mode versus dark rainbow mode
/*-------------------------------- Functions --------------------------------*/
//initializer for the board, turnsLeft, winner (red, orange yellow, green, blue and purple), render
//function render that has updateBoard, renderBoard, updateMessage, winningMessage within it
//function updateboard using if, else: if its a winning option it will turn rainbow using innerHTML and an image source (each letter will be photoshopped or a graphic video of a rainbow word turning), else you are sent a losing message using innerHTML
//function renderboard - uses for Each as it goes through the board
//function updateMessage using if winning option, else if losing option
//function winningMessage if and else if for gold (6 guesses), silver(7-8 guesses), and bronze(9 to 10 guesses)  using innerHTML, also include playBornThisWay (will include clip in a separate audio.js)
//function handleClick using parseInt to make each space into numbers for each board - board one is A1-100, board 2 is B1-100 for each space. There will be 6 boards. Include checkWinWord and render
//function turn, using for loop that needs to be less than 10 turns. Resets with reset button
//functionCheckWinWord using foreach and mathabs
//function toggleLightRainbow using classes can toggle from a lighter rainbow scheme to a darker rainbow scheme
//function checkDark will check if someone prefers dark mode over light mode using window match media and class name
