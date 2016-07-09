var $home = $("<div class =\"homedesign\"><header><h1>Love Vs The Earth</h1><h2>Select a User</h2></header><div class=\"characters_select \"><div class=\"easy hvr-grow user\"><img id =\"easy_character\"src=\"http://www.clipartbest.com/cliparts/dT8/ojg/dT8ojgLxc.png\" alt=\"Easy_Character\" /><p>Easy Mode</p></div><div class=\"hard user hvr-grow\"><img id =\"hard_character\" src=\"http://img13.deviantart.net/cb85/i/2011/126/d/5/hippie_mom_by_ydocnameloc-d3frct2.png\" alt=\"hard_character\" /><p>Hard Mode</p></div></div></div>");

var $welcome = $("<div class=\"welcome\"><h1 id =\"namePrompt\"></h1><p>This is a game of chance.</p><ol><li>You will be given a set of positive actions.</li><li>Select an action and send it out to the earth.  </li><li>The action is randomly assigned a value. If your action is greater then the value of the earth’s action, you win that round.</li><li>If the earth’s action has more value, the earth wins that round and subtracts that value from the total.</li><li>To save the world you must get 10 positivity points.</li><li>You lose if you let the earth get to negative 10 points.</li><li>Good luck and may the goodwill of men (and women) be with you. </li></ol></p><button class=\"hvr-grow\"id =\"beginButton\" type=\"button\" name=\"button\">Begin</button><button class=\"hvr-grow\" id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button></div>");

var $battle = $("<div class=\"battle\"><h1>Battle</h1><div class=\"user\"><img src=\"http://www.clipartbest.com/cliparts/dT8/ojg/dT8ojgLxc.png\" id = \"user-image\" alt=\"user\" /><div class=\"battle_icon_user\" id = \"user-icons\"><img src=\"http://cliparting.com/wp-content/uploads/2016/05/Tree-clipart-2.png\" /><img src=\"http://cliparting.com/wp-content/uploads/2016/05/Tree-clipart-2.png\"/><img src=\"http://cliparting.com/wp-content/uploads/2016/05/Tree-clipart-2.png\"/></div></div><div class=\"arena\"><p>Points</p></div><div class=\"computer\"><img src=\"http://www.villa-ilona.eu/.cm4all/iproc.php/globe-308335_1280.png/downsize_1280_0/globe-308335_1280.png\" id = \"computer-icon\"><div class=\"computer_icon_battle\"><img src=\"#\"alt=\"computer_icon\"/></div></div></div><p>Copy about the result of the play.</p><button id=\"go_button\" type=\"button\"name=\"button\">Go</button><button id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button><button id =\"placeholder\"></button></div>");

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
      var imgSrc;

        if (this.alt === 'Easy_Character') {
          player = new PlayerConstructor (2, 'You hugged a stranger!', 4, 'You planted a tree!', 6, 'You lent an empathetic ear!');
          imgSrc = 'http://www.clipartbest.com/cliparts/dT8/ojg/dT8ojgLxc.png';
        }
        else {
          player = new PlayerConstructor (2, 'You fed the hungry!', 3, 'You planned a 5k for local charity!', 4, 'You adopted an orphan!');
          imgSrc = 'http://img13.deviantart.net/cb85/i/2011/126/d/5/hippie_mom_by_ydocnameloc-d3frct2.png';
        }
        // render the easy character page
        username = prompt("Hello peace-maker. What is your name?");
        $(".wrapper").empty();
        $(".wrapper").append($welcome);
        $("#namePrompt").text("Greetings " + username + ", You are our only chance to save the world from negativity.");
        $("#homeButton").on('click',renderHome);

        $("#beginButton").on('click', function() {
            $(".wrapper").empty();
            $(".wrapper").append($battle);
            $('#user-image').attr('src', imgSrc);
            $('#computer-icon').attr('src', 'assets/images/earth.png');
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
