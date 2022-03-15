let balance = 0;

addBalance();
// playGame();

function playGame() {

    let userWantsToPlay = true;

    while (userWantsToPlay) {
        let input = getInput();
        let validNumber = checkForNumber(input);
        userWantsToPlay = checkForExit(input);

        if (!userWantsToPlay || !validNumber) {
            break
        }

        let result = gamble();

        if (result == 'win') {
            modifyBalance('add');
            displayMessage('win');
        } else {
            modifyBalance('subtract');
            displayMessage('lose');
        }

        if (balance == 0) {
            break;
        }
    }
}

function addBalance() {
    let invalidInput = true;
    let input;

    while (invalidInput) {
        input = prompt('How much did you want to add?');
        invalidInput = (checkForNumber(input));
        if (invalidInput) {
            alert('Please enter a valid number');
        } 
    }
    balance = Number(input);
    alert('Your current balance is ' + balance + '. Go ahead.')
}

function checkForNumber(input) {
    return isNaN(input);
}

function getInput() {
    prompt('')
}