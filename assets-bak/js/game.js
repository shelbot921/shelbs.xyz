var snake, apple, squareSize, score, speed,
updateDelay, direection, new_direction,
addNew, cursors, scoreTextValue, speedTextValue,
textstyle_Key, scoreText_Value;

var Game = {

preload : function() {
  game.load.image('snake','./assets'/images/snake.png');
  game.load.image('apple'),'./assets'/images/apple.png');
},

create : function(){

snake = [];
apple = {};
 squareSize = 15;
score = 0;
speed =   0;
updateDelay = 0;
direection = 'right';
 new_direction = null;
addNew = false
cursors = game.input.Keyboard.createCursorKeys();
 game.stage.backgroundColor ='#061f27';
 for(var i = 0; i < 10; i++){
             snake[i] = game.add.sprite(150+i*squareSize, 150, 'snake');  // Parameters are (X coordinate, Y coordinate, image)
         }

         // Genereate the first apple.
         this.generateApple();

         // Add Text to top of game.
         textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
         textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

         // Score.
         game.add.text(30, 20, "SCORE", textStyle_Key);
         scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
         // Speed.
         game.add.text(500, 20, "SPEED", textStyle_Key);
         speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

     },

     update: function() {
         // The update function is called constantly at a high rate (somewhere around 60fps),
         // updating the game field every time.
         // We are going to leave that one empty for now.
     },

     generateApple: function(){

         // Chose a random place on the grid.
         // X is between 0 and 585 (39*15)
         // Y is between 0 and 435 (29*15)

         var randomX = Math.floor(Math.random() * 40 ) * squareSize,
             randomY = Math.floor(Math.random() * 30 ) * squareSize;

         // Add a new apple.
         apple = game.add.sprite(randomX, randomY, 'apple');
     }
{;
update: function() {

          // Snake movement
          // ...
          // End of snake movement

          // Increase length of snake if an apple had been eaten.
          // Create a block in the back of the snake with the old position of the previous last block
          // (it has moved now along with the rest of the snake).

          if(addNew){
              snake.unshift(game.add.sprite(oldLastCellx, oldLastCelly, 'snake'));
              addNew = false;
          }

          // Check for apple collision.
          this.appleCollision();

          // Check for collision with self. Parameter is the head of the snake.
          this.selfCollision(firstCell);

          // Check with collision with wall. Parameter is the head of the snake.
          this.wallCollision(firstCell);
      }

  },

appleCollision: function() {
  // Check if any part of the snake is overlapping the apple.
      // This is needed if the apple spawns inside of the snake.
      for(var i = 0; i < snake.length; i++){
          if(snake[i].x == apple.x && snake[i].y == apple.y){

              // Next time the snake moves, a new block will be added to its length.
              addNew = true;

              // Destroy the old apple.
              apple.destroy();

              // Make a new one.
              this.generateApple();

              // Increase score.
              score++;

              // Refresh scoreboard.
              scoreTextValue.text = score.toString();

          }
      }

  },

  selfCollision: function(head) {

      // Check if the head of the snake overlaps with any part of the snake.
      for(var i = 0; i < snake.length - 1; i++){
          if(head.x == snake[i].x && head.y == snake[i].y){

              // If so, go to game over screen.
              game.state.start('Game_Over');
          }
      }

  },

  wallCollision: function(head) {

      // Check if the head of the snake is in the boundaries of the game field.

      if(head.x >= 600 || head.x < 0 || head.y >= 450 || head.y < 0){

          // If it's not in, we've hit a wall. Go to game over screen.
          game.state.start('Game_Over');
      }

  }
