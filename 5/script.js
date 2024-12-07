let contador = 0;

function aumentarContador() {
  contador++;
  document.getElementById('contador').textContent = 'Contador: ' + contador;
}
document.getElementById('cont').addEventListener('click', aumentarContador);
