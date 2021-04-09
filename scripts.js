let contador_de_cliques = 0;
let numeroDeCartas = 0;
let cartas_viradas = []
let contador_cartas_certas = 0;


function comparador() { 
	return Math.random() - 0.5; 
}


function escolher_qtd_cartas(){
    let numeroDeCartas = parseInt(prompt ("Com quantas cartas você quer jogar?"));
    let arrayCartas = [];

    while(numeroDeCartas%2 != 0 || numeroDeCartas > 14 || numeroDeCartas < 4){
    numeroDeCartas = parseInt(prompt ("Com quantas cartas você quer jogar?"));
    }

    const arrayPapagaios = ['metalparrot.gif', 'metalparrot.gif', 'fiestaparrot.gif', 'fiestaparrot.gif', 'explodyparrot.gif', 'explodyparrot.gif', 'bobrossparrot.gif', 'bobrossparrot.gif', 'revertitparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif','unicornparrot.gif'];
    arrayPapagaios.length = numeroDeCartas;
    let papagaios_embaralhados = arrayPapagaios.sort(comparador);

    for (let i = 0; i < numeroDeCartas; i++){
        const elemento = document.querySelector(".container-carta");

        elemento.innerHTML += 
        `<div onclick="virar_a_carta(this)" class="carta">
            <img  class ="frente" src="imagens/front.png" alt="papagaio inical">  
            <img  class ="desaparecer verso" src="imagens/${papagaios_embaralhados[i]}" alt="gif do papagaio"> 
        </div>`;
        arrayCartas.push (elemento.innerHTML);
 }
  
}

escolher_qtd_cartas();


function virar_a_carta(elemento) {
    contador_de_cliques = contador_de_cliques + 1;

    if(elemento){
        let virar_papagaio = elemento.childNodes[1]
        virar_papagaio.classList.add('desaparecer');
        virar_papagaio.classList.add('desvirei');
        let desvirar_gif = elemento.childNodes[3];
        desvirar_gif.classList.remove('desaparecer')
        desvirar_gif.classList.add('virei')

        cartas_viradas.push (elemento);

         if(contador_de_cliques%2 == 0){
             
             setTimeOut(carta_errada,1000);
             
             carta_certa();
                 
        }
    }       
       console.log(contador_de_cliques);
  }
 

function carta_errada() {
    if(cartas_viradas[0] != cartas_viradas[1]){
        cartas_viradas[0].childNodes[1].classList.remove('desaparecer');
        cartas_viradas[0].childNodes[1].classList.remove('desvirei');
        cartas_viradas[0].childNodes[3].classList.add('desaparecer');
        cartas_viradas[0].childNodes[3].classList.remove('virei');

        cartas_viradas[1].childNodes[1].classList.remove('desaparecer');
        cartas_viradas[1].childNodes[1].classList.remove('desvirei');
        cartas_viradas[1].childNodes[3].classList.add('desaparecer');
        cartas_viradas[1].childNodes[3].classList.remove('virei');

         alert("errou");
         console.log(viradas_array);
         
     }
}


function carta_certa() {
    if(cartas_viradas[0] == cartas_viradas[1]){
        cartas_viradas = [];
        alert("acertou");
        contador_cartas_certas = contador_cartas_certas +2;
    }
}


function fim_de_jogo() {
    if(contador_cartas_certas == numeroDeCartas) {
        alert(`Você acabou o jogo em ${contador_de_cliques} jogadas`)
    }
}