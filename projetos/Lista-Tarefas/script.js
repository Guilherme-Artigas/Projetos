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
  for (let i of fundoLi) {
    i.classList.remove('selecionado');
  };
  if (arg1.target.className.includes('selecionado')) {
    arg1.target.classList.remove('selecionado');
  } else {
    arg1.target.classList.add('selecionado');
  }
});

olLista.addEventListener('dblclick', function (arg1) {
  if (arg1.target.className === 'selecionado') {
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
    if (i.className.includes('completed')) {
      olLista.removeChild(i);
    };
  };
});

const botaoSalvar = window.document.querySelector('button#salvar-tarefas');
botaoSalvar.addEventListener('click', function () {
  const itens = window.document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('salvar', itens);
});

function salvos () {
  const list = window.document.querySelector('ol#lista-tarefas');
  list.innerHTML = localStorage.getItem('salvar');
};

window.onload = salvos;

const botaoCima = window.document.querySelector('button#mover-cima');
botaoCima.addEventListener('click', function () {
  const itemSelecionado = window.document.querySelector('li.selecionado');
  if (itemSelecionado == null || itemSelecionado.previousElementSibling === null) {
    alert('Não é possivel mover o item selecionado!');
  } else if (itemSelecionado.classList.contains('selecionado')) {
    itemSelecionado.previousElementSibling.before(itemSelecionado);
  };
});

const botaoBaixo = window.document.querySelector('button#mover-baixo');
botaoBaixo.addEventListener('click', function () {
  const itemSelecionado = window.document.querySelector('li.selecionado');
  if (itemSelecionado == null || itemSelecionado.nextElementSibling === null) {
    alert('Não é possivel mover o item selecionado!');
  } else if (itemSelecionado.classList.contains('selecionado')) {
    itemSelecionado.nextElementSibling.after(itemSelecionado);
  };
});

const removeSelected = window.document.querySelector('button#remover-selecionado');
removeSelected.addEventListener('click', function () {
  const itemSelecionado = window.document.querySelector('li.selecionado');
  olLista.removeChild(itemSelecionado);
});