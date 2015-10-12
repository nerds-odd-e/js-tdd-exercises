describe("Game", function() {
  it("only available move", function() {
    expect(new Game("XOXOX-OXO").move("X")).toEqual(5);
    expect(new Game("XOXOXOOX-").move("0")).toEqual(8);
  });

  it("default move", function() {
    expect(new Game("---------").move("X")).toEqual(0);
  });

  it("no available move", function() {
    expect(new Game("XXXXXXXXX").move("X")).toEqual(-1);
  });

  it("find winning row move", function() {
    expect(new Game("OO-XX-OOX").move("X")).toEqual(5);
  });

  it("win by row conditions", function() {
    expect(new Game("---XXX---").winner()).toEqual("X");
    expect(new Game("------OOO").winner()).toEqual("O");
    expect(new Game("YYY------").winner()).toEqual("Y");
  });
});

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
