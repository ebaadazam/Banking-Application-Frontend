import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import About from "./components/pages/About";
import Deposit from "./components/pages/operations/Deposit";
import Withdraw from "./components/pages/operations/Withdraw";
import CardDetail from "./components/pages/CardDetail";
import Contact from "./components/pages/Contact";
import CreateAccount from "./components/pages/account/CreateAccount";
import UpdateAccount from "./components/pages/account/UpdateAccount";
import Home from "./components/home/Home";

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
            <Route path="/account/details/:id/withdraw" element={<Withdraw />} />
            <Route path="/account/details/:id/update" element={<UpdateAccount/>}/>
            <Route path="/account/details/:id" element={<CardDetail/>}/>
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;