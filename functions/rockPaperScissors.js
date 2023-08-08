const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock') {
      return userInput
    } else if (userInput === 'paper') {
      return userInput
    } else if (userInput === 'scissors') {
      return userInput
    } else if (userInput === 'bomb') {
      return userInput
    } else {
      console.log('Invalid user input..')
    }
  }
  
  //console.log(getUserChoice('rock'))
  
  const getComputerChoice = () => {
    let computerChoiceValue = ''
    let computerNumber =  Math.floor(Math.random() * 3)
  
    if (computerNumber === 0) {
      return computerChoiceValue = 'rock'
    } else if (computerNumber === 1) {
      return computerChoiceValue = 'paper'
    } else if (computerNumber === 2) {
      return computerChoiceValue = 'scissors'
    } 
  }
  
  //console.log(getComputerChoice())
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'User WON! They used BOMB!'
    }
  
    if (userChoice === computerChoice) {
      return 'tie'
    }
  
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
   if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
       return 'the computer won!'
     } else {
       return 'You won!'
     }
   }
  
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb')
    let computerChoice = getComputerChoice()
  
    console.log(determineWinner(userChoice,computerChoice))
  
    console.log(`User Choice is: ${userChoice} - Computer Choice is: ${computerChoice}`)
  }
  
  playGame()
  //console.log(determineWinner(getUserChoice('rock'), getComputerChoice()))
  