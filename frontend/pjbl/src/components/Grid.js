import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash} from "react-icons/fa"
import EditUser from "../pages/EditUser"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
`;


const Grid = ({ users, setUsers}) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
    try {
        const res = await fetch("http://localhost:8800/" + id, {
        method: "DELETE",
        });

        if (!res.ok) {
        throw new Error("Erro ao deletar usuário");
        }

        setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
        console.error(error);
        alert("Erro ao deletar usuário");
    }
    };
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Posição</Th>
                    <Th>Idade</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.posicao}</Td>
                        <Td width="30%">{item.idade}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => navigate(`/edituser/${item.id}`)}/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid