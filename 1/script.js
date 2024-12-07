function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // Gera uma cor aleatória
  }
  return color;
}

const button = document.getElementById('AlteraCor');

button.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomColor();
});