$(function() {
    //changeTextWords();
    $('[data-toggle="tooltip"]').tooltip({
        top: - 50, 
		left: 20
    }).fadeIn();
});

$(document).on('input', "#difficulty-level-range", function () { 
    if(this.value == 2){

        $("#texto-digitar").load('/Files/text/facil/facil.txt', function(text) {
            $(this).html(text);
        });
    }
    else if(this.value == 4){
        $("#texto-digitar").load('/Files/text/medio/medio.txt', function(text) {
            $(this).html(text);
        });
    }
    else if(this.value == 6){
        $("#texto-digitar").load('/Files/text/dificil/dificil.txt', function(text) {
            $(this).html(text);
        });
    }
    else if(this.value == 8){
        $("#texto-digitar").load('/Files/text/extremo/extremo.txt', function(text) {
            $(this).html(text);
        });
    }
});

$(document).on('DOMSubtreeModified', "#texto-digitar", function () {

    var texto = $("#texto-digitar").html();
    palavrasDoTexto = texto.trim().split(/[\s,]+/);
    for(i = 0; i < palavrasDoTexto.length; i++){
        
        var currentText = palavrasDoTexto[i];
        if(currentText.startsWith("{!")){ // escrever primeira letra maiscula.
            var currentIndex = texto.indexOf("{!");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-firstMaiscula\" href="#" data-toggle="tooltip" data-placement="top" title="Hooray!"> teste1 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }
        
        else if(currentText.startsWith("{&")){ // escrever toda a palavra maiscula.
            var currentIndex = texto.indexOf("{&");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-fullMaiscula\">teste2 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }

        else if(currentText.startsWith("{#")){ // escrever a ultima letra maiscula.
            var currentIndex = texto.indexOf("{#");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-lastMaiscula\">teste3 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }

        else if(currentText.startsWith("{@")){ // repetir a palavra duas vezes.
            var currentIndex = texto.indexOf("{@");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-double\">teste4 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }

        else if(currentText.startsWith("{%")){ // escrever palavra inversa.
            var currentIndex = texto.indexOf("{%");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-inverse\">teste5 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }
    }
    $("#texto-digitar").html(texto);
 });


function changeTextWords(){
    var texto = $("#texto-digitar").html();
    palavrasDoTexto = texto.trim().split(/[\s,]+/);
    for(i = 0; i < palavrasDoTexto.length; i++){
        
        var currentText = palavrasDoTexto[i];
        if(currentText.startsWith("{!")){ // escrever primeira letra maiscula.
            console.log('encontrou********');
            var currentIndex = texto.indexOf("{!");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-firstMaiscula\"> teste1 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }
        
        else if(currentText.startsWith("{&")){ // escrever toda a palavra maiscula.
            var currentIndex = texto.indexOf("{&");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-fullMaiscula\">teste2 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }

        else if(currentText.startsWith("{#")){ // escrever a ultima letra maiscula.
            var currentIndex = texto.indexOf("{#");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-lastMaiscula\">teste3 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }

        else if(currentText.startsWith("{@")){ // repetir a palavra duas vezes.
            var currentIndex = texto.indexOf("{@");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-double\">teste4 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }

        else if(currentText.startsWith("{%")){ // escrever palavra inversa.
            var currentIndex = texto.indexOf("{%");
            var currentLenght = currentText.length;
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-inverse\">teste5 </span>' + texto.substring(currentIndex + currentLenght, texto.length-1);
        }
    }

    console.log('Novo texto:' + texto);
    $("#texto-digitar").html(texto);
}
