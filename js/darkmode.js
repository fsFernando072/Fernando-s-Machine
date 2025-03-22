const check = document.getElementById('check');

check.addEventListener('change', function({ target }) {
    setTheme(target.checked ? 'dark' : 'light');
});

function setTheme(newTheme) {
    if(newTheme == 'dark'){
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
  
    localStorage.setItem('theme', newTheme); 
}

const theme = localStorage.getItem('theme');

if( theme ) {
  setTheme(theme)
}