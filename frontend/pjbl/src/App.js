import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Grid from "./components/Grid.js";
import Form from "./components/Form.js";
import Home from "./pages/Home.js";
import EditUser from "./pages/EditUser.js";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;