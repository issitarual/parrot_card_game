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
       virar_papagaio.classList.add('desvirei');

       let desvirar_gif = elemento.childNodes[3];
       desvirar_gif.classList.remove('desaparecer')
       desvirar_gif.classList.add('virei')

        console.log(virar_papagaio);
        console.log(desvirar_gif);

        contador_de_cliques = contador_de_cliques + 1;

         if(contador_de_cliques%2 == 0){
            let viradas = document.querySelectorAll(".virei")
            let viradas_array = Array.from(viradas);
            console.log(viradas_array);
            if(viradas_array[0] !== viradas_array[1]){
               
                let virar_gif = document.querySelectorAll('virei');
                let array_virar_gif = Array.from(virar_gif);
                array_virar_gif.classList.add('desaparecer'); 
                array_virar_gif.classList.remove('virei');

                let desvirar_papagaio = document.querySelectorAll('desvirei');
                let array_desvirar_gif = Array.from(desvirar_gif);
                array_desvirar_papagaio.classList.remove ('desaparecer');
                array_desvirar_papagaio.classList.remove('desvirei')
                
                alert("errou");
                console.log(viradas_array);
            }
            else{
                let acertou_papagaio = document.querySelectorAll('desvirei')
                acertou_papagaio.classList.remove('desvirei');

                let acertou_gif = document.querySelectorAll('virei')
                acertou_gif.classList.remove('virei');

                alert("acertou");
            }
      }       
      console.log(contador_de_cliques);
 }
}

function fim_de_jogo() {
    alert(`Você acabou o jogo em ${contador_de_cliques} jogadas`)
}