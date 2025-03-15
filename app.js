const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const btnTentar = document.querySelector('#btn-tentar');
const btnJogar = document.querySelector('#btn-jogar');

let numRandom = Math.floor(Math.random() * 10) + 1; 
let tentativas = 1;

function lendoClick(event) {
    event.preventDefault();

    const valoInput = document.querySelector('#valorDoInput');

    if (Number(valoInput.value) === numRandom) { 
        alterar();

        tela2.querySelector('.tela2 h2').innerHTML = `Você acertou em ${tentativas} tentativas!`;
    }

    valoInput.value = ''; 
    tentativas++;
}

function restaurar() {
    alterar();
    tentativas = 1;
}

function alterar() {
    tela1.classList.toggle('hide');
    tela2.classList.toggle('hide');
}

btnTentar.addEventListener('click', lendoClick); 

btnJogar.addEventListener('click', restaurar);
