<?php
require_once('conexao.php');

// Inicialize um array para armazenar a resposta
$response = array();

// Receba os dados do JavaScript
$inputName = $_POST['inputName'];
$inputSurname = $_POST['inputSurname'];
$inputEmail = $_POST['inputEmail'];
$inputUser = $_POST['inputUser'];
$inputPassword = $_POST['inputPassword'];
$inputConfirmPassword = $_POST['inputConfirmPassword'];
$termosUso = $_POST['termosUso']  === 'true' ? 1 : 0;

$response['success'] = false;
// Validação EXTRA das senhas (se o espertinho desativar o javascript)
if ($inputPassword !== $inputConfirmPassword) {
    $response['message'] = "Verifique a correspondência das senhas.";
} else if (strlen($inputPassword) < 8) {
    $response['message'] = "Senha deve conter no mínimo 8 caracteres.";
    // TODO: outras verificações de password vamos fazer somente no frontend(?)
} else {

    // Validação para verificar se o e-mail já está em uso
    if (emailJaCadastrado($conexao, $inputEmail)) {
        $response['message'] = "Este e-mail já está em uso, tente outro.";
    } else {
        // Insira o novo usuário
        if (inserirNovoUsuario($conexao, $inputName, $inputSurname, $inputEmail, $inputUser, $inputPassword, $termosUso)) {
            $response['success'] = true;
            $response['message'] = "Usuário criado com sucesso.";
        } else {
            $response['message'] = "Erro ao inserir usuário.";
        }
    }
}

// Verificar se o email ja foi cadastrado
function emailJaCadastrado($conexao, $email)
{
    $sql = "SELECT COUNT(*) AS count FROM usuarios WHERE email = '$email'";
    $result = $conexao->query($sql);
    if ($result && $row = $result->fetch_assoc()) {
        return $row['count'] > 0;
    }
    return false;
}

// Função para inserir o novo usuário
function inserirNovoUsuario($conexao, $nome, $sobrenome, $email, $nomeDeUsuario, $senha, $termosAceitos)
{
    $sql = "INSERT INTO usuarios (nome, sobrenome, email, nome_de_usuario, senha, termos_aceitos)
            VALUES ('$nome', '$sobrenome', '$email', '$nomeDeUsuario', '$senha', '$termosAceitos')";
    return $conexao->query($sql);
}

// Fechar a conexão após o uso
$conexao->close();

header('Content-Type: application/json');
echo json_encode($response);
