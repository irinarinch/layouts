import { ShopItem } from "../ShopItem";
import './ListView.css';

export const ListView = (props) => {
  const { items } = props;

  return (
    <div className="container">
      {items.map(item => <ShopItem item={item}/>)} 
    </div>    
  )
}
