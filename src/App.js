import "./App.css";
import Store from "../src/components/Store";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Navbar/>
        <Switch>
          
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
