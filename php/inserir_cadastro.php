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


// --- Verifica se as variáveis estão definidas e não vazias
if (!isset($inputName) || empty($inputName)) {
    $response['inputName'] = "Preencha o campo nome.";
}

if (!isset($inputSurname) || empty($inputSurname)) {
    $response['inputSurname'] = "Preencha o campo sobrenome.";
}

if (!isset($inputEmail) || empty($inputEmail)) {
    $response['inputEmail'] = "Preencha o campo email.";
}

if (!isset($inputUser) || empty($inputUser)) {
    $response['inputUser'] = "Preencha o campo nome de usuário.";
}

if (!isset($inputPassword) || empty($inputPassword)) {
    $response['inputPassword'] = "Preencha o campo senha.";
}

if (!isset($inputConfirmPassword) || empty($inputConfirmPassword)) {
    $response['inputConfirmPassword'] = "Preencha o campo confirmação de senha.";
}

// --- Validando formulario
if ($inputPassword !== $inputConfirmPassword) {
    $response['inputConfirmPassword'] = "Verifique a correspondência das senhas.";
}

if (strlen($inputPassword) < 8) {
    $response['inputPassword'] = "Senha deve conter no mínimo 8 caracteres.";
}

// Validação para verificar se o e-mail já está em uso
if (emailJaCadastrado($conexao, $inputEmail)) {
    $response['inputEmail'] = "E-mail informado já está em uso.";
}

if ($termosUso !== 1) {
    $response['termosUso'] = "Você deve concordar com os termos de uso.";
}

// Insira o novo usuário
if (empty($response)) {
    if (inserirNovoUsuario($conexao, $inputName, $inputSurname, $inputEmail, $inputUser, $inputPassword, $termosUso)) {
        $response['success'] = true;
        $response['message'] = "Usuário criado com sucesso.";
    } else {
        $response['inputUser'] = "Erro ao inserir usuário.";
    }
} else {
    $response['success'] = false;
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
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);


    $sql = "INSERT INTO usuarios (nome, sobrenome, email, nome_de_usuario, senha, termos_aceitos)
            VALUES ('$nome', '$sobrenome', '$email', '$nomeDeUsuario', '$senhaHash', '$termosAceitos')";
    return $conexao->query($sql);
}

// Fechar a conexão após o uso
$conexao->close();

header('Content-Type: application/json');
echo json_encode($response);
exit;
