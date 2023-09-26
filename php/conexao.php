<?php

if ($_SERVER['REMOTE_ADDR'] == "::1") {
    $host = "localhost";
    $usuario = "root";
    $senha = ""; // Lembre-se de configurar a senha se ela for necessária
    $banco = "LibrasASL";
} else {
    $host = "localhost";
    $usuario = "id21315197_admin";
    $senha = "f,.dmdLSA.,cvxmsdr9e8u#t5695640%$";
    $banco = "id21315197_librasasl";
}
// Conectar ao MySQL
$conexao = new mysqli($host, $usuario, $senha);

// Verificar a conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}

// Criar o banco de dados se não existir
$sql_create_db = "CREATE DATABASE IF NOT EXISTS $banco";
if ($conexao->query($sql_create_db) === TRUE) {
    // echo "Banco de dados '$banco' criado com sucesso ou já existente";
} else {
    echo "Erro ao tentar criar o banco de dados: " . $conexao->error;
}

// Selecionar o banco de dados
$conexao->select_db($banco);

// Criação da tabela USUARIOS
$sql_create_table = "CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    nome_de_usuario VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    termos_aceitos BOOLEAN NOT NULL
)";

if ($conexao->query($sql_create_table) === TRUE) {
    // echo "Tabela 'usuarios' criada com sucesso ou já existente";
} else {
    echo "Erro ao tentar criar a tabela: " . $conexao->error;
}
