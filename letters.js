/*
will control whether or not a letter appears as "_" or itself on screen


=============THIS IS BRIAN'S CODE!!!!!=====================
*/


function Letter(value) {
	this.value = value;
	this.visible = (value === ' ');
}

Letter.prototype.render = function() {
	// ternary operator below
	return (this.visible) ? this.value : '_';
}

module.exports = Letter;