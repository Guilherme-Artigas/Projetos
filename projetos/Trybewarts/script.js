const fieldEmail = document.getElementById('fieldEmail');
const fieldSenha = document.getElementById('fieldSenha');
const btnLogin = document.getElementById('btn-login');
const submitBtn = document.getElementById('submit-btn');
const submitCheck = document.getElementById('agreement');
const contadora = window.document.querySelector('span#counter');
const fieldC = window.document.querySelector('#textarea');

submitCheck.addEventListener('click', () => {
  if (submitCheck.checked === true) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active');
  } else {
    submitBtn.setAttribute('disabled', '');
    submitBtn.classList.remove('active');
  }
});

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  if (fieldEmail.value === 'tryber@teste.com' && fieldSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

contadora.innerHTML = `Restam ${500} caracteres.`;
fieldC.addEventListener('keyup', () => {
  contadora.innerHTML = `Restam ${500 - fieldC.value.length} caracteres.`;
});

submitBtn.addEventListener('click', () => {
  const getConteudo = window.document.querySelectorAll('input.subject');
  const listaConteudo = [];
  for (let indice = 0; indice < getConteudo.length; indice += 1) {
    if (getConteudo[indice].checked === true) {
      listaConteudo.push(getConteudo[indice].value);
    }
  }
  const cadastro = {
    nome: window.document.querySelector('input#input-name').value,
    sobrenome: window.document.querySelector('input#input-lastname').value,
    email: window.document.querySelector('input#input-email').value,
    house: window.document.querySelector('select#house').value,
    family: window.document.querySelector('input[name="family"]:checked').value,
    conteudo: listaConteudo,
    avalicacao: window.document.querySelector('input[name="rate"]:checked').value,
    coments: window.document.querySelector('textarea#textarea').value,
  };
  localStorage.setItem('cadastro', JSON.stringify(cadastro));
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const mainFather = window.document.querySelector('main');
  const formEvaluation = window.document.querySelector('form#evaluation-form');
  const imgFormLogo = window.document.querySelector('img#trybewarts-forms-logo');
  const cadastroString = localStorage.getItem('cadastro');
  const objCadastro = JSON.parse(cadastroString);
  formEvaluation.style.display = 'none';
  mainFather.removeChild(imgFormLogo);
  const newForm = window.document.createElement('form');
  newForm.id = 'form-data';
  mainFather.appendChild(newForm);
  newForm.innerText = `Nome: ${objCadastro.nome} ${objCadastro.sobrenome}
  Email: ${objCadastro.email}
  Casa: ${objCadastro.house}
  Família: ${objCadastro.family}
  Matérias: ${objCadastro.conteudo}
  Avaliação: ${objCadastro.avalicacao}
  Observações: ${objCadastro.coments}`;
});
