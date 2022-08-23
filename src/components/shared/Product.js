import React, { useContext } from "react";
//Fucntions
import { shorten, isInCart, quantityCount } from "../../helpers/functions";

import { Link } from "react-router-dom";
import removeIcon from "../../assets/icons/remove.svg";

// Context
import { CartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <img
        src={productData.image}
        alt={productData.title}
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
           {quantityCount(state, productData.id) > 1 && <span>
            {quantityCount(state, productData.id)}
            </span>}
          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={removeIcon} alt="remove" style={{ width: "24px" }} />
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
