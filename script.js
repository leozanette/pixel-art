
function adicionaCor() {
    let paleta = document.getElementsByClassName('color');
    let cores = ['black', 'red', 'blue', 'green']
    for (i = 0; i < paleta.length; i += 1) {
        paleta[i].classList.add(cores[i])
    }
}
adicionaCor()



function chamaChange() {
    let paleta = document.getElementsByClassName('color')
    let black = paleta[0];
    let red = paleta[1];
    let blue = paleta[2];
    let green = paleta[3];

    black.addEventListener('click', changeSelected);
    red.addEventListener('click', changeSelected);
    blue.addEventListener('click', changeSelected);
    green.addEventListener('click', changeSelected);
}
chamaChange()

function changeSelected(event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
};





let size = 5

function createLines() {
    let board = document.querySelector('#pixel-board')
    for (i = 1; i <= size; i += 1) {
        let line = document.createElement('section');
        board.appendChild(line);
        line.className = 'lines'
    }
}
createLines()

function createPixels() {
    let lines = document.getElementsByClassName('lines')
    for (i = 0; i < lines.length; i += 1) {
        for (a = 1; a <= size; a += 1) {
            let pix = document.createElement('div');
            lines[i].appendChild(pix)
            pix.className = 'pixel'
        }
    }
}
createPixels()





// window.onload = function () {
//     let paleta = document.querySelector('.selected');
//     paleta.addEventListener('click', function() {
//         console.log(event.target.classList[1]);
//            })
// }

// function pintarPixel() {
//     // let corSelecionada = document.querySelector('.selected');
//     // let pixel = document.querySelector('.pixel');
//     // console.log(pixel.className)
//     // console.log(corSelecionada.className)
//     // let x = corSelecionada.classList.contains('black')
//     // console.log(x)
//     // pixel.addEventListener('click', console.log(event.target))
//     // if(corSelecionada.classList.contains('black')) {
//     //     pixel.style.backgroundColor = 'red'
//     // }

// }
// pintarPixel()

// OBSERVEI O PR DO HUGO FLAVIO, PARA RESOLVER ESTE EXERCICIO
// OBSERVEI QUE ELE UTILIZOU ALGUMAS FUNCOES QUE NAO VIMOS QUE FORAM O GETCOMPUTEDSTYLE E GETPROPERTYVALUE
//QUE RETORNAM AS INFORMAÇÕES DE ESTILO E APOS BACKGROUND COLOR RESPECTIVAMENTE
// AOPÓS ELE AIDICONOU UM EVENTLISTENER EM TODO DOCUMENTO, MAS UTILIZA UM IF PARA FAZER ALTERAÇÕES APENAS NOS QUE POSSUEM A CLASSE PIXEL

document.addEventListener('click', function(event) {
    let selected = document.querySelector('.selected');
    let styleSelected = window.getComputedStyle(selected);
    let styleBackground = styleSelected.getPropertyValue('background-color');

    if(event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = styleBackground
    }


})






function apagar() {
    let botao = document.getElementById('clear-board');
    botao.addEventListener('click', function () {
        let pixels = document.getElementsByClassName('pixel');
        for (i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = 'white'
        }
    })
}
apagar()
