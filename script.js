function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissor') {
        if (computerMove === 'rock') {
            result = 'You lose. 🪨 beats ✂️';
        } else if (computerMove === 'paper') {
            result = 'You win! ✂️ beats 📄';
        } else if (computerMove === 'scissor') {
            result = 'It\'s a tie! Both picked ✂️';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'rock') {
            result = 'You win! 📄 beats 🪨';
        } else if (computerMove === 'paper') {
            result = 'It\'s a tie! Both picked 📄';
        } else if (computerMove === 'scissor') {
            result = 'You lose. ✂️ beats 📄';
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'rock') {
            result = 'It\'s a tie! Both picked 🪨';
        } else if (computerMove === 'paper') {
            result = 'You lose. 📄 beats 🪨';
        } else if (computerMove === 'scissor') {
            result = 'You win! 🪨 beats ✂️';
        }
    }

    // Display the result
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = result;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
    }

    return computerMove;
}
