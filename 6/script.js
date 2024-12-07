function alternarLampada() {
  const lampada = document.getElementById('lampada');
  const botao = document.getElementById('toggleButton');

  if (lampada.style.backgroundColor === 'gray') {
    lampada.style.backgroundColor = 'yellow';
    botao.textContent = 'Desligar';
  } else {
    lampada.style.backgroundColor = 'gray';
    botao.textContent = 'Ligar';
  }
}
document.getElementById('toggleButton').addEventListener('click', alternarLampada);
