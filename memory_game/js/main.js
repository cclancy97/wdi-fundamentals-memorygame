var	cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
 if (cardsInPlay.length===2) {console.log("Eureka")
 	if (cardsInPlay[0]===cardsInPlay[1]) {alert("You found a match!");}
 		else { 
 			alert("Try Again!");
 				}	
 }