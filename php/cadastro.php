<?php
// include '../js/ajax/conexao_cadastro.js'; // Inclua o arquivo de conexão
// TODO: migrar para somente um arquivo chamado conexão.js com a url via parâmetro

// Aqui você pode receber dados do JavaScript
$inputName = $_POST['inputName'];
$inputSurname = $_POST['inputSurname'];
$inputEmail = $_POST['inputEmail'];
$inputUser = $_POST['inputUser'];
$inputPassword = $_POST['inputPassword'];
$inputConfirmPassword = $_POST['inputConfirmPassword'];
$termosUso = $_POST['termosUso'];
// Exemplo de consulta SQL

echo $inputName;
echo "<br>";
echo $inputSurname;
echo "<br>";
echo $inputEmail;
echo "<br>";
echo $inputUser;
echo "<br>";
echo $inputPassword;
echo "<br>";
echo $inputConfirmPassword;
echo "<br>";
echo $termosUso;

$consulta = "SELECT * FROM sua_tabela WHERE coluna = '$parametro'";

// Execute a consulta no banco de dados
$resultado = $conexao->query($consulta);

// Processar os resultados e retornar como JSON, por exemplo
$dados = $resultado->fetch_all(MYSQLI_ASSOC);
echo json_encode($dados);

// Feche a conexão após o uso
$conexao->close();
