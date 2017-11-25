function Snake (maxRows, maxColumns) {
  this.direction = "right";
  this.body = [
    {row:1, column:5},
    {row:1, column:4},
    {row:1, column:3},
    {row:1, column:2},
    {row:1, column:1},
  ];
  this.intervalId = undefined;
  this.maxColumns = maxColumns;
  this.maxRows = maxRows;
}
Snake.prototype.move = function (){
  if(!this.intervalId){
    this.intervalId = setInterval(this.moveForward.bind(this), 100);
  }
};
Snake.prototype.goUp = function () {
  if (this.direction === 'left' || this.direction === 'right') {
    this.direction = 'up';}
};
Snake.prototype.goDown = function () {
  if (this.direction === 'left' || this.direction === 'right') {
    this.direction = 'down';}
};
Snake.prototype.goLeft = function () {
  if (this.direction === 'up' || this.direction === 'down') {
    this.direction = 'left';}
};
Snake.prototype.goRight = function () {
  if (this.direction === 'up' || this.direction === 'down') {
    this.direction = 'right';}
};

Snake.prototype.moveForward = function () {
  var head = this.body[0];
  switch (this.direction) {
    case 'up':
      this.body.unshift({
        row: ((head.row- 1) + this.maxRows) % this.maxRows, //prrevenir el valor negativo con "+ this.maxRows"
        column: head.column,
      });
      break;
    case 'down':
    this.body.unshift({
      row:(head.row+1) % this.maxRows,
      column: head.column,
    });
    break;
    case 'left':
    this.body.unshift({
      row: head.row,
      column: ((head.column-1) + this.maxColumns) % this.maxColumns,
    });
    break;
    case 'right':
    this.body.unshift({
      row: head.row,
      column: (head.column + 1) % this.maxColumns,
    });
    break;
  }
  // this.body.unshift({
  //   row: head.row, //Head es un objecto con row y column, como conservamos el mismo row , al crear el nuevo objeto "row: head.row", accedemos al valor original.
  //   column: (head.column + 1) % this.maxColumns,
  // });
  this.previousTail = this.body.pop();
};

Snake.prototype.grow = function () {
  if(this.previousTail) {
    this.body.push(this.previousTail);
    this.previousTail = undefined;
  }
};
Snake.prototype.hasEatenFood = function (food) {
  return this.body[0].row === food.row && this.body[0].column === food.column;
};

Snake.prototype.collidesWith = function (position) {
  return this.body.some(function(bodyPiece) {
    return bodyPiece.row === position.row && bodyPiece.column === position.column;
  });
};

// Snake.prototype.hasEatenItself = function () {
//   return this.body.some(function(element, index, array){
//     return (element.row === array[0].row && element.column === array[0].column && index !=0);
//   });
// };
// Snake.prototype.stop = function () {
//   if (this.intervalId){
//     clearInterval(this.intervalId);
//   }
// };
