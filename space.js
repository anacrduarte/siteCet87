
   // Adiciona os event listeners para o botão "Iniciar Jogo"
   document.getElementById("btnStartGame").addEventListener("click", SpaceInvaders);
   
   function disableScroll(event) {
    // Lista de códigos de teclas que causam scroll
    const keys = [32, 37, 38, 39, 40]; // Barra de espaço (32) e setas de direção (37, 38, 39, 40)

    if (keys.includes(event.keyCode)) {
        event.preventDefault();
    }
}

// Adicionar event listeners para keydown e keyup
window.addEventListener('keydown', disableScroll);
window.addEventListener('keyup', disableScroll);



function SpaceInvaders(){
   
document.getElementById("btnStartGame").disabled = true;


const audioVitoria = new Audio('sons/1.wav');
const audioDerrota = new Audio('sons/2.wav');
const grid = document.querySelector('.grid');
const results = document.querySelector('.results');

const width = 15;

const aliensRemoved = [];
let currentShooterIndex = 202;
let invaderId;
let isGoingRigth = true;
let direction = 1;
let resultados = 0;
//para criar os quadrados
for ( let i = 0; i < width * width; i++){
   const square =  document.createElement('div');
  
   //para por os quadrados(div) na grid
   grid.appendChild(square);
}
//criar um array de todos os elementos
const squares = Array.from(document.querySelectorAll('.grid div'));

//definir os space invaders
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];

//função para mostar os space invaders
//quantos elementos tivermos no array é quanto o loop vai fazer
function draw(){
    for( let i = 0; i < alienInvaders.length; i++){
        //se não existir no array aliensRemoved então é criado
        if(!aliensRemoved.includes(i)){
        //adicionar a classe invader
        squares[alienInvaders[i]].classList.add('invader');
        
    }
    }
}
draw();

squares[currentShooterIndex].classList.add('shooter');

//função para remover todos os invasores
function remove(){
    for(let i = 0; i < alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.remove('invader');
    }
}

//função para mover shooter
function moveShooter(e){
    //para remover o shooter/limpar
    squares[currentShooterIndex].classList.remove('shooter');
    //para funcionar quando carregamos nas teclas
    switch(e.key){
        case 'ArrowLeft':
            //para nao sair do quadrado grande
            if(currentShooterIndex % width !== 0) currentShooterIndex -= 1
            break;
            case 'ArrowRight':
                //para nao sair do quadrado grande
                if(currentShooterIndex % width < width - 1) currentShooterIndex += 1
                break;
    }
    //voltar a adicionar a classe porque acabamos de a mudar
    squares[currentShooterIndex].classList.add('shooter');
}

document.addEventListener('keydown', moveShooter);

//função para mover os invasores
function moveInvaders(){
    //para saber-mos as posições iniciais e finais da grid
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;

    remove();
        //fazemos estas configurações para que os invadores andem em bloco não se dividam e que mudem de direcção
    if(rightEdge && isGoingRigth){
        for( let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width + 1;
            direction = -1;
            isGoingRigth = false;
        }
    }

    if(leftEdge && !isGoingRigth){
        for( let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width - 1;
            direction = 1;
            isGoingRigth = true;
        }
    }
    //adicionar a nova direção
    for( let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += direction;
    }
    //voltar a fazer os space invaders
    draw();
    
    //se perdemos
    //se os space invaders acertarem no shooter, ELE NÃO DISPAROU NOS INVASORES ANTES DELES CHAGAREM
    /* if(squares[currentShooterIndex].classList.contains('invader')){
       document.getElementById("acertasEspaco").innerHTML = "";
        results.innerHTML = 'GAME OVER!';
        audioDerrota.play();
        clearInterval(invaderId);
        document.getElementById("btnStartGame").disabled = false;
       
        
    }*/
    for (let i = 0; i < alienInvaders.length; i++) {
        if (alienInvaders[i] >= currentShooterIndex) {
            document.getElementById("acertasEspaco").innerHTML = "";
            results.innerHTML = 'Perdeu!';
            audioDerrota.play();
            clearInterval(invaderId);
            document.getElementById("btnStartGame").disabled = false;
            return;
        }
    }

    //se ganhamos
    if(aliensRemoved.length === alienInvaders.length){
        document.getElementById("acertasEspaco").innerHTML = "";
        results.innerHTML = "Ganhou!!!!!";
        audioVitoria.play();
        clearInterval(invaderId);
        document.getElementById("btnStartGame").disabled = false;
        
    }
   
   

}
//para eles se mexerem de 600 em 600 ms
invaderId = setInterval(moveInvaders, 600);

//função para atirar nos invasores
function shoot(e){
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser');
        //definimos para onde queromos que ele va neste caso é para cima
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

         //para frazer desaparecer os invaders
    if(squares[currentLaserIndex].classList.contains('invader')){
        squares[currentLaserIndex].classList.remove('invader');
        squares[currentLaserIndex].classList.remove('laser');
        squares[currentLaserIndex].classList.add('boom');

        //remover a classe passado x tempo
        setTimeout(() =>squares[currentLaserIndex].classList.remove('boom'), 300);
        clearInterval(laserId);

        const alienRemove = alienInvaders.indexOf(currentLaserIndex);
        aliensRemoved.push(alienRemove);
        resultados++;
        results.innerHTML = resultados;
        console.log(aliensRemoved)
    }
    }

    if (e.key === 'ArrowUp'){
       laserId = setInterval(moveLaser, 100);
    }

   
}

document.addEventListener('keydown', shoot);
}