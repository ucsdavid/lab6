var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	res.json(randomPalette['colors']);
	//console.log(palettes);


	//res.send('Your random palette is called: ' + randomPalette['title']);
}