// Selecione o formulário
const form = document.querySelector("#cadastro-form");

// Selecione os campos do formulário
const nameInput = document.querySelector("#inputName");
const surnameInput = document.querySelector("#inputSurname");
const emailInput = document.querySelector("#inputEmail");
const userInput = document.querySelector("#inputUser");
const passwordInput = document.querySelector("#inputPassword");
const confirmPasswordInput = document.querySelector("#inputConfirmPassword");
const termosUsoCheckbox = document.querySelector("#termosUso");

// Adicione um evento de envio ao formulário
form.addEventListener("submit", function(event) {
  // Previna o envio do formulário
  event.preventDefault();

  // Valide os campos
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    alert("Por favor, preencha o campo Nome.");
  }

  if (surnameInput.value.trim() === "") {
    isValid = false;
    alert("Por favor, preencha o campo Sobrenome.");
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
    alert("Por favor, preencha o campo E-mail.");
  }

  if (userInput.value.trim() === "") {
    isValid = false;
    alert("Por favor, preencha o campo Nome de Usuário.");
  }

  if (passwordInput.value.trim() === "") {
    isValid = false;
    alert("Por favor, preencha o campo Senha.");
  }

  if (confirmPasswordInput.value.trim() === "") {
    isValid = false;
    alert("Por favor, preencha o campo Confirmar Senha.");
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    isValid = false;
    alert("As senhas não correspondem.");
  }

  if (!termosUsoCheckbox.checked) {
    isValid = false;
    alert("Por favor, aceite os Termos de Uso.");
  }

  // Se todos os campos estiverem preenchidos e as senhas correspondem, envie o formulário
  if (isValid) {
    form.submit();
  }
});
