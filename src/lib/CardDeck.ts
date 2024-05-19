import Card from './Card';

class CardDeck {
    deck: Card [];

    constructor() {
        this.deck = this.createDeck();
    }
    createDeck(): Card [] {
        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
        const deck: Card [] = [];

        suits.forEach(suit => {
            ranks.forEach(rank => {
                deck.push(new Card(rank, suit));
            });
        });

        return deck;
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1) [0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card [] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;