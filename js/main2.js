/* file main2.js includes the addition of 
1. resuffling of the cards
2. introduces a button at the end of the game to restart the game by reloading the page
*/

var cards = [ // added a new property objId to be used for the card resuffling
  {
    objId: 0,
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    objId: 1,
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    objId: 2,
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    objId: 3,  
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

function cardShuffle() {                          //function to resuffle cards
  for (var i = 0; i < 4; i++) {
    var randNum = Math.floor(Math.random() * 10);  // generate random number
    console.log(randNum);                         //print number for test purposes
    cards[i].objId = randNum;                     //add to the cards array obgId values
    cards.sort(function(a, b){return a.objId - b.objId}); // sort cards array
  };
};
cardShuffle();                                    // request resuffle

function reloadPage(){                           //function to reload the page
  var reload = location.reload();
};

function createButton(){                        // function to create and insert restart button
  var btn = document.createElement("button");
  btn.innerHTML = "Play again!";
  document.getElementById("replay").appendChild(btn);
  btn.addEventListener("click", reloadPage);
};
                                            // from this point onward code is per initial guidelines
var cardsInPlay = [];

function checkForMatch(){                   // function to check for card-match
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert ("You found a match! Now, drinks on you!");
  }
  else {
    alert("Sorry, try again");
  };
createButton();                             // introduce replay button
};
  
function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped "  + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
    };
};

function createBoard() {
   for (var i = 0; i < cards.length; i++) { 
     var cardElement = document.createElement('img');
     cardElement.setAttribute('src', "images/back.png"); 
     cardElement.setAttribute('data-id', i);
     cardElement.addEventListener('click', flipCard);
     document.getElementById("game-board").appendChild(cardElement);
   };

};
createBoard();
