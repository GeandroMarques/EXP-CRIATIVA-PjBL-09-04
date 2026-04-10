import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM jogadores";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
        console.log(data);
    })
}

export const addUser = (req, res) => {
    const q = "INSERT INTO jogadores(`nome`, `posicao`, `idade`, `numero_camisa`, `em_atividade`) VALUES (?)";

    const values = [
        req.body.nome,
        req.body.posicao,
        req.body.idade,
        req.body.numero_camisa,
        req.body.em_atividade,
    ];

    db.query(q, [values], (err) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q = "UPDATE jogadores SET `nome` = ?, `posicao` = ?, `idade` = ?, `numero_camisa` = ?, `em_atividade` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.posicao,
        req.body.idade,
        req.body.numero_camisa,
        req.body.em_atividade,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário alterado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM jogadores WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};

export const getUserById = (req, res) => {
    const q = "SELECT * FROM jogadores WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data[0]);
    });
};