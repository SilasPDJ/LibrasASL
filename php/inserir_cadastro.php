<?php
require_once('conexao.php');

// Receba os dados do JavaScript
$inputName = $_POST['inputName'];
$inputSurname = $_POST['inputSurname'];
$inputEmail = $_POST['inputEmail'];
$inputUser = $_POST['inputUser'];
$inputPassword = $_POST['inputPassword'];
$inputConfirmPassword = $_POST['inputConfirmPassword'];
$termosUso = $_POST['termosUso']  === 'true' ? 1 : 0;

// Query de inserção
$sql_insert = "INSERT INTO usuarios (nome, sobrenome, email, nome_de_usuario, senha, termos_aceitos)
               VALUES ('$inputName', '$inputSurname', '$inputEmail', '$inputUser', '$inputPassword', '$termosUso')";

// Execute a consulta de inserção
if ($conexao->query($sql_insert) === TRUE) {
    echo "Usuário criado com sucesso.";
} else {
    echo "Erro: " . $conexao->error;
}

// Feche a conexão após o uso
$conexao->close();
