let balance = 0;

addBalance();
playGame();

function playGame() {

    // Initializes to true to run while loop.
    let userWantsToPlay = true;

    while (userWantsToPlay) {
        let input = getInput();
        let invalidNumber = isNaN(input);
        let gamblingTooMuch = Number(input) > balance;
        userWantsToPlay = input != 'exit';

        if (!userWantsToPlay) {
            break
        } else if (invalidNumber) {
            alert('Please enter a valid number');
            continue;
        } else if (gamblingTooMuch) {
            alert("You're gambling too much, your bet should be less than the balance.");
            continue;
        }

        // Passed conditions, which means input is a number, user has enough credits and still wants to play.

        let youWin = gamble();
        let amount = Number(input);

        if (youWin) {
            modifyBalance('add', amount);
            displayMessage('win');
        } else {
            modifyBalance('subtract', amount);
            displayMessage('lose');
        }

        if (balance == 0) {
            break;
        }
    }

    // Exitted while loop, either because user decided to quit or ran out of credits.
    alert('Bye bye');
}

function addBalance() {
    let input;

    while (true) {
        input = prompt('How much did you want to add?');
        if (isNaN(input)) {
            alert('Please enter a valid number');
            continue;
        } else {
            break;
        }
    }

    balance = Number(input);
    alert('Your current balance is ' + balance + '. Go ahead.')
}

function getInput() {
    return prompt('Your current balance is ' + balance + '. You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance.');
}

function gamble() {
    let slotMachineNumber = Math.floor(Math.random() * 100 + 1);
    let chanceOfLosing = 70;
    return slotMachineNumber > chanceOfLosing;
}

function modifyBalance(operation, amount) {
    switch (operation) {
        case 'add':
            balance += amount;
            break;
        case 'subtract':
            balance -= amount;
            break;
    }
}

function displayMessage(type) {
    let message = 'Your current balance is ' + balance + '. Take time to decide whether to continue playing.';

    switch (type) {
        case 'win':
            message = 'You win! ' + message;
            break;
        case 'lose':
            if (balance == 0) {
                message = 'You lose. Your current balance is ' + balance + '. You are done for the game.';
            } else {
                message = 'You lose. ' + message;
            }
            break;
    }

    alert(message);
}