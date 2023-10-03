const form = document.querySelector('#login-form'); // Converta para um objeto DOM
form.method = "POST";

const emailInputJs = $('#username')[0];
const passwordInputJs = $('#password')[0];

const validationDiv = $('#validationMessage')


// Valores testes...
// emailInputJs.value = 'Olaemail2@gmail.com'
// passwordInputJs.value = '9021daksdddddddlDSKADDLK00'
//
const $inputs = jQuery(form).find("input");

// Validando os inputs ao digitar
$inputs.on("input blur", function () {
  const $input = $(this);
  const value = $input.val().trim();

  if ($input.is(":invalid") || value === "") {
    $input.addClass("is-invalid");
  } else {
    $input.removeClass("is-invalid");
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  //[0] transforma para DOM
  const $inputs = $(this).find("input");
  let isValid = true;

  $inputs.each(function () {
    const $input = $(this);

    const trimmedValue = $input.val().trim();
    isValid = trimmedValue !== "";

    $input.toggleClass('is-invalid', !isValid);
  });

  if (validationDiv.text().trim() !== "") {
    isValid = false;
  }

  if (isValid) {
    $.ajax({
      type: "POST",
      url: "/../php/login.php",
      data: {
        inputEmail: emailInputJs.value,
        inputPassword: passwordInputJs.value,
      },
      success: function (response) {
        console.log(response);
        if (!response.success) {
          $(validationDiv).text(response.message).removeClass("text-success").addClass("text-danger");
        } else {
          // redirecionar
          console.log('redirecionar')
          window.open('/html/traducao.html')
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
