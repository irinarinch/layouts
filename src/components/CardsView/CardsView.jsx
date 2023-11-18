import { ShopCard } from "../ShopCard";
import './CardsView.css';

export const CardsView = (props) => {
  const { cards } = props;

  return (
    <div className="container">
      {cards.map(card => <ShopCard card={card}/>)} 
    </div>       
  );
}
