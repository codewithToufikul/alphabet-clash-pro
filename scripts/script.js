function continueGame(){
    const getAlphabet = getRandomAlphabet();
    const displayAlphabet = document.getElementById('displayAlphabet');
    displayAlphabet.innerText = getAlphabet;
    adBackgroundColorById(getAlphabet)
}

function play(){
    hideElementById('paygroudInterface')
    addElementById('playStartArea')
    resetDisplayAlphabet();
    continueGame()

}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);
let = lastScore;
function handleKeyboardKeyUpEvent(chapAlphabet){

    const playerPressed = chapAlphabet.key;
    if(playerPressed === 'Escape'){
        scoreResultArea()
    }

    const displayAlphabet = document.getElementById('displayAlphabet');
    const currentAlphabet = displayAlphabet.innerText;
    const expectedAlphabet =currentAlphabet.toLowerCase();
    
    if (playerPressed === expectedAlphabet){
        lastScore = getElementTextById('current-score');
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const updateLife = getElementTextValueById('current-life')
        if (updateLife <= 0){
            hideElementById('playStartArea')
            const element = document.getElementById('ResultScore');
            element.classList.remove('hidden');
            const mainScore = document.getElementById('mainScore');

            mainScore.innerText = lastScore;
        }
    }
    
}

function scoreResultArea(){
    hideElementById('ResultScore');
    const element = document.getElementById('playStartArea');
    const classRemove = element.classList.remove('hidden');
    const currentLife = document.getElementById('current-life');
    currentLife.innerText = '5'
    resetScore();
    const resetAlphabet = getElementByUseId('displayAlphabet');
    removeBackgroundColorById(resetAlphabet);
    continueGame();
}