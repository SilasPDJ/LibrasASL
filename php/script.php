<?php
include '../js/ajax/conexao.js'; // Inclua o arquivo de conexão

// Aqui você pode receber dados do JavaScript
$parametro = $_POST['parametro'];

// Exemplo de consulta SQL
$consulta = "SELECT * FROM sua_tabela WHERE coluna = '$parametro'";

// Execute a consulta no banco de dados
$resultado = $conexao->query($consulta);

// Processar os resultados e retornar como JSON, por exemplo
$dados = $resultado->fetch_all(MYSQLI_ASSOC);
echo json_encode($dados);

// Feche a conexão após o uso
$conexao->close();
?>
