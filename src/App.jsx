import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import CardDetail from "./pages/CardDetail";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account/details/:id/deposit" element={<Deposit />} />
            <Route path="/services/withdraw" element={<Withdraw />} />
            <Route path="/account/details/:id" element={<CardDetail/>}/>
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
