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
Game.prototype.start = function() {
  this._drawBoard();
};
