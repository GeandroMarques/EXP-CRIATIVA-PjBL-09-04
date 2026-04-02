import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "apiuser",
    password: "senhadb123",
    database: "banco_pjbl"
})