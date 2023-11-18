import { IconSwitch } from './IconSwitch';
import { CardsView } from './CardsView/CardsView';
import { ListView } from './ListView/ListView';
import { useState } from 'react';

export const Store = (props) => {
  const {products, icon, changeIcon} = props;
  const [view] = useState(icon); 
   
  const render = () => {    
    if (view === icon) {
      return <CardsView cards={products}/>
    } else {      
      return <ListView items={products}/>
    }
  }
 
  return (
    <>
      <IconSwitch icon={icon} onSwitch={changeIcon}/>
      {render()}     
    </>    
  );
}
