var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardId;

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert ("You found a match! Now, drinks on you!");
  }
  else {
    alert("Sorry, try again");
  }
}
  
function flipCard(cardId) {
  
  console.log("User flipped "  + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch;
  
  }

}
flipCard(0);
flipCard(2);

