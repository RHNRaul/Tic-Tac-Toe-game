const gameboard = document.getElementById("game-board");

let turn = false; // false = X player 1, true = O player 2
let winner = false;
let playsCount = 0;
let mapMatrix  = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

//Score information turn
const scoreLabelPlayer1 = document.getElementById("score_player1");
const scoreLabelPlayer2 = document.getElementById("score_player2");

const turnLabel = () =>{
    if(!turn){
        scoreLabelPlayer1.classList.add("score-label-turno");
        scoreLabelPlayer2.classList.remove("score-label-turno");
    }else{
        scoreLabelPlayer2.classList.add("score-label-turno");
        scoreLabelPlayer1.classList.remove("score-label-turno");
    }
};

turnLabel();

gameboard.addEventListener("click" , event =>{
    let cell = event.target;
    if(cell.tagName === "TD"){
        if(cell.textContent === ""){
            playsCount++;
            if(!turn){
                cell.textContent = "X";
                turn = true;
                turnLabel();
            }else{
                cell.textContent = "O";
                turn = false;
                turnLabel();
            }
        }
        return;
    }
});


function evaluatePlay(){
    

}







