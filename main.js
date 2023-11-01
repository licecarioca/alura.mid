function tocaSomPom(seletorAudio){
    const elemento = document.querSelector(seletorAudio).play('');

    if(elemento != null && elemento .localName === 'audio'){
        elemento.play();
    }else{
        alert('Elemento não encontrado')

}

document.querySelectorAll('.tecla');



for(contador = 0; < listadeTeclas.length; contador++){
   

    const instrumento = listadeTeclas[contador];
  
  const tecla = listadeTeclas[contador];

  const ideAudio = `som_${instrumento}`;

  tecla.onclick = fuction(){
        tocaSom(ideAudio);
  };
        tecla.onkeydown = function (evento){
            if(evento.code === 'Space'||evento.code === 'Enter' ){
            tecla.classList.add('ativa');
        }
    }
tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}
}