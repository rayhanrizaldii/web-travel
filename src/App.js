import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import "assets/scss/style.scss";
import Example from "pages/Example";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route exact path="/properties/:id" Component={DetailPage} />
          <Route exact path="/checkout" Component={Checkout}/>
          <Route path="/example" Component={Example} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
