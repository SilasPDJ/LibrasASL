// Selecione o formulário
const form = document.querySelector("#cadastro-form");

// Configurando o action, ou seja, destino do formulário (ajax...)
// form.action = "/../php/cadastro.php"
form.method = "POST"

// Seleciona os campos do formulário
const nameInput = document.querySelector("#inputName");
const surnameInput = document.querySelector("#inputSurname");
const emailInput = document.querySelector("#inputEmail");
const userInput = document.querySelector("#inputUser");
const passwordInput = document.querySelector("#inputPassword");
const confirmPasswordInput = document.querySelector("#inputConfirmPassword");
const termosUsoCheckbox = document.querySelector("#termosUso");

const feedbackErrorDiv = document.querySelector("#feedback-error")

// --- Para testes
// nameInput.value = "OlaTest2"
// surnameInput.value = "Sobrenome2"
// emailInput.value = 'Olaemail2@gmail.com'
// userInput.value = "OlaTestUser2"
// passwordInput.value = "9021daksdddddddlDSKADDLK00"
// confirmPasswordInput.value = passwordInput.value
// termosUsoCheckbox.checked = true
// 

// settando alguns atributos dos inputs PATTERNS

function setMinLengthPatternAndTitle(inputElement, minLength) {
  // Função auxiliar que configura o mínimo de caracteres permitido no input
  if (inputElement) {
    inputElement.setAttribute('pattern', '.{' + minLength + ',}');
    inputElement.setAttribute('title', 'Deve conter pelo menos ' + minLength + ' caracteres');
  }
}
setMinLengthPatternAndTitle(nameInput, 3);
setMinLengthPatternAndTitle(surnameInput, 3);
setMinLengthPatternAndTitle(userInput, 5);

const $inputs = jQuery(form).find("input");

// Validando os inputs ao digitar
$inputs.on("input change blur", function (event) {
  const $input = $(this);
  const value = $input.val().trim();

  const isValidEmail = function (email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  if ($input.is(":invalid") || (this === emailInput && !isValidEmail(value)) || value === "") {
    if (event.type === "blur") {
      $input.addClass("is-invalid");

    }
  } else {
    $input.removeClass("is-invalid");
  }
});


//
function ValidatePasswords(inputSenha, inputConfirmarSenha, matchDiv, otherValidationsDiv) {
  // O selector dos inputs deve ser em javascript, não jQuery
  $(inputSenha).add(inputConfirmarSenha).on("input", function () {
    const senha = $(inputSenha).val();
    const confirmarSenha = $(inputConfirmarSenha).val();
    const NUMBER_REGEX = /([0-9])/;
    const ALPHABETS_REGEX = /([a-z].*[A-Z]|[A-Z].*[a-z])/;
    const SPECIAL_CHARACTERS = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    // Validando critérios de senha
    let feedbackArray = []

    $(matchDiv).removeClass("text-success").addClass("text-danger")
    if (senha.length < 8 && confirmarSenha.length < 8) {
      feedbackArray.push("Senha deve conter no mínimo 8 caracteres.");
    }
    // Validando a confirmação de senha
    if (senha !== confirmarSenha && confirmarSenha) {
      feedbackArray.push("As senhas não correspondem.");
    }

    // Configurando o texto do feedbackText
    let feedbackText = ''
    for (let feedback of feedbackArray) {
      feedbackText += `${feedback}<br/>`
    }
    feedbackText += "<br/>"

    $(matchDiv).html(feedbackText)

  });
}

const passwordMatchDiv = $('#passwordMatchMessage')
const validationDiv = $('#validationMessage')

ValidatePasswords(passwordInput, confirmPasswordInput, passwordMatchDiv)


// Após submits & chama ajax
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const $inputs = $(this).find("input");

  let isValid = true;

  $inputs.each(function () {
    const $input = $(this);

    // Valida se o valor está vazio...
    const trimmedValue = $input.val().trim();
    isValid = trimmedValue !== "";
    $input.toggleClass('is-invalid', !isValid);

  });

  // Validação direto do php...
  console.log(isValid)
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
        if (!response.success) {
          let errorMessage = "";
          for (let key in response) {
            if (key !== "success") {
              errorMessage += response[key] + "<br/>";
            }
          }
          $(validationDiv).html(errorMessage).removeClass("text-success").addClass("text-danger");
        } else {
          // redirecionar
        }
      },
      error: function () {
        alert("Erro ao enviar o formulário via AJAX.");
      },
    });
  } else {
    return
  }
});
