$(document).ready(function () {
    var gameStarted = false;
    var gameEnded = false;
    
    $("#start").click(function () {
        resetGame();
        gameStarted = true;
        gameEnded = false;
        $("#status").text("Game started! Avoid the walls.");
    });

    $(".boundary").mouseover(function () {
        if (gameStarted && !gameEnded) {
            endGame(false);
        }
    });

    $("#end").mouseover(function () {
        if (gameStarted && !gameEnded) {
            endGame(true);
        }
    });

    $("#maze").mouseleave(function () {
        if (gameStarted && !gameEnded) {
            endGame(false);
        }
    });

    function endGame(won) {
        gameEnded = true;
        gameStarted = false;
        if (won) {
            $("#status").text("You win! Click the 'S' to play again.");
        } else {
            $(".boundary").addClass("youlose");
            $("#status").text("You lost! Click the 'S' to try again.");
        }
    }

    function resetGame() {
        $(".boundary").removeClass("youlose");
        $("#status").text("Click the 'S' to begin.");
    }
});
