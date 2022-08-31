class Player{
    constructor()
    {
        this.cards = [];
        this.points = 0;
        this.index = 0;
    }

    playCard()
    {
        //play a random card
        this.index = parseInt((Math.random() * ((this.cards.length - 1)+ 1)), 10);
        return this.cards[this.index];
    }

    removeCard()
    {
        //remove card from cards array
        this.cards.splice(this.index, 1);
    }

    addPoint()
    {
        //add point
        this.points++;
    }
}

class Deck{
    constructor()
    {
        this.cards = [];
    }

    createDeck()
    {
        //create a deck of 26 cards between numbers 1-10
        for (let i = 0; i < 26; i++)
        {
            let number = i + 1;

            if (i > 19)
            {
                number = i - 19;
            }
            else if (i > 9)
            {
                number = i - 9;
            }
            
            this.cards.push(new Card(number));
        }
    }

    dealCards(playerOne, playerTwo)
    {
        //check that players are instances of Player class
        if (playerOne instanceof Player && playerTwo instanceof Player)
        {
            //deal random cards to two players
            for (let i = 0; i < 26; i++)
            {
                let index = parseInt((Math.random() * ((this.cards.length - 1) + 1)), 10);

                if (i < 13)
                {
                    playerOne.cards.push(this.cards[index]);
                }
                else
                {
                    playerTwo.cards.push(this.cards[index]);
                }

                this.cards.splice(index, 1);
            }
        }

    }
}

class Card{
    constructor(number)
    {
        this.number = number;
    }
}

class GameManager{
    constructor()
    {
        this.playerOne;
        this.playerTwo;
        this.deck;
    }

    initializeGame()
    {
        //create players
        this.playerOne = new Player();
        this.playerTwo = new Player();
        console.log("Creating players.");

        //create deck class
        this.deck = new Deck();

        //create deck method on deck class
        this.deck.createDeck();
        console.log("Creating deck.");

        //deal cards method on deck class
        this.deck.dealCards(this.playerOne, this.playerTwo);
        console.log("Dealing cards to players.");

        //start game
        console.log("Let the game begin!");
        this.playGame();
    }

    playGame()
    {
        //player one plays card and removes it from their cards
        let playerOneCard = this.playerOne.playCard();
        console.log(`Player One's card is ${playerOneCard.number}`);
        this.playerOne.removeCard();

        //player two plays card and removes it from their cards
        let playerTwoCard = this.playerTwo.playCard();
        console.log(`Player Two's card is ${playerTwoCard.number}`);
        this.playerTwo.removeCard();

        //whoever's card number is higher gets a point added to their player class. if tie, no points are added.
        if (playerOneCard.number > playerTwoCard.number)
        {
            this.playerOne.addPoint();
            console.log("Player One gets a point.");
        }
        else if (playerTwoCard.number > playerOneCard.number)
        {
            this.playerTwo.addPoint();
            console.log("Player Two gets a point.");
        }
        else if (playerOneCard.number === playerTwoCard.number)
        {
            console.log("The result is a tie.");
        }

        //checkToEndGame
        this.checkToEndGame();
    }

    checkToEndGame()
    {
        //check length of one player's cards array. if zero, end game. if not, playGame.
        let length = this.playerOne.cards.length;

        if (length === 0)
        {
            this.endGame();
        }
        else
        {
            this.playGame();
        }
    }   

    endGame()
    {
        //display score
        console.log(`Player One Points: ${this.playerOne.points}`);
        console.log(`Player Two Points: ${this.playerTwo.points}`);

        //declare winner
        if (this.playerOne.points > this.playerTwo.points)
        {
            console.log("Player One wins!");
        }
        else if (this.playerTwo.points > this.playerOne.points)
        {
            console.log("Player Two wins!");
        }
        else if (this.playerOne.points === this.playerTwo.points)
        {
            console.log("The result is a tie.");
        }
    }
}

//create an instance of GameManager and initialize the game
const gameManager = new GameManager();
gameManager.initializeGame();