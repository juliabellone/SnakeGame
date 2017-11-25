//inicializamos lo que pasa cuando se carga la pantalla. Dentro del document ready hay un callback
$(document).ready(function(){
var game;
var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");

//como parametro le pasamos directamente un objeto
game = new Game({
  rows: canvas.width / 10,
  columns: canvas.height / 10,
  color: '#E3D4AB',
  snake: undefined,
  ctx: ctx,
});

game.start();
});
