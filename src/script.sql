create database api_tcc;

use api_tcc;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nm_usuario VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    ds_senha VARCHAR(255) NOT NULL
);

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nm_clientes VARCHAR(100) NOT NULL,
    ultima_compra DATE,
    total DECIMAL(10, 2) DEFAULT 0.00,
    numero VARCHAR(20),
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE adm (
    id_adm INT AUTO_INCREMENT PRIMARY KEY,
    produtos VARCHAR(100) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL,
    dia_da_venda DATE,
    id_clientes INT,
    numero VARCHAR(20),
    FOREIGN KEY (id_clientes) REFERENCES clientes(id_cliente)
);

create table categoria(
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nm_nome TEXT,
    ds_descricao TEXT
);

    create table produtos(
        id_produto INT AUTO_INCREMENT PRIMARY KEY,
        id_categoria INT,
        nm_nome	   TEXT,
        vl_valor   VARCHAR(255),
        ds_descricao TEXT,
        img_logo TEXT,

        FOREIGN KEY(id_categoria) REFERENCES categoria(id_categoria)
    )