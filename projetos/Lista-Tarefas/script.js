const tarefa = window.document.querySelector('input#texto-tarefa');
const olLista = window.document.querySelector('ol#lista-tarefas');
const botaoAdd = window.document.querySelector('button#criar-tarefa');
const listaTerfas = [];

botaoAdd.addEventListener('click', function () {
  const itemLi = window.document.createElement('li');
  itemLi.innerText = tarefa.value;
  listaTerfas.push(itemLi.innerText);
  olLista.appendChild(itemLi);
  tarefa.value = '';
});

olLista.addEventListener('click', function (arg1) {
  const fundoLi = window.document.querySelectorAll('ol#lista-tarefas li');
  if (arg1.target.style.backgroundColor === '' || arg1.target.style.backgroundColor === 'seashell') {
    for (let i of fundoLi) {
      i.style.backgroundColor = 'seashell';
    };
    arg1.target.style.backgroundColor = 'gray';
  };
});

olLista.addEventListener('dblclick', function (arg1) {
  if (arg1.target.className === '') {
    arg1.target.classList.add('completed');
  } else {
    arg1.target.classList.remove('completed');
  };
});

const botaoClear = window.document.querySelector('button#apaga-tudo');
botaoClear.addEventListener('click', function () {
  const itens = window.document.querySelectorAll('ol#lista-tarefas li');
  for (let i of itens) {
    olLista.removeChild(i);
  };
});

const botaoClearCompleted = window.document.querySelector('button#remover-finalizados');
botaoClearCompleted.addEventListener('click', function () {
  const itens = window.document.querySelectorAll('ol#lista-tarefas li');
  for (let i of itens) {
    if (i.className === 'completed') {
      olLista.removeChild(i);
    };
  };
});