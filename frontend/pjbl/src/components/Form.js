import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";


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
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label`

`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Select = styled.select`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    background-color: #fff;
`;


const Form = () => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Posição</Label>
                <Select id="posicao" name="posicao">
                    <option value="">Selecione...</option>
                    <option value="curitiba">Goleiro</option>
                    <option value="sp">Lateral Direito</option>
                    <option value="rj">Zagueiro</option>
                    <option value="sp">Lateral Esquerdo</option>
                    <option value="sp">Volante</option>
                    <option value="sp">Meia</option>
                    <option value="sp">Atacante</option>
                </Select>
            </InputArea>
            <InputArea>
                <Label>Idade</Label>
                <Input name="idade" />
            </InputArea>
            <InputArea>
                <Label>Número da Camisa</Label>
                <Input name="numero_camisa" />
            </InputArea>
            <InputArea>
                <Label>Em Atividade</Label>
                <Input name="em_atividade" type="checkbox"/>
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;