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

create database categoria(
    id_categoria  int primary key auto_increment,
    nm_nome text,
    ds_descricao text
)

create table produtos(
	id_produto int primary key auto_increment,
    id_categoria int,
    nm_nome	   text,
    vl_valor   decimal,
    ds_descricao text,
    img_logo text

    foreign key(id_categoria) references categoria(id_categoria)
)