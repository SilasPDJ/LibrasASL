// Selecione o formulário
const form = document.querySelector("#cadastro-form");

// Configurando o action, ou seja, destino do formulário
// form.action = "/../php/cadastro.php"
form.method = "POST"

// Selecione os campos do formulário
const nameInput = document.querySelector("#inputName");
const surnameInput = document.querySelector("#inputSurname");
const emailInput = document.querySelector("#inputEmail");
const userInput = document.querySelector("#inputUser");
const passwordInput = document.querySelector("#inputPassword");
const confirmPasswordInput = document.querySelector("#inputConfirmPassword");
const termosUsoCheckbox = document.querySelector("#termosUso");

nameInput.value = "OlaTest"
surnameInput.value = "Sobrenome"
emailInput.value = 'Olaemail@gmail.com'
userInput.value = "OlaTestUser"
passwordInput.value = "9021dakslDSKADDLK00"
confirmPasswordInput.value = passwordInput.value
termosUsoCheckbox.checked = true

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    // alert("Por favor, preencha o campo Nome.");
  }

  if (surnameInput.value.trim() === "") {
    isValid = false;
    // alert("Por favor, preencha o campo Sobrenome.");
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
    // alert("Por favor, preencha o campo E-mail.");
  }

  if (userInput.value.trim() === "") {
    isValid = false;
    // alert("Por favor, preencha o campo Nome de Usuário.");
  }

  if (passwordInput.value.trim() === "") {
    isValid = false;
    // alert("Por favor, preencha o campo Senha.");
  }

  if (confirmPasswordInput.value.trim() === "") {
    isValid = false;
    // alert("Por favor, preencha o campo Confirmar Senha.");
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    isValid = false;
    // alert("As senhas não correspondem.");
  }

  if (!termosUsoCheckbox.checked) {
    isValid = false;
    // alert("Por favor, aceite os Termos de Uso.");
  }

  if (isValid) {
    $.ajax({
      type: "POST",
      url: "/../php/inserir_cadastro.php",
      data: {
        inputName: nameInput.value,
        inputSurname: surnameInput.value,
        inputEmail: emailInput.value,
        inputUser: userInput.value,
        inputPassword: passwordInput.value,
        inputConfirmPassword: confirmPasswordInput.value,
        termosUso: termosUsoCheckbox.checked,
      },
      success: function (response) {
        console.log(response);
      },
      error: function () {
        alert("Erro ao enviar o formulário via AJAX.");
      },
    });
  }
});
