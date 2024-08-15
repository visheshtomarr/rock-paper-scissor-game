// Creates an object to store the score of user.
let score = {
    wins: 0,
    lost: 0,
    tied: 0,
} ;

// Onclick function that will reset the user's score.
function resetScore() {
    score.wins = 0 ;
    score.lost = 0 ;
    score.tied = 0 ;

    alert(`
    Score has been reset.
    Wins: ${score.wins}, Lost: ${score.lost}, Tied: ${score.tied}`) ;
}

// Onclick function that will generate a random system choice in response to the choice of user.
function generateRandomChoice() {
    // 'Math.random()' function will generate a random value between 0 and 1.
    let randomNumber = Math.random() * 3 ;
    if (randomNumber < 1) {
        return 'rock' ;
    }
    else if (randomNumber >= 1 && randomNumber < 2) {
        return 'paper' ;
    }
    else {
        return 'scissor' ;
    }
}

// Onclick function that will take the user's choice and system's randomly generated choice,
// and compute result. 
function getResult(userMove, systemMove) {
    if (userMove === 'Rock') {
        if (systemMove === 'paper') {
            score.lost++ ;
            return 'Computer won!' ;
        }
        else if (systemMove === 'scissor') {
            score.wins++ ;
            return 'Player won!' ;
        }
        else {
            score.tied++ ;
            return 'Tied!' ;
        }
    } 
    else if (userMove === 'Paper') {
        if (systemMove === 'scissor') {
            score.lost++ ;
            return 'Computer won!' ;
        }
        else if (systemMove === 'rock') {
            score.wins++ ;
            return 'Player won!' ;
        }
        else {
            score.tied++ ;
            return 'Tied!' ;
        }
    }
    else {
        if (systemMove === 'rock') {
            score.lost++ ;
            return 'Computer won!' ;
        }
        else if (systemMove === 'paper') {
            score.wins++ ;
            return 'Player won!' ;
        }
        else {
            score.tied++ ;
            return 'Tied!' ;
        }
    }
}

// Onclick function that will display the final result in a webpage popup.
function showResult(userMove, systemMove, result) {
    // Store the updated value of score in local storage.
    localStorage.setItem('Score', JSON.stringify(score)) ;

    alert(`
    Player's choice is ${userMove}, computer's choice is ${systemMove}. 
    
    ${result}
    
    Wins: ${score.wins}, Lost: ${score.lost}, Tied: ${score.tied}`) ;
}