<?php
require_once('conexao.php');

$response = array();

$inputEmail = $_POST['inputEmail'];
$inputPassword = $_POST['inputPassword'];

$response['success'] = false;
$response['message'] = "Fazendo login";

$emailId = buscaEmailUnico($conexao, $inputEmail);

if ($emailId !== -1) {
    $response['message'] = "Email existe";

    // Agora, verifique a senha com base no ID do email
    if (senhaEstaValida($conexao, $emailId, $inputPassword)) {
        $response['success'] = true;
        $response['message'] = "Login bem-sucedido";
    } else {
        $response['message'] = "E-mail ou Senha incorretos.";
    }
} else {
    $response['message'] = "E-mail ou Senha incorretos.";
}

function buscaEmailUnico($conexao, $email)
{
    $sql = "SELECT id FROM usuarios WHERE email = '$email'";
    $result = $conexao->query($sql);
    if ($result && $row = $result->fetch_assoc()) {
        return $row['id'];
    }
    return -1; // false
}
function senhaEstaValida($conexao, $id, $senha)
{
    $sql = "SELECT senha FROM usuarios WHERE id = $id";
    $result = $conexao->query($sql);
    if ($result && $row = $result->fetch_assoc()) {
        // return password_verify($senha, $row['senha']);
        $hash =  $row['senha'];
        return password_verify($senha, $hash);
    }
    return false;
}

header('Content-Type: application/json');
echo json_encode($response);
exit;
