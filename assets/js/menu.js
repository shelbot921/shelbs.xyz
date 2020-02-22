var Menu = {
  preload : function() {
    game.load.image('menu', '.assets/images/menu.png') ;
},

create: function () {

//create: function () {
//  this.add.sprite(0, 0, 'menu');
this.add.button(0, 0, 'menu', this.startgame, this);

},

startgame: function () {
this.state.start('Game')

}

};
