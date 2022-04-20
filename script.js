let black = document.querySelector('.black');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');

function changeSelected(event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
};

black.addEventListener('click', changeSelected);
red.addEventListener('click', changeSelected);
blue.addEventListener('click', changeSelected);
green.addEventListener('click', changeSelected);

