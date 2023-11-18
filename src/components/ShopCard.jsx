export const ShopCard = (props) => {
  const { card } = props;

  return (    
    <div className="card-container">
      <div className="description">
        <div className="name">{card.name}</div>
        <div className="color">{card.color}</div>
      </div>
      
      <img className="image" src={card.img} alt={card.name}/>
      <div className="purchase-info">
        <div className="price">${card.price}</div>
        <button className="btn">add to cart</button>
      </div>
    </div>
  );
}
