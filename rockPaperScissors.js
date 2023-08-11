const getUserChoice => userInput{
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors') {
    return userInput;
  } else {
    console.log('Error! Please input a valid entry.')
  }
};

userInput = userInput.toLowerCase();
