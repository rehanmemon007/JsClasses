function getUserChoice(userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === "bear" || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return 'Please enter Valid option'
    }
}
// console.log(getUserChoice('bear'))
// console.log(getUserChoice('Human'))
// console.log(getUserChoice('GUNsss'))

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}
// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie'
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'you have been mauled by bear'
        } else {
            return 'you have disarmed a gun'
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'you have been shot by gun'
        } else {
            return 'you have mauled a bear'
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'your gun has been disarmed '
        } else {
            return 'you have shot a bear'
        }
    }  
}
// console.log(determineWinner('bear', 'human'))
// console.log(determineWinner('bear', 'gun'))

function playGame(){
    var promptusesChoice = prompt('Please choose bear, human or gun')
    var userChoice = getUserChoice(promptusesChoice)
    var computerChoice = getComputerChoice();
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame()



