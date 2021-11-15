const timer = document.querySelector('#relogio');
const start = document.querySelector('#relogioStart');
const stop = document.querySelector('#relogioStop');
const reset = document.querySelector('#relogioReset');
let segundos = 0;
let contadorRelogio;

// Criando o Relogio
function criarRelogioSegundos(seg){
    const hora = new Date(seg * 1000);
    return hora.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: 'GMT'
    });
    
}

// inicia o relogio em segundos
function startRelogioSegundos(){
    contadorRelogio = setInterval(() => {
        segundos++; // faz com que cada multiplicação do seg * 1000 mude virando 2000,3000,4000 etc... assim contando o timer
        timer.innerHTML = criarRelogioSegundos(segundos);
    }, 1000);
};

start.addEventListener('click', () => {
    relogio.classList.remove('stop');
    clearInterval(contadorRelogio);
    startRelogioSegundos();
});

// para o relogio
stop.addEventListener('click', () => {
    clearInterval(contadorRelogio);
    relogio.classList.add('stop');
});

// reseta o relogio
reset.addEventListener('click', () =>{
    clearInterval(contadorRelogio);
    relogio.classList.remove('stop');
    timer.innerHTML = "00:00:00";
    segundos = 0;
});
