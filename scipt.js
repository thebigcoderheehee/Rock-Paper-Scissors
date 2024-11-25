function playgame(PlayerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    document.getElementById('players-choice').textContent = `Your Choice: ${PlayerChoice}`
    document.getElementById('computers-choice').textContent = `Computer's Choice: ${computerChoice}`

    let outcome = ""
    if (PlayerChoice === computerChoice) {
        outcome = 'Its A Draw!'
    } else if (
        (PlayerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (PlayerChoice === 'Paper' && computerChoice === 'Rock') ||
        (PlayerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        outcome = 'You Win!!! Yay For You!!!'
    } else {
        outcome = 'You Lose. Try Again.'
    }
    document.getElementById('outcome').textContent = `Result: ${outcome}`
    document.getElementById('try-again').style.display = 'inline-block'
    const ChoiceButtons = document.querySelectorAll('.choice');
    ChoiceButtons.forEach(button => button.disabled = true)
}

function resetgame() {
    document.getElementById('players-choice').textContent = 'Your Choice: '
    document.getElementById('computers-choice').textContent = 'Computers Choice: '
    document.getElementById('outcome').textContent = 'Result: ' 
    document.getElementById('try-again').style.display = 'none'
    const ChoiceButtons = document.querySelectorAll('.choice');
    ChoiceButtons.forEach(button => button.disabled = false)
}