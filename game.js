// game.js se encargara de pintar el grid, la logica para saber donde va la serpiente
// el grid es un array de 2 dimensiones por donde se mueve la serpiente pintando cuadraditos

function Game(options) {
  this.snake = options.snake;
  this.food = undefined;
  this.rows = options.rows;
  this.columns = options.columns;
  this.color = options.color;
  this.ctx = options.ctx;
}
//no es un objeto, es la propiedad de la funcion, por eso va separado por ; y usa =

// la barra baja es un convencion para señalar un metodo interno que solo se utiliza dentro de la propia clase o desde fuera. Interno solo se utilizaria en tipos this._drawBoard mientras que publico sería algo como var gameSnake = new Game ({}) gameSnake.drawBoard()

Game.prototype._drawBoard = function () {
  for(var columnIndex = 0; columnIndex < this.columns; columnIndex++){
    for(var rowIndex = 0; rowIndex < this.rows; rowIndex++){
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(columnIndex * 10, rowIndex * 10, 10, 10);
    }
  }
};

Game.prototype._drawSnake = function () {
  this.snake.body.forEach(function(position, index){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(position.column * 10,  position.row, 8, 8);
  }.bind(this)); // es darle un nuevo contexto a la funcion del callback. Es como usar el that, pero mas elegante
};

Game.prototype.start = function() {
  this._drawBoard();
  this._drawSnake();
};
