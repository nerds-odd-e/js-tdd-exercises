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
