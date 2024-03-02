import React from "react";
import './App.css';
import Home from './AdminSection/Home';
import AddBrokerForm from "./AdminSection/AddBrokerForm";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="add" element={<AddBrokerForm />} />
    </Routes>
  </Router>
  );
}

export default App;
