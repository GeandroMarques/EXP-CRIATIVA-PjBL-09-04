import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 10vh auto;
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #D70000;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
`;

const Label = styled.span`
    font-weight: bold;
    color: #333;
`;

const Value = styled.span`
    color: #555;
`;

const Button = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: linear-gradient(90deg, #D70000, #111);
    color: white;
    transition: 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const res = await fetch(`http://localhost:8800/jogadores/${id}`);

                if (!res.ok) {
                    throw new Error("Erro ao buscar jogador");
                }

                const data = await res.json();
                setPlayer(data);

            } catch (error) {
                console.error(error);
                alert("Erro ao carregar jogador");
            }
        };

        fetchPlayer();
    }, [id]);

    if (!player) {
        return <p style={{ textAlign: "center" }}>Carregando jogador...</p>;
    }

    return (
        <Container>
            <Title>Detalhes do Jogador</Title>

            <Info>
                <Label>Nome:</Label>
                <Value>{player.nome}</Value>
            </Info>

            <Info>
                <Label>Posição:</Label>
                <Value>{player.posicao}</Value>
            </Info>

            <Info>
                <Label>Idade:</Label>
                <Value>{player.idade}</Value>
            </Info>

            <Info>
                <Label>Camisa:</Label>
                <Value>{player.numero_camisa}</Value>
            </Info>

            <Info>
                <Label>Status:</Label>
                <Value>{player.em_atividade ? "Ativo" : "Inativo"}</Value>
            </Info>

            <Button onClick={() => navigate("/")}>
                Voltar
            </Button>
        </Container>
    );
};

export default UserDetails;