var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var flag = false; // to check keyboard key pressed for the first time
var level = -1;

function playSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}

function startOver(){
  gamePattern = [];
  level = -1;
  flag = false;
}

function checkAnswer(){
  if(gamePattern[userClickedPattern.length -1] != userClickedPattern[userClickedPattern.length -1]){
    // console.log("gameover");
    $("h1").text("Game Over,Press Any Key To Restart");
    $("body").addClass("game-over");
    setTimeout(()=>{$("body").removeClass("game-over");},100);
    playSound("wrong");
    startOver();
    return

  }


  if(gamePattern.length == userClickedPattern.length){
    // console.log("level clear");
    setTimeout(nextSequence,1000);
  }

}

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  userClickedPattern = [];
  level += 1;
  $("h1").text("Level "+level);
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(()=>{$("#"+currentColour).removeClass("pressed"); }, 100);
}

$(".btn").click(function(event){

    var userChosenColour = event.target.getAttribute("id");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer();
    // console.log(userClickedPattern);
    // console.log(userChosenColour);
});


$(document).keydown(function(){
  if(!flag){
    flag = true;
    nextSequence();

  }

});
