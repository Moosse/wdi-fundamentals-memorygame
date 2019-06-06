var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = 'queen'; 
cardsInPlay.push('cardOne'); 
console.log("User flipped queen");
var cardTwo = 'king'; 
cardsInPlay.push('cardTwo');
console.log('User flipped king');

if (cardsInPlay.length === 2){ 
	if (cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!"); 
}
	else {
	result = alert("Sorry try again!");
}
}

