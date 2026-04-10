import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 70px;
    background: linear-gradient(90deg, #111 0%, #D70000 50%, #111 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    border-bottom: 3px solid white;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
`;

const Badge = styled.div`
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
`;

const Right = styled.div`
    display: flex;
    gap: 10px;
`;

const LogoImg = styled.img`
    width: 32px;
    height: 32px;
`;

const Button = styled(Link)`
    padding: 8px 14px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    transition: 0.2s;

    &:hover {
        background-color: white;
        color: #D70000;
        transform: scale(1.05);
    }
`;

const Header = () => {
    return (
        <Container>
            <Left>
                <Badge />
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/3840px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png" alt="logo SPFC" />
                <Logo>Geandro Marques</Logo>
            </Left>

            <Right>
                <Button to="/">Início</Button>
                <Button to="/adduser">Adicionar</Button>
            </Right>
        </Container>
    );
};

export default Header;