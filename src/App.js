import { Fragment } from "react";
import Navbar from "./pages/Navbar/Navbar";
import Products from "./pages/ProductSection/Products";
import Slider from "./pages/Slider/Slider";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <Fragment>
      <CartProvider>
        <Navbar />
        <Slider />
        <Products />
      </CartProvider>
    </Fragment>
  );
}

export default App;
