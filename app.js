function showOrHide (strtGameBtn , userChoiseBtn , gameRslt , gameDesc , plyAgainAndQuitBtn) {
    var startGameButton =  document.getElementById("star_game_btn");
    var userChoiseButtons = document.getElementById("user_choise_btns");
    var gameResult = document.getElementById("game_result");
    var gameDescription = document.getElementById("game_description")
    var playAgainAndQuitGameButton = document.getElementById("play_again_and_quit_game_btn");
    startGameButton.className = strtGameBtn;
    userChoiseButtons.className =  userChoiseBtn;
    gameResult.className = gameRslt;
    gameDescription.className = gameDesc;
    playAgainAndQuitGameButton.className = plyAgainAndQuitBtn;
}


var options = ["Rock" , "Paper" , "Scissor"];
var userCounts = 0;
var ComputerCounts = 0;
var gameCount = 0;
var drawCount = 0;

function userSelected(userChoise) {
    showOrHide("hide" , "hide" , "show" , 'show' , "show");
    gameResult(userChoise);
}

function computerSelected() {
    return options[Math.floor(Math.random() * 3)];
}

function gameResult (userChoise) {

    var message = "";
    var ComputerChoise = computerSelected();

    if (userChoise === ComputerChoise){
        message = "Game Draw";
        drawCount++
    }
    else if( userChoise === options[0] && ComputerChoise === options[1] ||
             userChoise === options[1] && ComputerChoise === options[2] ||
             userChoise === options[2] && ComputerChoise === options[0] ) {
        message = "Computer Won";
        ComputerCounts++;
    }
    else {
        message = "You Won";
        userCounts++;
    }
    gameCount++;
    document.getElementById("game_result").innerHTML =  "Computer Choosed : " + ComputerChoise + "</br>" + message ;

    var gameDecription = document.getElementById("game_description");
    gameDecription.children[0].innerHTML = "Total Games : " + gameCount;
    gameDecription.children[1].innerHTML = "Game Draws : " + drawCount;
    gameDecription.children[2].innerHTML = "You Won : " + userCounts;
    gameDecription.children[3].innerHTML = "Computer Won : " + ComputerCounts;
    
}

function resetCount() {
    gameCount = 0;
    drawCount = 0;
    userCounts = 0;
    ComputerCounts = 0;
}