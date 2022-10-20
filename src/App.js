import { Fragment, useState } from "react";
import Navbar from "./pages/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TotalCartBlock from "./Components/TotalCart/TotalCartBlock";
import LoginBlock from "./Components/Auth/Login/LoginBlock";

function App() {
  let [Searchby, setSearchby] = useState("");
  return (
    <Fragment>
      <Router>
        <Navbar Searchby={Searchby} setSearchby={setSearchby} />
        <Routes>
          <Route
            path="/"
            element={<Home Searchby={Searchby} setSearchby={setSearchby} />}
          />
          <Route path="/cart" element={<TotalCartBlock />} />
          <Route path="/login" element={<LoginBlock />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
