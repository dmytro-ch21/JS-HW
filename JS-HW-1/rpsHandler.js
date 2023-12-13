document.getElementById('gameForm').addEventListener('submit', function(event){
    event.preventDefault();
    let userSelection = document.querySelector('input[name=choice]:checked').value;
    
    if(userSelection === null){
        alert("Invalid input! Please choose ROck, Paper or Scissors");
        return;
    }

    const result = determineWinner(userSelection, computerIndexChoice());
    alert(result);
})


function determineWinner(userChoice, computerChoice){
    const playOptions = ['paper', 'scissors', 'rock']
    let userIndexOption = playOptions.indexOf(userChoice);

    if (userIndexOption === computerChoice){
        return `It's a tie! \n You selected: ${playOptions[userIndexOption]} \n Computer selection ${playOptions[computerChoice]}`
    }

    if(userIndexOption === computerChoice + 1 || userIndexOption === computerChoice - 2){
        return `You WON =)${playOptions[userIndexOption]} beats ${playOptions[computerChoice]}`
    }
    
    return `You LOST =( ${playOptions[computerChoice]} beats ${playOptions[userIndexOption]}`
}

function computerIndexChoice(){
    const playOptions = ['paper', 'scissors', 'rock']
    return Math.floor(Math.random() * playOptions.length)
}