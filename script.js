'use strict';

const rollDice=document.querySelector('.btn--roll')

const currScoreElArr=document.querySelectorAll('.current-score')
const totalScore=document.querySelectorAll('.score')
const players=document.querySelectorAll('.player')
const diceImg=document.querySelector('.dice')
const playerName=document.querySelectorAll('.name')
const holdBtn=document.querySelector('.btn--hold')
const newGameBtn=document.querySelector('.btn--new')

let activePlayer,currScore,highScore,playing;
const startingConditions=function(){
   activePlayer=0
   currScore=0;
   highScore=new Array(0,0)
   playing=true ;
}

startingConditions()
const switchPlayer=function(){
  currScore=0;
  currScoreElArr[activePlayer].textContent=currScore;
    players[activePlayer].classList.toggle('player--active');
   

    activePlayer= activePlayer===0? 1: 0;
  
    players[activePlayer].classList.toggle('player--active')
}

rollDice.addEventListener('click',()=>{
  let randomNum=Math.trunc(Math.random()*6)+1;

if (playing){
    diceImg.src=`../img/dice-img${randomNum}.jpg`

    if (randomNum!==1){
      currScore+=randomNum;
      currScoreElArr[activePlayer].textContent=currScore;
    }
    else{
      switchPlayer()
    }

}

})

holdBtn.addEventListener('click',()=>{
if(playing){

    highScore[activePlayer] +=currScore;
   
      totalScore[activePlayer].textContent=highScore[activePlayer]
     
    if(highScore[activePlayer]>=50){
        playing=false;
        diceImg.classList.add('hidden');
        players[activePlayer].classList.remove('player--active');
        players[activePlayer].classList.add('player--winner')
    playerName[activePlayer].textContent=`Player ${activePlayer+1} has won 🎉`
    }
  
    //   switch players
  switchPlayer()
}
})

newGameBtn.addEventListener('click',()=>{
   startingConditions()

   players[0].classList.remove('player--winner')
   players[1].classList.remove('player--winner')
   playerName[0].textContent=`Player 1`

   playerName[1].textContent=`Player 2`
   players[activePlayer].classList.add('player--active')
   players[1].classList.remove('player--active')

   totalScore[0].textContent=0
   
   totalScore[1].textContent=0
   currScoreElArr[activePlayer].textContent=currScore;
   diceImg.classList.remove('hidden');
   diceImg.src='../img/download.jpeg'

})