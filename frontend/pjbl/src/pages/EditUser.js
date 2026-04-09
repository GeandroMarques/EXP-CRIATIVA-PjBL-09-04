import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom"


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


const EditUser = () => {
    const ref = useRef();
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:8800/${id}`);
                if (!res.ok) throw new Error("Erro ao buscar o usuário pelo id.");
                const data = await res.json();
                setUser(data);
                } catch (err) {
                console.error(err);
                }   
            };

            fetchUser();
        }, [id]);

        const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(ref.current);
        const data = {
            nome: formData.get("nome"),
            posicao: formData.get("posicao"),
            idade: formData.get("idade"),
            numero_camisa: formData.get("numero_camisa"),
            em_atividade: formData.get("em_atividade") === "on" ? 1 : 0,
        };

        try {
            const res = await fetch(`http://localhost:8800/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Erro ao atualizar o usuário");
            alert("Usuário atualizado com sucesso!");
        } catch (err) {
            console.error(err);
            alert("Erro ao atualizar o usuário");
        }
    };

        if (!user) return <p>Carregando usuário...</p>

        

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" defaultValue={user.nome} />
                
            </InputArea>
            <InputArea>
                <Label>Posição</Label>
                <Select id="posicao" name="posicao" defaultValue={user.posicao}>
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
                <Input name="idade" defaultValue={user.idade} />
            </InputArea>
            <InputArea>
                <Label>Número da Camisa</Label>
                <Input name="numero_camisa" defaultValue={user.numero_camisa} />
            </InputArea>
            <InputArea>
                <Label>Em Atividade</Label>
                <Input name="em_atividade" type="checkbox" defaultChecked={user.em_atividade}/>
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default EditUser;