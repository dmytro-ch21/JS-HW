document.getElementById('text-input').addEventListener('submit', function(event){
    event.preventDefault();
    var userSelection = document.getElementById('textInput').value.toLowerCase();
    
    const playOptions = ['paper', 'scissors', 'rock']
    let computerSelection = Math.floor(Math.random() * playOptions.length)
    let userIndexOption = playOptions.indexOf(userSelection)

    if(userIndexOption === computerSelection + 1 || userIndexOption === computerSelection - 2){
        console.log("You WON =) " + playOptions[userIndexOption] + " beats " + playOptions[computerSelection])
    } else if (userIndexOption === computerSelection){
        console.log("It's a tie! " + '\n You selected: ' + playOptions[userIndexOption] + '\n Computer selection ' + playOptions[computerSelection])
    } else {
        console.log("You LOST =( " + playOptions[computerSelection] + " beats " + playOptions[userIndexOption])
    }
})