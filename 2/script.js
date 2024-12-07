function adicionarItem() {

  const texto = document.getElementById('campoTexto').value;

  if (texto.trim() !== "") {

    const item = document.createElement('li');
    item.textContent = texto;

    document.getElementById('lista').appendChild(item);


    document.getElementById('campoTexto').value = "";
  }
}
