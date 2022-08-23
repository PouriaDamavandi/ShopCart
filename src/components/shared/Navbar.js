import { useContext } from "react";
//context
import { CartContext } from "../../context/CartContextProvider";

//icons
import cartIcon  from "../../assets/icons/cart.svg"

import { Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
        <div>
            <Link to="/products">Products</Link>
        </div>
        <div>
            <Link to="/cart"><img src={cartIcon} alt="Cart" style={{width: "24px"}}/></Link>
            <span>{state.itemsCounter}</span>
        </div>
    </div>
  );
};

export default Navbar;
