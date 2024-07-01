# Trabalho-N3-Sever-side-
Trabalho N3 Sever Side
Desenvolver uma aplicação servidora em que o proprietário (cpf, nome e fone) possa ter um ou mais veículo (placa_veiculo, modelo_veiculo e preco_veiculo). Se o preço do veículo for maior ou igual a R$ 45.000,00 e menor R$ 90.000,00 associar à tabela tipo_veículo (id_tipo, tipo), o tipo luxo. Se for menor que R$ 45.000,00 associar popular. Do contrário associar super luxo. Para a implementação da persistência de dados, utilize a técnica de ORM - Object Relational Mapping. Essa aplicação tem que atender as requisições CRUD oriundas de qualquer cliente-server por meio de API Rest. Como também, permitir consultas de veículos por proprietário e tipo. Além disso, inserir a utilização de token (JWT) em um dos end-points da API ou se preferir adicione uma funcionalidade de login (usuário e senha) com token. 




Comandos para criar  o Banco de dados :


CREATE DATABASE veiculo;

USE veiculo;

CREATE TABLE proprietario (
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(100),
    fone VARCHAR(15)
);

CREATE TABLE tipo_veiculo (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50)
);

CREATE TABLE veiculo (
    placa_veiculo VARCHAR(10) PRIMARY KEY,
    modelo_veiculo VARCHAR(100),
    preco_veiculo DECIMAL(10, 2),
    cpf_proprietario VARCHAR(11),
    id_tipo INT,
    FOREIGN KEY (cpf_proprietario) REFERENCES proprietario(cpf),
    FOREIGN KEY (id_tipo) REFERENCES tipo_veiculo(id_tipo)
);

INSERT INTO tipo_veiculo (tipo) VALUES ('popular'), ('luxo'), ('super luxo');
