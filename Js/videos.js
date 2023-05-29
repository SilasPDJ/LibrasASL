  function toggleDescricao(descricaoId) {
    var descricaoElement = document.getElementById('descricao-' + descricaoId);
    descricaoElement.style.display = descricaoElement.style.display === 'none' ? 'block' : 'none';
  }