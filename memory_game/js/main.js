var	cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch(){
 	if (cardsInPlay[0]===cardsInPlay[1]) {
 		console.log("You found a match!");}
 		else { 
 			alert("Try Again!");
 				}	
 }


function flipCard(cardId){
	console.log("User flipped "+ cards[cardId]);
	cards.push(cardId);
	checkForMatch();
 
}
flipCard(0);
flipCard(2);