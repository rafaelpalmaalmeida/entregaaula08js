const objetos = [
    { nome: 'Objeto 1', propriedade: 'Valor 1' },
    { nome: 'Objeto 2', propriedade: 'Valor 2' },
    { nome: 'Objeto 3', propriedade: 'Valor 3' }
  ];

  const listaElementos = document.getElementById('lista-elementos');

objetos.forEach(objeto => {
  const novoElemento = document.createElement('li');
  novoElemento.textContent = `Nome: ${objeto.nome}, Propriedade: ${objeto.propriedade}`;
  listaElementos.appendChild(novoElemento);
});

