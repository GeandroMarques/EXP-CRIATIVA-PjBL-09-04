import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
`;

const Thead = styled.thead`
    background: linear-gradient(90deg, #D70000, #111);
    color: white;
`;

const Th = styled.th`
    padding: 14px;
    text-align: left;
    font-size: 14px;
`;

const Td = styled.td`
    padding: 14px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
`;

const Tr = styled.tr`
    transition: 0.2s;

    &:hover {
        background-color: #f5f5f5;
        transform: scale(1.01);
    }
`;

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 5px;
    color: #444;

    &:hover {
        color: #D70000;
    }
`;

const Grid = ({ users, setUsers }) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8800/jogadores/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error();

            alert("Jogador deletado com sucesso!");

            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            alert("Erro ao deletar jogador");
        }
    };

    return (
        <Table>
            <Thead>
                <tr>
                    <Th>Nome</Th>
                    <Th>Posição</Th>
                    <Th>Idade</Th>
                    <Th>Ações</Th>
                </tr>
            </Thead>

            <tbody>
                {users.map((item) => (
                    <Tr key={item.id} onClick={() => navigate(`/userdetails/${item.id}`)}>
                        <Td>{item.nome}</Td>
                        <Td>{item.posicao}</Td>
                        <Td>{item.idade}</Td>
                        <Td onClick={(e) => e.stopPropagation()}>
                            <IconButton onClick={() => navigate(`/edituser/${item.id}`)}>
                                <FaEdit />
                            </IconButton>

                            <IconButton onClick={() => handleDelete(item.id)}>
                                <FaTrash />
                            </IconButton>
                        </Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Grid;