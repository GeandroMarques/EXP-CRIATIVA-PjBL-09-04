CREATE USER 'apiuser'@'localhost' IDENTIFIED BY 'senhadb123';
GRANT ALL PRIVILEGES ON banco_pjbl.* TO 'apiuser'@'localhost';
FLUSH PRIVILEGES;
