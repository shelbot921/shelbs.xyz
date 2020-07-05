var game;
// create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(600, 450, phaser.AUTO, '');

//First parameter is how our state will be called
// second parameter is an object cotaining the needed methods for state functionality
game.state.add('Menu', Menu);
game.state.add('Game', Game),
game.state.add('Game_Over', Game_Over);


game.state.start.('Menu');
