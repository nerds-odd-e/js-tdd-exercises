describe('Vue2048', function() {
  it('is a game', function() {
    global.gameStorage = {
      fetch: function(key) { return ''; },
      save: function(key, data) { } };

    var Vue2048 = require('../js/game2048');
    expect(Vue2048.default.data.tileDimension).toEqual(2);
  });
});
