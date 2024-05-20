import './App.css';
import Card from "./components/Card/Card.tsx";

const App = () => {
 const [hand, setHand] = useState<Card[]>([]);

 const dealCards = () =>  {
      const deck = new CardDeck();
      const newHand = deck.getCards(5);
      setHand(newHand);
 };
 let content;
 if (hand.length === 0) {
     content = (
         <button onClick={dealCards}>Раздать карты</button>
     );
 } else  {
     content = (
         <>
             {hand.map((card:string) => (
                 <Card key={card.id} rank ={card.rank} suit={card.suit}/>
             ))}
             <button onClick ={dealCards}>Раздать карты</button>
         </>
     );
 }
  return (
      <div className="playingCards faceImages">
          {content}
      </div>
);
};

export default App;
