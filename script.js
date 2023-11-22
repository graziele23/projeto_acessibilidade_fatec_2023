function toggleContrast() {
    const body = document.body;
    body.classList.toggle('inverted');
  }
  function clickMenu(){
    if( itens.style.display == 'block'){
      itens.style.display = 'none'
    }else{
      itens.style.display = 'block'
    }
   
  }