//lists winningwords for each board, a through e,
//board A - list winning words - numbers 0 0 -9
const winningWordsa = [
  {A1: '0', A2: 'U', A3: 'T'},
  {B5: 'Q', B6: 'U', B7: 'E', B8: 'E', B9: 'R'},
  {E2: 'B', E3: 'I', E4: 'S', E5: 'E', E6: 'X', E7: 'U', E8: 'A', E9: 'L'},
  {H5: 'G', H6: 'A', H7: 'Y'},
  {C0: 'R', D0: 'A', E0: 'I', F0: 'N', G0: 'B', H0: 'O', I0: 'W'},
  {G2: 'D', H2: 'R', I2: 'A', J2: 'G'}
]

const winningWordsb = [
  {A0: 'N', A1: 'O', A2: 'N', A3: 'B', A4: 'I', A5: 'N', A6: 'A', A7: 'R', A8: 'Y'},
  {D2: 'G', D3: 'E', D4: 'N', D5: 'D', D6: 'E', D7: 'R'},
  {F0: 'G', F1: 'A', F2: 'Y'},
  {G3: 'T', G4: 'R', G5: 'A', G6: 'N', G7: 'S'},
  {H3: 'F', H4: 'E', H5: 'M', H6: 'M', H7: 'E'},
  {B9: 'L', C9: 'E', D9: 'S', E9: 'B', F9: 'I', G9: 'A', H9: 'N'}
]

//function randomWinningWordA through E using math.random and winningwords.length
//export the function randomWinningWordsA - E