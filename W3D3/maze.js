$(function() {

    let gameStarted = false;

    $(".boundary").mouseover(gameOver);
    $("#maze").mouseleave(function() {
        if (gameStarted) {
            gameOver();
        }
    })

    $("#start").click(function() {
        gameStarted = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started!")
    });

    $("#end").mouseenter(gameWin);

    function gameOver() {
        if (gameStarted) {
            $(".boundary").addClass("youlose");
            $("#status").text("You Lost! try again");
            gameStarted = false;
        }
    }

    function gameWin() {
        if (gameStarted) {
            $("#status").text("You win! play again");
            gameStarted = false;
        }
    }
});