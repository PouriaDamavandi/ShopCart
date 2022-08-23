import { useContext } from "react";
//Context
import { CartContext } from "../../context/CartContextProvider";

//functions=
import { shorten } from "../../helpers/functions";

//Icons

import removeIcon from "../../assets/icons/remove.svg"

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
      <h3>{shorten(title)}</h3> 
      <p>{price} $</p>
        <div>
            <span>{quantity}</span>
        </div>
      </div>
      <div>
        {
         quantity > 1 ? 
        <button onClick={() => dispatch({type:"DECREASE", payload:props.data})}> -</button> :
        <button onClick={() => dispatch({type:"REMOVE_ITEM", payload:props.data})}> <img src={removeIcon} alt="remove icon" style={{width:"20px"}}/></button> 
         }
         <button onClick={()=> dispatch({type:"INCREASE", payload:props.data})}>+</button>
      </div>
    </div>
  );
};

export default Cart;
