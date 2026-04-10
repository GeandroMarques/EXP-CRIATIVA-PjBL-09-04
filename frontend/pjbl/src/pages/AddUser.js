import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin-top: 10vh;
    margin: 10vh auto;
    width: fit-content;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 200px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label`

`;

const Button = styled.button`
    grid-column: span 2;
    padding: 12px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #D70000, #111);
    color: white;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const Select = styled.select`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    background-color: #fff;
`;


const AddUser = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [posicao, setPosicao] = useState("");
    const [idade, setIdade] = useState("");
    const [numero_camisa, setNumero_camisa] = useState("");
    const [em_atividade, setEm_atividade] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !posicao || !idade || !numero_camisa) {
            alert("Preencha todos os campos!");
            return;
        }

        if (isNaN(idade) || idade <= 0) {
            alert("Idade inválida!");
            return;
        }

        if (isNaN(numero_camisa) || numero_camisa <= 0) {
            alert("Número da camisa inválido!");
            return;
        }

        const user = {
            nome: nome,
            posicao: posicao,
            idade: idade,
            numero_camisa: numero_camisa,
            em_atividade: em_atividade
        };

        try {
            const res = await fetch("http://localhost:8800/jogadores", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        });

        if (!res.ok) {
            throw new Error("Erro ao cadastrar o jogador!");
        } 

        alert("Jogador cadastrado!");
        navigate("/")
            
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar o jogador!");
        }

    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </InputArea>
            <InputArea>
                <Label>Posição</Label>
                <Select id="posicao" name="posicao" value={posicao} onChange={(e) => setPosicao(e.target.value)}>
                    <option value="">Selecione...</option>
                    <option value="Goleiro">Goleiro</option>
                    <option value="Lateral direito">Lateral Direito</option>
                    <option value="Zagueiro">Zagueiro</option>
                    <option value="Lateral esquerdo">Lateral Esquerdo</option>
                    <option value="Volante">Volante</option>
                    <option value="Meia">Meia</option>
                    <option value="Atacante">Atacante</option>
                </Select>
            </InputArea>
            <InputArea>
                <Label>Idade</Label>
                <Input name="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            </InputArea>
            <InputArea>
                <Label>Número da Camisa</Label>
                <Input name="numero_camisa" value={numero_camisa} onChange={(e) => setNumero_camisa(e.target.value)} />
            </InputArea>
            <InputArea>
                <Label>Em Atividade</Label>
                <Input name="em_atividade" type="checkbox" checked={em_atividade} onChange={(e) => setEm_atividade(e.target.checked)} />
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default AddUser;