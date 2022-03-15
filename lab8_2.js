let balance = 0;

addBalance();
playGame();

function playGame() {

    let userWantsToPlay = true;

    while (userWantsToPlay) {
        let input = getInput();
        let invalidNumber = isNaN(input);
        let gamblingTooMuch = Number(input) > balance;
        userWantsToPlay = !(input == 'exit');

        if (!userWantsToPlay) {
            break
        } else if (invalidNumber) {
            alert('Please enter a valid number');
            continue;
        } else if (gamblingTooMuch) {
            alert("You're gambling too much, your number should be less than the balance.");
            continue;
        }

        alert('Passed, continue with game logic');

        // let result = gamble(Number(input));

        // if (result == 'win') {
        //     modifyBalance('add');
        //     displayMessage('win');
        // } else {
        //     modifyBalance('subtract');
        //     displayMessage('lose');
        // }

        // if (balance == 0) {
        //     break;
        // }
    }

    alert('Bye bye');
}

function addBalance() {
    let invalidInput = true;
    let input;

    while (invalidInput) {
        input = prompt('How much did you want to add?');
        invalidInput = isNaN(input);
        if (invalidInput) {
            alert('Please enter a valid number');
        } 
    }
    balance = Number(input);
    alert('Your current balance is ' + balance + '. Go ahead.')
}

function getInput() {
    return prompt('Your current balance is ' + balance + '. You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance.');
}