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

// const feedbackErrorDiv = document.querySelector("#feedback-error")

// nameInput.value = "OlaTest"
surnameInput.value = "Sobrenome"
emailInput.value = 'Olaemail@gmail.com'
userInput.value = "OlaTestUser"
passwordInput.value = "9021dakslDSKADDLK00"
confirmPasswordInput.value = passwordInput.value
termosUsoCheckbox.checked = true

jQuery(form).find("input").on("invalid", function (event) {
  $(this).addClass('is-invalid');
});


jQuery(form).find("input").on("input", function () {
  if (this.checkValidity()) {
    $(this).removeClass('is-invalid');
  }
});
// function customValidationNameInput() {
//   const nameValue = nameInput.value.trim();

//   if (nameValue.length <= 10) {
//     nameInput.setCustomValidity("O nome deve ter mais de 10 caracteres.");
//   } else {
//     nameInput.setCustomValidity(""); // Campo é válido
//     nameInput.classList.removeClass("is-invalid")
//   }
// }

// nameInput.addEventListener("input", customValidationNameInput);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;
  const $inputs = $(this).find("input");

  // Reduzindo a quantidade de código do trim
  $inputs.each(function () {
    const $input = $(this);
    const trimmedValue = $input.val().trim();

    if (trimmedValue === "") {
      isValid = false;
      $input.addClass('is-invalid');
    } else {
      $input.removeClass('is-invalid');
    }
  });

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
  } else {
    return
  }
});
