const xPlay = "Images/oImage.png";
const yPlay = "Images/xImage.png";

var playerXTurn = true;
var boardStatus = new Array(9);
var numberOfTurns = 0;

window.onload = function () {
  document.getElementById("playersTurn").innerHTML = "Playe";
  var test13 = document.getElementById("playersTurn").innerHTML;
  var gameBoard = document.getElementById("gameBoard");
  var pvpButton = document.getElementById("pvp");
  pvpButton.addEventListener("click", function () {
    startPvpGame();
  });

  //add event listeners for table cells
  var squareOne = document.getElementById("squareOne");
  var squareOneImage = document.getElementById("squareOneImage");
  squareOne.addEventListener("click", function () {
    if(addPlay(squareOneImage)){
    boardStatus[0] = playerXTurn;
    }
    checkWinner();
  });

  var squareTwo = document.getElementById("squareTwo");
  var squareTwoImage = document.getElementById("squareTwoImage");
  squareTwo.addEventListener("click", () => {
    if(addPlay(squareTwoImage)){
    boardStatus[1] = playerXTurn;
    }
    checkWinner();
  });

  var squareThree = document.getElementById("squareThree");
  var squareThreeImage = document.getElementById("squareThreeImage");
  squareThree.addEventListener("click", () => {
    if(addPlay(squareThreeImage)){
    boardStatus[2] = playerXTurn;
    }
    checkWinner();
  });

  var squareFour = document.getElementById("squareFour");
  var squareFourImage = document.getElementById("squareFourImage");
  squareFour.addEventListener("click", function () {
    if(addPlay(squareFourImage)){
    boardStatus[3] = playerXTurn;
    }
    checkWinner();
  });

  var squareFive = document.getElementById("squareFive");
  var squareFiveImage = document.getElementById("squareFiveImage");
  squareFive.addEventListener("click", function () {
    if(addPlay(squareFiveImage)){
    boardStatus[4] = playerXTurn;
    }
    checkWinner();
  });

  var squareSix = document.getElementById("squareSix");
  var squareSixImage = document.getElementById("squareSixImage");
  squareSix.addEventListener("click", function () {
    if(addPlay(squareSixImage)){
    boardStatus[5] = playerXTurn;
    }
    checkWinner();
  });

  var squareSeven = document.getElementById("squareSeven");
  var squareSevenImage = document.getElementById("squareSevenImage");
  squareSeven.addEventListener("click", function () {
    if(addPlay(squareSevenImage)){
    boardStatus[6] = playerXTurn;
    }
    checkWinner();
  });

  var squareEight = document.getElementById("squareEight");
  var squareEightImage = document.getElementById("squareEightImage");
  squareEight.addEventListener("click", function () {
    if(addPlay(squareEightImage)){
    boardStatus[7] = playerXTurn;
    }
    checkWinner();
  });

  var squareNine = document.getElementById("squareNine");
  var squareNineImage = document.getElementById("squareNineImage");
  squareNine.addEventListener("click", function () {
    if(addPlay(squareNineImage)){
    boardStatus[8] = playerXTurn;
    }
    checkWinner();
  });
};

function test() {
  alert("hi");
}
function test2() {
  console.log("test");
}

function changeTurn() {
  playerXTurn = !playerXTurn;
  console.log("test");
  test13 = "hello";
  console.log(test13);

}

function addPlay(htmlObject) {
  if (!htmlObject.src) {
    if (playerXTurn) {
      htmlObject.src = xPlay;
    } 
    else {
      htmlObject.src = yPlay;
    }
    numberOfTurns++;
    changeTurn();
    return true;
  }
  changeTurn();
  console.log("0", boardStatus[0]);
  console.log("1", boardStatus[1]);
  console.log("2", boardStatus[2]);

  return false;
}
function startPvpGame(){
    gameBoard.removeAttribute("hidden");
    if(Math.random() == 0){
        playerXTurn = true;
        alert("Player X Starts!");
    }
    else{
        playerXTurn = false;
        alert("Player Y Starts!");
    }
}

function checkWinner() {

    if(numberOfTurns > 10){
        alert("draw!");
    }

    //check vertical winner
    if(boardStatus[0] == playerXTurn && boardStatus[1] == playerXTurn && boardStatus[2] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }
    else if(boardStatus[3] == playerXTurn && boardStatus[4] == playerXTurn && boardStatus[5] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }
    else if(boardStatus[6] == playerXTurn && boardStatus[7] == playerXTurn && boardStatus[8] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }
    //check horizontal winner
    else if(boardStatus[0] == playerXTurn && boardStatus[3] == playerXTurn && boardStatus[6] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }
    else if(boardStatus[1] == playerXTurn && boardStatus[4] == playerXTurn && boardStatus[7] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }
    else if(boardStatus[2] == playerXTurn && boardStatus[5] == playerXTurn && boardStatus[8] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }
    //check diagnol
    else if(boardStatus[0] == playerXTurn && boardStatus[4] == playerXTurn && boardStatus[8] == playerXTurn){
        alert("winnnnnner");
        console.log("winner");
    }

}


//every time add play happens, add it to location in array  