function toggleTexto() {
  const texto = document.getElementById('texto');
  const botao = document.getElementById('toggleButton');

  if (texto.style.display === 'none') {
    texto.style.display = 'block';
    botao.textContent = 'Ocultar';
  } else {
    texto.style.display = 'none';
    botao.textContent = 'Aparecer';
  }
}

document.getElementById('toggleButton').addEventListener('click', toggleTexto);
