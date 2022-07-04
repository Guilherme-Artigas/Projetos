const ulPixelBoard = window.document.querySelector('ul#pixel-board');
for (let indice = 1; indice <= 25; indice += 1) {
  const itemLi = window.document.createElement('li');
  itemLi.className = 'pixel white';
  ulPixelBoard.appendChild(itemLi);
};

let selected = 'black';

const corPreto = window.document.querySelector('li.black');

const corbottleGreen = window.document.querySelector('li.bottleGreen');
const r1 = Math.floor(Math.random() * 255);
const g1 = Math.floor(Math.random() * 255);
const b1 = Math.floor(Math.random() * 255);
corbottleGreen.style.backgroundColor = `rgb(${r1}, ${g1}, ${b1})`;

const coroceanGreen = window.document.querySelector('li.oceanGreen');
const r2 = Math.floor(Math.random() * 255);
const g2 = Math.floor(Math.random() * 255);
const b2 = Math.floor(Math.random() * 255);
coroceanGreen.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;

const corblueVioletWheel = window.document.querySelector('li.blueVioletWheel');
const r3 = Math.floor(Math.random() * 255);
const g3 = Math.floor(Math.random() * 255);
const b3 = Math.floor(Math.random() * 255);
corblueVioletWheel.style.backgroundColor = `rgb(${r3}, ${g3}, ${b3})`;

corPreto.addEventListener('click', function () {
  corbottleGreen.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  corPreto.classList.add('selected');
  selected = 'black';
});
corbottleGreen.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  corbottleGreen.classList.add('selected');
  // selected = 'bottleGreen';
  selected = `rgb(${r1}, ${g1}, ${b1})`;
});
coroceanGreen.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  corbottleGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  coroceanGreen.classList.add('selected');
  // selected = 'oceanGreen';
  selected = `rgb(${r2}, ${g2}, ${b2})`;
});
corblueVioletWheel.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  corbottleGreen.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.add('selected');
  // selected = 'blueVioletWheel';
  selected = `rgb(${r3}, ${g3}, ${b3})`;
});

ulPixelBoard.addEventListener('click', function (arg1) {
  // arg1.target.className = 'pixel ' + selected;
  arg1.target.style.backgroundColor = selected;
});

const buttonClear = window.document.querySelector('button#clear-board');
buttonClear.addEventListener('click', function () {
  const allLi = window.document.querySelectorAll('li.pixel');
  for (let i of allLi) {
    i.className = 'pixel';
    i.style.backgroundColor = 'white';
  };
});

const buttonGenerator = window.document.querySelector('button#generate-board');
buttonGenerator.addEventListener('click', function () {
  const boardSizeString = window.document.querySelector('input#board-size');
  if (boardSizeString.value === '') {
    alert('Board inválido!');
  } else {
    let boardSizeNumber = parseInt(boardSizeString.value);
    if (boardSizeNumber > 50) {
      boardSizeNumber = 50;
    };
    ulPixelBoard.style.height = '100%';
    ulPixelBoard.style.width = '100%';
    for (let indice = 1; indice <= (boardSizeNumber * boardSizeNumber - 25); indice += 1) {
      const itemLista = window.document.createElement('li');
      itemLista.className = 'pixel white';
      ulPixelBoard.appendChild(itemLista);
    };
  };
});