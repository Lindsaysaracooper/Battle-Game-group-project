var $home = $("<header><h1>Love Vs The Earth</h1><h2>Select a User</h2></header><div class=\"characters_select\"><div class=\"easy\"><img id =\"easy_character\"src=\"#\" alt=\"Easy_Character\" /><p>User - Easy Mode</p></div><div class=\"hard\"><img id =\"hard_character\" src=\"#\" alt=\"hard_character\" /><p>User - Hard Mode</p></div></div>");

var $welcome = $("<div class=\"welcome\"><h1 id =\"namePrompt\"></h1><p>Enter copy about the game.</p><button id =\"beginButton\" type=\"button\" name=\"button\">Begin</button><button id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button></div>");

var $battle = $("<div class=\"battle\"><div class=\"user\"><img src=\"#\" alt=\"user\" /></div><div class=\"battle_icon\"><img src=\"#\" alt=\"user_icon\" /><img src=\"#\"alt=\"computer_icon\"/></div><div class=\"computer\"><img src=\"#\"><p>number of points</p></div><p>Copy about the result of the play.</p><button id=\"go_button\" type=\"button\"name=\"button\">Go</button><button id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button><button id =\"placeholder\"></button></div>");

var $result = $("<div class=\"result\"><p>An alert about who won.</p></div><div class=\"end\"><h1>Copy about \"you win\" or \"you lose\"</h1><img src=\"#\" alt=\"earth\" /><button type=\"button\" id =\"homeButton\" name=\"button\">Play Again</button></div>");

var username;
var player;
var love = 0;

function PlayerConstructor (points1, message1, points2, message2, points3, message3) {
  this.actions = [
    {
      pointVal: points1,
      str: message1
    },
    {
      pointVal: points2,
      str: message2
    },
    {
      pointVal: points3,
      str: message3
    }
  ];
}

var earth = new PlayerConstructor (-1, 'You were robbed!', -2, 'You got a flat tire!', -3, 'You missed your flight and are now stuck in the terminal for 5 hours!');

PlayerConstructor.prototype.getIndex = function () {
  return Math.floor(Math.random() * this.actions.length);
};

function renderHome() {
    $(".wrapper").empty();
    $(".wrapper").append($home);

    $("img").on('click', function() {

        if (this.alt === 'Easy_Character') {
          player = new PlayerConstructor (2, 'You hugged a stranger!', 4, 'You planted a tree!', 6, 'You lent an empathetic ear!');
        }
        else {
          player = new PlayerConstructor (2, 'You fed the hungry!', 3, 'You planned a 5k for local charity!', 4, 'You adopted an orphan!');
        }
        // render the easy character page
        username = prompt("Hello Superhero! What is your name?");
        $(".wrapper").empty();
        $(".wrapper").append($welcome);
        $("#namePrompt").text("Greetings " + username + "You are our only chance!");
        $("#homeButton").on('click',renderHome);

        $("#beginButton").on('click', function() {
            $(".wrapper").empty();
            $(".wrapper").append($battle);
            $('#go_button').on('click', function () {
              var playerIndex = player.getIndex();
              var earthIndex = earth.getIndex();
              love += player.actions[playerIndex].pointVal + earth.actions[earthIndex].pointVal;
              console.log(love);
              if (love >= 10 || love <= -10) {
                $(".wrapper").empty();
                $(".wrapper").append($result);
                if (love > 0) {
                  $('h1').text('You won!');
                }
                else {
                  $('h1').text('You lost!');
                }
                $("#homeButton").on('click',renderHome);
              }
            });
            $("#homeButton").on('click',renderHome);


    });
    });
}


$(document).ready(function() {

    renderHome();

});
