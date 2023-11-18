export const ShopItem = (props) => {
  const { item } = props;

  return (
    <div className="item-container">
      <img className="item-image" src={item.img} alt={item.name}/>
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <div className="item-price">${item.price}</div>
      <button className="item-btn">add to cart</button>
    </div>
  )
}
