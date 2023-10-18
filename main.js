function tocaSomPom(idElementoAudio){
    document.querSelector(idElementoAudio)
}

document.querySelectorAll('.tecla')



for(contador = 0; < listadeTeclas.length; contador++){
   



 const instrumento = listadeTeclas[contador] 
  
  const tecla = listadeTeclas[contador];

  const ideAudio = `som_${instrumento}`;

  tecla.onclick = fuction()
        tocaSom(ideAudio);
};