import { Fragment } from 'react';
import Navbar from './pages/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TotalCartBlock from './Components/TotalCart/TotalCartBlock';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<TotalCartBlock />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
