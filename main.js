/*
holds logic of app. 
run this file in terminal for testing!!!
*/


var inquirer = require('inquirer'); // needed from prompts
var Game = require('./game.js'); // will pull from game.js file 

// display for user in terminal 
var score = 0; // score starting at 0 
var lettersUsed = []; // user guess will be pushed into this arry and displayed 
var attempts = 10; // will start at 10 and -1 for every guess 

// 
