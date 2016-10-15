/*
will select a random word for the user 
	should show words as _ _ _ _... 
*/

// array to select words 
var someNames = ['slow', 'shack', 'bears', 'cat', 'pail', 'trample', 'guppy', ''];

// function to select one at random 

randomWord = function() {
	someNames[Math.floor(Math.random()*someNames.length)]; 
}


module.exports = Game; 