let userChoice;
let userScore = 0;
let computerScore = 0;
let totalScore = 0;
let computerChoice = findCompChoice();
function findCompChoice(){
    let random = Math.floor(Math.random()*3);
    if(random == 0){
   return 'rock';
} else if (random == 1){
    return 'paper';
} else { return 'scissors'}};


function playGame (){
    
   userChoice = window.prompt('Welcome to Rock, Paper, Scissors: To Play pass in either rock, paper or scissors');
   console.log(userChoice);
    if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !=='scissors' && userChoice !=='Rock' && userChoice !=='Paper' && userChoice !=='Scissors'){
      alert('You must choose either rock, paper or scissors');
      playGame();
    }
   
    alert('You have chose: ' + userChoice + ' and the computer has chosen ' + computerChoice);

    compareChoice();

    alert('Computer Score: ' + computerScore + 'User Score: '  + userScore);
    
    playGame();
}

function compareChoice(){
    if(computerChoice === userChoice){
       alert('Its a tie' );
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        userChoice++;
        alert('User has won' );
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        computerScore++;
        alert('Computer has won' );
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        computerScore++;
        alert('Computer has won' );
    }
    else if(computerChoice === 'scissors'&& userChoice === 'rock'){
        userScore++;
        alert('User has won' );
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        computerScore++;
        alert('Computer has won' );
        
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors'){
        userScore++;
        alert('User has won' );
       
    }

}


playGame();