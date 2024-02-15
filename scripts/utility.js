function hideElementById(elementId){
    const element = document.getElementById(elementId);
    const classAdd = element.classList.add('hidden');

}
function addElementById(){
    const element = document.getElementById('playStartArea');
    const classRemove = element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStrings.split('');
    const indexNumber = Math.floor(Math.random() * alphabets.length);
    const randomAlphabet = alphabets[indexNumber];
    return randomAlphabet;
    


}
function adBackgroundColorById(inputId){
    const addBgColor = document.getElementById(inputId);
    addBgColor.classList.add('bg-[#fda4af]')
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    const newScore = parseInt(text);
    const finalScore = newScore + 1;
    element.innerText = finalScore;
    return finalScore;
}
function removeBackgroundColorById(inputId){
    const addBgColor = document.getElementById(inputId);
    addBgColor.classList.remove('bg-[#fda4af]')
}


function getElementTextValueById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    const newScore = parseInt(text);
    const finalScore = newScore - 1;
    element.innerText = finalScore;
    return finalScore;

}

function resetScore(){
    const scoreElement = document.getElementById('current-score');
    scoreElement.innerText = '0';
}
function resetDisplayAlphabet(){
    const displayAlphabet = document.getElementById('displayAlphabet');
    displayAlphabet.innerText = '';
}

function getElementByUseId(element){
    const currentAlphabet = document.getElementById('displayAlphabet');
    const text = currentAlphabet.innerText;
    return text;
}
