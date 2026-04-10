import React, { useState, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "../components/Grid.js";

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
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

function Home() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:8800/jogadores");

      if (!res.ok) {
        throw new Error("Erro ao buscar jogadores");
      }

      const data = await res.json();
      setUsers(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));


    } catch (error) {
      console.error(error);
      alert("Erro ao carregar jogadores.")
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Title>Jogadores</Title>
      <Grid users={users} setUsers={setUsers} />
    </Container>
  );
}

export default Home;