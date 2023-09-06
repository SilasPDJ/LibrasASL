// Exemplo de AJAX com jQuery

$.ajax({
  url: '../php/cadastro.php',
  method: 'POST',
  data: { parametro: 'valor' },
  success: function (resposta) {
    // Processar a resposta do servidor
    console.log(resposta);
  },
  error: function (erro) {
    console.error("Erro na solicitação: " + erro);
  }
});
