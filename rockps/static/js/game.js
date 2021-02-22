const gameWrap = function () {
    let pScore = 0;
    let cScore = 0;
    
    // start the game functions
    const startGame = function () {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', function () {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    const playMatch = function () {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(function(handImage) {
            handImage.addEventListener('animationend', function() {
                handImage.style.animation = "";
            });
        })
        
        // Computer Options.
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(function(button){
            button.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(function() {
                    // Update images for selected choice.
                    playerHand.src = `static/images/${button.textContent}.png`;
                    computerHand.src = `static/images/${computerChoice}.png`;
                    // calling the comparisom function and passing our variables to be compared.
                    compareHands(button.textContent, computerChoice);
                    // Updating the score with the score function
                    updateScore();
                }, 2000);

                // Animation keyframes.
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

    }

    const compareHands = function(playerChoice, computerChioce) {
        // Update text in the winner class text field.
        const winner = document.querySelector('.winner')
        if(playerChoice === computerChioce) {
            winner.textContent = "It is a tie";
            return;
            //for tie 
        }

        if(playerChoice == "rock") {
            //Check for Rock.
            if(computerChioce === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                return;
            }
            else {
                winner.textContent = "Computer wins";
                cScore++
                return;
            }
        }

        if(playerChoice == "paper") {
            //Check for Rock.
            if(computerChioce === "scissors") {
                winner.textContent = "Computer wins";
                cScore++;
                return;
            }
            else {
                winner.textContent = "Player wins";
                pScore++
                return;
            }
        }

        if(playerChoice == "scissors") {
            //Check for Scissors.
            if(computerChioce === "rock") {
                winner.textContent = "Computer Wins";
                cScore++
                return;
            }
            else {
                winner.textContent = "Player wins";
                pScore++
                return;
            }
        }
    }


    const updateScore = function() {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }


    /* start all functions inside out wrapper we must call them */
    startGame();
    playMatch();
    updateScore();
}


/*  Start wrapper function that we wrap all our functions inside */
gameWrap();