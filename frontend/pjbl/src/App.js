import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Grid from "./components/Grid.js";
import Home from "./pages/Home.js";
import EditUser from "./pages/EditUser.js";
import AddUser from "./pages/AddUser.js"
import Header from "./components/Header";
import UserDetails from "./pages/UserDetails.js"

const Title = styled.h2``;


const Button = styled(Link)`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;