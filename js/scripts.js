function Player(turnScore, playerScore){
  this.turnScore = turnScore;
  this.playerScore = playerScore;
};

var playerOne = new Player(0, 0);
var playerTwo = new Player(0, 0);

Player.prototype.rollDice = function(){
  var tempDiceValue = Math.floor((Math.random() * 6) + 1);
  return tempDiceValue;
};

$(document).ready(function(){

  $("#winnerPage").hide();

  $("#buttonIntro").click(function(event){
    event.preventDefault();
    $("div#landingPage").fadeOut();
    $("div#gamepage").fadeIn();

  });

$("span#playerOneScore").text("0");
$("span#playerTwoScore").text("0");
$("span#diceDisplay").html("<img src='img/1.png' rel='dice number' class='imageResize'>");

  $("#rollButtonOne").click(function(event){
    event.preventDefault()

    var tempRollResult = playerOne.rollDice()
    $("span#diceDisplay").html('<img src="img/' + tempRollResult + '.png" rel="dice number" class="imageResize">');

        if (tempRollResult !== 1){
          var addRollValue = playerOne.turnScore + tempRollResult;
          playerOne.turnScore = addRollValue
          $("span#turnScore").text(playerOne.turnScore);
        } else if (tempRollResult ===1){
          playerOne.turnScore = 0;
          $("span#turnScore").text(playerOne.turnScore);
          $("span.playerOneArea").hide();
          $("span.playerTwoArea").show();
          $("#leftPigu").hide();
          $("#rightPigu").show();
        };

  });

  $("#passButtonOne").click(function(event){
    event.preventDefault();

    var addScores = playerOne.turnScore + playerOne.playerScore;
    playerOne.playerScore = addScores
    $("span#playerOneScore").text("");
    $("span#playerOneScore").text(playerOne.playerScore);
    if (addScores >= 100) {
      $("div#gamepage").fadeOut();
      $("#winnerPage").fadeIn();
    } else {
    playerOne.turnScore = 0;
    $("span.playerOneArea").hide();
    $("span.playerTwoArea").show();
    $("#leftPigu").hide();
    $("#rightPigu").show();
    };
  });

  $("#rollButtonTwo").click(function(event){
    event.preventDefault()

    var tempRollResult = playerTwo.rollDice()
    $("span#diceDisplay").html('<img src="img/' + tempRollResult + '.png" rel="dice number" class="imageResize">');

        if (tempRollResult !== 1){
          var addRollValue = playerTwo.turnScore + tempRollResult;
          playerTwo.turnScore = addRollValue
          $("span#turnScore").text(playerTwo.turnScore);
        } else if (tempRollResult ===1){
          playerTwo.turnScore = 0;
          $("span#turnScore").text(playerTwo.turnScore);
          $("span.playerTwoArea").hide();
          $("span.playerOneArea").show();
          $("#rightPigu").hide();
          $("#leftPigu").show();
        };

  });

  $("#passButtonTwo").click(function(event){
    event.preventDefault();

    var addScores = playerTwo.turnScore + playerTwo.playerScore;
    playerTwo.playerScore = addScores
    $("span#playerTwoScore").text("");
    $("span#playerTwoScore").text(playerTwo.playerScore);
    if (addScores >= 100) {
      $("div#gamepage").fadeOut();
      $("#winnerPage").fadeIn();
    } else {
    playerTwo.turnScore = 0;
    $("span.playerTwoArea").hide();
    $("span.playerOneArea").show();
    $("#rightPigu").hide();
    $("#leftPigu").show();
    };
  });

$("#returnToGame").click(function(event){
  event.preventDefault();

  $("span#playerOneScore").text("0");
  $("span#playerTwoScore").text("0");
  $("span#turnScore").text("0");
  $("#winnerPage").fadeOut();
  $("div#gamepage").fadeIn();


  });
});
