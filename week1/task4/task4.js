const startBtn=document.getElementById('start')
const restartBtn=document.getElementById('restart')
const consol=document.getElementById('console')
const guestCurrent=document.getElementById('guessCurrent')
const pcGuessArr=document.getElementById('guessArr')
const userResult=document.getElementById('usrResult')
const userNum=document.getElementById('usrNum')
var lowerCount=1
var upperCount=100
var guess
var guesses=''
const guessArr=[]
function startGame(){
    startBtn.style.display='none'
    restartBtn.style.display='block'
    consol.style.display='block'
    setTimeout(() => {
        getPcGuess()
    }, 1000);
}
function restartGame(){
    window.location.reload();
}
function getPcGuess(){
    guess = Math.floor(Math.random() * (upperCount - lowerCount + 1)) + lowerCount;
    guesses =[guess,...guesses]
    for (var i = 0; i < guessArr.length; i++) {
        guesses += guessArr[i]+', ';
        
    }
    guestCurrent.textContent=guess
    pcGuessArr.textContent=guesses
    console.log(guesses);
}

function lower() {
    upperCount = guess - 1;
    getPcGuess();

}

function higher() {
    lowerCount = guess + 1;
    getPcGuess();
    
}

function correct() {
    lowerCount = 1;
    upperCount = 100;
    userResult.style.display='block'
    userNum.textContent=' '+guess
    consol.style.display='none'


}