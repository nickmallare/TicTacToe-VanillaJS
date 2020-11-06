const xPlay = "Images/oImage.png"
const yPlay = "Images/xImage.png"

var playerXTurn = true;


window.onload = function(){
    
    //add event listeners for table cells
    var squareOne = document.getElementById("squareOne");
    var squareOneImage = document.getElementById("squareOneImage");
    squareOne.addEventListener("click", function(){
        addPlay(squareOneImage);
    });

    var squareTwo = document.getElementById("squareTwo");
    var squareTwoImage = document.getElementById("squareTwoImage");
    squareTwo.addEventListener('click', () =>{
        addPlay(squareTwoImage);
    });
  
    
    var squareThree = document.getElementById("squareThree");
    var squareThreeImage = document.getElementById("squareThreeImage");
    squareThree.addEventListener('click', () =>{
        addPlay(squareThreeImage);
    });
  
    
    var squareFour = document.getElementById("squareFour");
    var squareFourImage = document.getElementById("squareFourImage");
    squareFour.addEventListener("click", function(){
        addPlay(squareFourImage);
    });
    
    var squareFive = document.getElementById("squareFive");
    var squareFiveImage = document.getElementById("squareFiveImage");
    squareFive.addEventListener("click", function(){
        addPlay(squareFiveImage);
    });
    
    var squareSix = document.getElementById("squareSix");
    var squareSixImage = document.getElementById("squareSixImage");
    squareSix.addEventListener("click", function(){
        addPlay(squareSixImage);
    });
    
    var squareSeven = document.getElementById("squareSeven");
    var squareSevenImage = document.getElementById("squareSevenImage");
    squareSeven.addEventListener("click", function(){
        addPlay(squareSevenImage);
    });

    var squareEight = document.getElementById("squareEight");
    var squareEightImage = document.getElementById("squareEightImage");
    squareEight.addEventListener("click", function(){
        addPlay(squareEightImage);
    });
    
    var squareNine = document.getElementById("squareNine");
    var squareNineImage = document.getElementById("squareNineImage");
    squareNine.addEventListener("click", function(){
        addPlay(squareNineImage);
    });

    
}



function test(){
    alert("hi");
}
function test2(){
    console.log("test");
}

function changeTurn(){
    playerXTurn = !playerXTurn;
}

function addPlay(htmlObject){
    if(playerXTurn)
    {
        htmlObject.src=xPlay;
    }
    else{
        htmlObject.src=yPlay;
    }
    changeTurn();
}