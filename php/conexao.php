<?php
$host = "localhost"; // Host do servidor MySQL
$usuario = "root"; // Nome de usuário do MySQL
$banco = "teste"; // Nome do banco de dados

// Conectar ao MySQL
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verificar a conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}
?>