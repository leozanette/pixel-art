const size = document.getElementById('board-size');

function adicionaCor() {
  const paleta = document.getElementsByClassName('color');
  const cores = ['black', 'red', 'blue', 'green'];
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.add(cores[i]);
  }
}
adicionaCor();

function geraCores() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function changeColors() {
  const paleta = document.getElementsByClassName('color');
  for (let i = 1; i < paleta.length; i += 1) {
    const cor = geraCores();
    paleta[i].style.backgroundColor = cor;
  }
}
changeColors();

function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function chamaChange() {
  const paleta = document.getElementsByClassName('color');
  const black = paleta[0];
  const red = paleta[1];
  const blue = paleta[2];
  const green = paleta[3];

  black.addEventListener('click', changeSelected);
  red.addEventListener('click', changeSelected);
  blue.addEventListener('click', changeSelected);
  green.addEventListener('click', changeSelected);
}
chamaChange();

function removeQuadro() {
  const quadro = document.getElementById('pixel-board');
  for (let i = quadro.childNodes.length - 1; i >= 0; i -= 1) {
    const currentChildren = quadro.childNodes[i];
    currentChildren.remove();
  }
}

function alerta() {
  if (size.value < 5 || size.value > 50 || size.value === '') {
    return alert('Board inválido!');
  }
}

function ajusteSize() {
  if (size.value > 50) {
    size.value = 50;
  }
  if (size.value < 5 && size.value > 0) {
    size.value = 5;
  } return size.value;
}

function createLines(x) {
  const board = document.querySelector('#pixel-board');
  for (let i = 1; i <= x; i += 1) {
    const line = document.createElement('section');
    board.appendChild(line);
    line.className = 'lines';
  }
}

function createPixels(x) {
  const lines = document.getElementsByClassName('lines');
  for (let i = 0; i < lines.length; i += 1) {
    for (let a = 1; a <= x; a += 1) {
      const pix = document.createElement('div');
      lines[i].appendChild(pix);
      pix.className = 'pixel';
    }
  }
}

document.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const styleSelected = window.getComputedStyle(selected);
  const styleBackground = styleSelected.getPropertyValue('background-color');

  if (event.target.classList.contains('pixel')) {
    const pixel = event.target;
    pixel.style.backgroundColor = styleBackground;
  }
});

function apagar() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

apagar();

createLines(5);
createPixels(5);

function rodarQuadro() {
  removeQuadro();
  alerta();
  createLines(ajusteSize());
  createPixels(ajusteSize());
}

const vqv = document.getElementById('generate-board');
vqv.addEventListener('click', rodarQuadro);
