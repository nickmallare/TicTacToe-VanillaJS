const xPlay = "Images/xImage.png";
const oPlay = "Images/oImage.png";
const blankPlay = "Images/blank.jpg";

var playerXTurn = true;
var boardStatus = new Array(9);
var numberOfTurns = 0;
var gameStarted = false;
var pvcGame = false;

var startTime, endTime;

window.onload = function () {
  
  var gameBoard = document.getElementById("gameBoard");
  var pvpButton = document.getElementById("pvp");
  var pvcButton = document.getElementById("pvc");
  var startResetButton = document.getElementById("startButton");
  var playAgainButton = document.getElementById("playAgainButton");


  pvpButton.addEventListener("click", function () {
    pvcButton.checked = false;
  });

  pvcButton.addEventListener("click", function () {
    pvpButton.checked = false;
  });

  startResetButton.addEventListener("click", function () {
    resetGame();

    startTime = new Date();

    setInterval(startCounter, 1000);
    if (pvpButton.checked == true) {
      pvcGame = false;
      startPvpGame();
    } else if (pvcButton.checked == true) {
      startPvcGame();
    }
  });

  playAgainButton.addEventListener("click", function () {
    startResetButton.click();
    playAgainButton.setAttribute("hidden", true);

  });


  //add event listeners for table cells
  var squareOne = document.getElementById("squareOne");
  var squareOneImage = document.getElementById("squareOneImage");
  squareOne.addEventListener("click", function () {
    if (addPlay(squareOneImage) && gameStarted) {
      boardStatus[0] = playerXTurn;
      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareTwo = document.getElementById("squareTwo");
  var squareTwoImage = document.getElementById("squareTwoImage");
  squareTwo.addEventListener("click", () => {
    if (addPlay(squareTwoImage) && gameStarted) {
      boardStatus[1] = playerXTurn;
      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareThree = document.getElementById("squareThree");
  var squareThreeImage = document.getElementById("squareThreeImage");
  squareThree.addEventListener("click", () => {
    if (addPlay(squareThreeImage) && gameStarted) {
      boardStatus[2] = playerXTurn;
      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareFour = document.getElementById("squareFour");
  var squareFourImage = document.getElementById("squareFourImage");
  squareFour.addEventListener("click", function () {
    if (addPlay(squareFourImage) && gameStarted) {
      boardStatus[3] = playerXTurn;

      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareFive = document.getElementById("squareFive");
  var squareFiveImage = document.getElementById("squareFiveImage");
  squareFive.addEventListener("click", function () {
    if (addPlay(squareFiveImage) && gameStarted) {
      boardStatus[4] = playerXTurn;

      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareSix = document.getElementById("squareSix");
  var squareSixImage = document.getElementById("squareSixImage");
  squareSix.addEventListener("click", function () {
    if (addPlay(squareSixImage) && gameStarted) {
      boardStatus[5] = playerXTurn;

      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareSeven = document.getElementById("squareSeven");
  var squareSevenImage = document.getElementById("squareSevenImage");
  squareSeven.addEventListener("click", function () {
    if (addPlay(squareSevenImage) && gameStarted) {
      boardStatus[6] = playerXTurn;

      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareEight = document.getElementById("squareEight");
  var squareEightImage = document.getElementById("squareEightImage");
  squareEight.addEventListener("click", function () {
    if (addPlay(squareEightImage) && gameStarted) {
      boardStatus[7] = playerXTurn;

      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });

  var squareNine = document.getElementById("squareNine");
  var squareNineImage = document.getElementById("squareNineImage");
  squareNine.addEventListener("click", function () {
    if (addPlay(squareNineImage) && gameStarted) {
      console.log(boardStatus[8], playerXTurn);
      boardStatus[8] = playerXTurn;
      checkWinner();
      if (pvcGame && gameStarted) {
        notTheSmartestAI();
      }
      changeTurn();
    }
  });
};

function changeTurn() {
  playerXTurn = !playerXTurn;
  displayCurrentTurn();
}

function displayCurrentTurn() {
  if (gameStarted) {
    if (playerXTurn) {
      document.getElementById("playersTurn").innerHTML = "It is X's Turn";
    } else {
      document.getElementById("playersTurn").innerHTML = "It is O's Turn";
    }
  } 
}

function addPlay(htmlElement) {
  console.log("add play called");
  if (
    htmlElement.src.substring(htmlElement.src.lastIndexOf("/") + 1) ==
    "blank.jpg"
  ) {
    if (playerXTurn) {
      htmlElement.src = xPlay;
    } else {
      htmlElement.src = oPlay;
    }
    numberOfTurns++;
    return true;
  }
  return false;
}

function startPvpGame() {
  //disable the use of the gameboard
  gameBoard.style.pointerEvents = "auto";
  gameBoard.removeAttribute("hidden");
  gameStarted = true;

  if (Math.round(Math.random()) == 1) {
    playerXTurn = true;
    alert("Player X Starts!");
    document.getElementById("playersTurn").innerHTML = "It is X's Turn";
  } else {
    playerXTurn = false;
    alert("Player O Starts!");
    document.getElementById("playersTurn").innerHTML = "It is O's Turn";
  }
}

function startPvcGame() {
  pvcGame = true;
  gameBoard.style.pointerEvents = "auto";
  gameBoard.removeAttribute("hidden");
  gameStarted = true;
  if (Math.round(Math.random()) == 0) {
    playerXTurn = false;
    alert("Player O Starts!");
    document.getElementById("playersTurn").innerHTML = "It is O's Turn";
    notTheSmartestAI();
  } else {
    playerXTurn = true;
    alert("Player X Starts!");
    document.getElementById("playersTurn").innerHTML = "It is X's Turn";
  }
}

function resetGame() {
  numberOfTurns = 0;
  boardStatus = new Array(9);

  squareOneImage.src = blankPlay;
  squareTwoImage.src = blankPlay;
  squareThreeImage.src = blankPlay;
  squareFourImage.src = blankPlay;
  squareFiveImage.src = blankPlay;
  squareSixImage.src = blankPlay;
  squareSevenImage.src = blankPlay;
  squareEightImage.src = blankPlay;
  squareNineImage.src = blankPlay;
}

function displayWinner() {
  gameStarted = false;
  //disable the use of the gameboard
  gameBoard.style.pointerEvents = "none";
  if (playerXTurn) {
    alert("Player X has won!");
    document.getElementById("playersTurn").innerHTML = "Player X has won!";
  } else if(!playerXTurn) {
    alert("Player O has won!");
    document.getElementById("playersTurn").innerHTML = "Player O has won!";
  }
  else{
    document.getElementById("playersTurn").innerHTML = "Draw!";
  }
  playAgainButton.removeAttribute("hidden");


}

function checkWinner() {
  console.log(numberOfTurns);
  //check vertical winner
  if (
    boardStatus[0] == playerXTurn &&
    boardStatus[1] == playerXTurn &&
    boardStatus[2] == playerXTurn
  ) {
    displayWinner();
  } else if (
    boardStatus[3] == playerXTurn &&
    boardStatus[4] == playerXTurn &&
    boardStatus[5] == playerXTurn
  ) {
    displayWinner();
  } else if (
    boardStatus[6] == playerXTurn &&
    boardStatus[7] == playerXTurn &&
    boardStatus[8] == playerXTurn
  ) {
    displayWinner();
  }
  //check horizontal winner
  else if (
    boardStatus[0] == playerXTurn &&
    boardStatus[3] == playerXTurn &&
    boardStatus[6] == playerXTurn
  ) {
    displayWinner();
  } else if (
    boardStatus[1] == playerXTurn &&
    boardStatus[4] == playerXTurn &&
    boardStatus[7] == playerXTurn
  ) {
    displayWinner();
  } else if (
    boardStatus[2] == playerXTurn &&
    boardStatus[5] == playerXTurn &&
    boardStatus[8] == playerXTurn
  ) {
    displayWinner();
  }
  //check diagnol
  else if (
    boardStatus[2] == playerXTurn &&
    boardStatus[4] == playerXTurn &&
    boardStatus[6] == playerXTurn
  ) {
    displayWinner();
  } else if (
    boardStatus[0] == playerXTurn &&
    boardStatus[4] == playerXTurn &&
    boardStatus[8] == playerXTurn
  ) {
    displayWinner();
  } else if (numberOfTurns > 8) {
    alert("draw!");
    gameStarted = false;
    gameBoard.style.pointerEvents = "none";
    document.getElementById("playersTurn").innerHTML = "Draw!";

  }
}

function notTheSmartestAI() {
  let foundOptimalMoveLol = false;
  while (!foundOptimalMoveLol || numberOfTurns > 9) {
    console.log("loop");
    let index = Math.floor(Math.random() * 9);
    if (boardStatus[index] != true && boardStatus[index] != false) {
      switch (index) {
        case 0:
          squareOneImage.src = oPlay;
          boardStatus[0] = false;
          break;
        case 1:
          squareTwoImage.src = oPlay;
          boardStatus[1] = false;
          break;
        case 2:
          squareThreeImage.src = oPlay;
          boardStatus[2] = false;
          break;
        case 3:
          squareFourImage.src = oPlay;
          boardStatus[3] = false;
          break;
        case 4:
          squareFiveImage.src = oPlay;
          boardStatus[4] = false;
          break;
        case 5:
          squareSixImage.src = oPlay;
          boardStatus[5] = false;
          break;
        case 6:
          squareSevenImage.src = oPlay;
          boardStatus[6] = false;
          break;
        case 7:
          squareEightImage.src = oPlay;
          boardStatus[7] = false;

          break;
        case 8:
          squareNineImage.src = oPlay;
          boardStatus[8] = false;
          break;
      }
      numberOfTurns++;
      foundOptimalMoveLol = true;

      console.log(boardStatus[0], boardStatus[1], boardStatus[2]);
      console.log(boardStatus[3], boardStatus[4], boardStatus[5]);
      console.log(boardStatus[6], boardStatus[7], boardStatus[8]);

      console.log(playerXTurn);

      changeTurn();
      checkWinner();

      computerTurn = false;
    }
  }
}

function startCounter() {
  if (gameStarted) {
    endTime = new Date();
    var countTimer = endTime - startTime;
    countTimer /= 1000;
    // get seconds
    var seconds = Math.round(countTimer);
    timer.innerHTML = "Game duration: " + seconds + " seconds";
  }
}

function beginGame(){
  resetGame();

  startTime = new Date();

  setInterval(startCounter, 1000);
  if (pvpButton.checked == true) {
    pvcGame = false;
    startPvpGame();
  } else if (pvcButton.checked == true) {
    startPvcGame();
  }
}