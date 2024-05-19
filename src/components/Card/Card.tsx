interface  Props  {
    rank: string;
    suit: string;
}

export const pockerCards = (): { rank: string; suit: string;} [] => {
    const ranks:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits: string [] = ['diams', 'hearts', 'clubs', 'spades'];
    const deck: { rank: string; suit: string} [] = [];

    suits.forEach(suit => {
       ranks.forEach(rank => {
           deck.push({ rank, suit});
       });
    });

    return deck;
};

const getSymbol = (suit: string): string => {
    {
     switch (suit) {
         case 'diams':
             return '♦';
         case 'hearts':
             return '♥';
         case 'clubs':
             return '♣';
         case 'spades':
             return '♠';
         default:
             return '';
     }
    }
};

const Card: React.FC<Props> = ({rank, suit}) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">${rank}</span>
            <span className="suit">{getSymbol(suit)}</span>

        </span>

    );
};

export default Card;