let scoreStr = localStorage.getItem('Score') ;
let score ;
resetScore(scoreStr) ;

// Moving the initialization of score in the resetScore() function.
//
// // Creates an object to store the score of user.
// score = {
//     wins: 0,
//     lost: 0,
//     tied: 0,
// } ;

// Onclick function that will reset the user's score.
function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
        wins: 0,
        lost: 0,
        tied: 0,
    } ;
    
    // Function to display score.
    score.displayscore = function() {
        return `Score: Wins: ${score.wins}, Lost: ${score.lost}, Tied: ${score.tied}` ; 
    }

    showResult() ;
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

    // alert(`
    // Player's choice is ${userMove}, computer's choice is ${systemMove}. 
    
    // ${result}
    
    // ${score.displayscore()}`) ;

    // Instead of showing the result in a popup, we will display it on the webpage itself.
    document.querySelector('#user-move').innerText = 
        userMove ? `Player's choice is ${userMove}` : '' ;

    document.querySelector('#system-move').innerText = 
        systemMove ? `Computer's choice is ${systemMove}` : '' ;

    document.querySelector('#result').innerText = 
        result ? result : '' ;
    
    document.querySelector('#score').innerText = score.displayscore() ;
}