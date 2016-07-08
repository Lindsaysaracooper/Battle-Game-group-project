var $home = $("<header><h1>Love Vs The Earth</h1><h2>Select a User</h2></header><div class=\"characters_select\"><div class=\"easy\"><img id =\"easy_character\"src=\"#\" alt=\"Easy_Character\" /><p>User - Easy Mode</p></div><div class=\"hard\"><img id =\"hard_character\" src=\"#\" alt=\"hard_character\" /><p>User - Hard Mode</p></div></div>");

var $welcome = $("<div class=\"welcome\"><h1 id =\"namePrompt\"></h1><p>Enter copy about the game.</p><button id =\"beginButton\" type=\"button\" name=\"button\">Begin</button><button id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button></div>");

var $battle = $("<div class=\"battle\"><div class=\"user\"><img src=\"#\" alt=\"user\" /></div><div class=\"battle_icon\"><img src=\"#\" alt=\"user_icon\" /><img src=\"#\"alt=\"computer_icon\"/></div><div class=\"computer\"><img src=\"#\"><p>number of points</p></div><p>Copy about the result of the play.</p><button class=\"go_button\" type=\"button\"name=\"button\">Go</button><button id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button><button id =\"placeholder\"></button></div>");

var $result = $("<div class=\"result\"><p>An alert about who won.</p></div><div class=\"end\"><h1>Copy about \"you win\" or \"you lose\"</h1><img src=\"#\" alt=\"earth\" /><button type=\"button\" name=\"button\">Play Again</button></div>");

var username;

function renderHome() {
    $(".wrapper").empty();
    $(".wrapper").append($home);

    $("img").on('click', function() {
        // render the easy character page
        username = prompt("Hello Superhero! What is your name?");
        $(".wrapper").empty();
        $(".wrapper").append($welcome);
        $("#namePrompt").text("Greetings " + username + "You are our only chance!");
        $("#homeButton").on('click',renderHome);

        $("#beginButton").on('click', function() {
            $(".wrapper").empty();
            $(".wrapper").append($battle);
            $("#homeButton").on('click',renderHome);

            $("#placeholder").on('click', function() {
                $(".wrapper").empty();
                $(".wrapper").append($result);
                $("#homeButton").on('click',renderHome);

        });

    });
    });
}


$(document).ready(function() {


    renderHome();


});
