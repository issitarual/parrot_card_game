let contador_de_cliques = 0;

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
            <img  src="imagens/front.png" alt="papagaio inical">  
            <img  class ="desaparecer" src="imagens/${papagaios_embaralhados[i]}" alt="gif do papagaio"> 
        </div>`;
        arrayCartas.push (elemento.innerHTML);
   }
}
escolher_qtd_cartas();

function virar_a_carta(elemento) {
   if(elemento){
       let virar_papagaio = elemento.childNodes[1]
       virar_papagaio.classList.add('desaparecer');

       let devirar_gif = elemento.childNodes[3];
       devirar_gif.classList.remove('desaparecer')
       devirar_gif.classList.add('virei')

        console.log(virar_papagaio);
        console.log(devirar_gif);

        contador_de_cliques = contador_de_cliques + 1;
        // acrescentar classe ('virei')?
      // if(contador_de_cliques%2 == 0){
        //   if(src da primeira img ('virei') != src da segunda img ('virei')){
                //remove ('virei')
                //add (desaparecer )no gif 
                //remove (desaparecer) no gif
          //}
            //else{
                //remove ('virei');
            //}
      // }       
      console.log(contador_de_cliques);
 }
}

function fim_de_jogo() {
    alert(`Você acabou o jogo em ${contador_de_cliques} jogadas`)
}