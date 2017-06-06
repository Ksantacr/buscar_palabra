var sentences = document.getElementById('sentences');
var buscar = document.getElementById('buscar');

var palabra = "Lorem";

var encontrado = false;
buscar.addEventListener('click', function(event){
    
    var text = sentences.textContent;
    var regex = new RegExp('('+palabra+')', 'ig');

    if(encontrado){
    	text = text.replace(regex, '<span class="">$1</span>');
    	encontrado = false;
    }else{
    	text = text.replace(regex, '<span class="highlight">$1</span>');
    	encontrado = true;
    }

    sentences.innerHTML = text;


}, false);