console.log("Up and Running!");
var	cards = [
{
		rank:"queen",
		suit:"hearts",
		cardImage: "images/queen-of-hearts.png"

},
{
		rank:"queen",
		suit:"diamonds",
		cardImage: "images/queen-of-diamonds.png"

},
{
		rank:"king",
		suit:"hearts",
		cardImage: "images/king-of-hearts.png"

},
{
		rank:"king",
		suit:"diamonds",
		cardImage: "images/king-of-diamonds.png"

}
];

 
var cardsInPlay = [];
var counter = 0;

var reset = function(){
  document.getElementById("game-board").innerHTML = "";
createBoard();
cardsInPlay = [];

};

function checkForMatch(){
if (cardsInPlay.length === 2) {
	
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 			alert("You found a match!"); 
 			score();
	}
		else { 
 			console.log("Try Again!");
 			
 				}
											}
if (cardsInPlay.length === 4) {
	
 	if (cardsInPlay[2] === cardsInPlay[3]) {
 			alert("You found a match!"); 
 			score();
 			setTimeout(reset,3000); 			}
 			
 		else { 
 			console.log("Try Again!");
 			
 				}
 			}

};

function score() {
counter++;
console.log("Score: "+counter);
 													
					};


function flipCard(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log("User flipped "+ cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	console.log(cards[cardId].rank);
	
	cardsInPlay.push(cards[cardId].rank);

	
	setTimeout(checkForMatch,100);
};	

function createBoard(){
	for(var i = 0; i <cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);

		
		document.getElementById('game-board').appendChild(cardElement);}


};










createBoard();

