function Game(s) {
  this.board = s;
}
function Game(s, position, player) {
  this.board = s;
  this.board = s.substring(0, position) + player + s.substring(position + 1, s.length + 1);
  //this.board[position] = player;
}

Game.prototype.move = function(player) {
  for(var i = 0; i < 9; i++) {
    if(this.board[i] === "-") {
      var game = this.play(i, player);
      if(game.winner() === player)
        return i;
    }
  }

  for(var i = 0; i < 9; i++) {
    if(this.board[i] === "-")
      return i;
  }

  return -1;
}

Game.prototype.play = function(i, player) {
  return new Game(this.board, i, player);
}

Game.prototype.winner = function() {
  if (this.board[0] !== '-' && this.board[0] === this.board[1]
      && this.board[1] === this.board[2])
    return this.board[0];
  if (this.board[3] !== '-' && this.board[3] === this.board[4]
      && this.board[4] === this.board[5])
    return this.board[3];
  if (this.board[6] !== '-' && this.board[6] === this.board[7]
      && this.board[7] === this.board[8])
    return this.board[6];

  return '-';
}
