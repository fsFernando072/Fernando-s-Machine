const check = document.getElementById('check');

check.addEventListener('change', function({ target }) {
    mudarTema(target.checked ? 'dark' : 'light');
});

function mudarTema(novoTema) {
    if(novoTema == 'dark'){
        if(!document.body.classList.contains('temaescuro')){
            document.body.classList.toggle('temaescuro');
        }
        document.body.classList.remove('temaclaro');
        check.checked = true;
        
    }else{
        if(!document.body.classList.contains('temaclaro')){
            document.body.classList.toggle('temaclaro');
        }
        document.body.classList.remove('temaescuro');
        check.checked = false;
    }
  
    localStorage.setItem('tema', novoTema); 
}

const tema = localStorage.getItem('tema');

if( tema ) {
  mudarTema(tema)
}