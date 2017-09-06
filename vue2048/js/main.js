/*global Vue */
/*global gameStorage */
/*global KeyboardInputManager */
(function(win) {

	var Game = new Vue(innerGame);



	var Keys = new KeyboardInputManager();


	Keys.on('move', function(direction) {
		Game.move(direction);
	});


	win.onresize = function(event) {
		Game.getWindowSize();
	};

})(window);
