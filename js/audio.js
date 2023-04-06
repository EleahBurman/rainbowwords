let photograph = new Audio('../assets/audio/Photograph.mp3')
let bornThisWay = new Audio('../assets/audio/BornThisWay.mp3')

function playPhotograph() {
  photograph.volume = 0.25
  photograph.play()
}

function playBornThisWay() {
  bornThisWay.volume = 0.25
  bornThisWay.play()
}

export {
  playPhotograph,
  playBornThisWay
}