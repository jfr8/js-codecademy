let userName = '';
userName ? console.log('Hello, Jane!') : console.log('Hello!')

let userQuestion = 'Question goes here?'

console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber == 1) {
  console.log('It is certain')
} else if (randomNumber == 2 ) {
  console.log('It is decidedly so')
} else if (randomNumber == 3) {
  console.log('Reply hazy try again')
} else if (randomNumber == 4) {
  console.log('Cannot predict now')
} else if (randomNumber == 5) {
  console.log('Do not count on it')
}  else if (randomNumber == 6) {
  console.log('My sources say no')
}  else if (randomNumber == 7) {
  console.log('Outlook not so good')
} else if (randomNumber == 8) {
  console.log('Signs point to yes')
} 