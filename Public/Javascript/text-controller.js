var areaDigitacao = $("#areaDigitacao");

/*
On page loading
*/
$(function() {
    $("#texto-digitar").load('/Files/text/extremo/extremo.txt', function(text) {
        $(this).html(text);
        $("#currentResponse").html(text);
        verifySpecialWords();
        atualizaTamanhoFrase();
        inicializaMarcadores();
    });

    $('[data-toggle="tooltip"]').tooltip({
        top: - 50, 
		left: 20
    }).fadeIn();

    reiniciaJogo();
    $("#botao-reiniciar").click(reiniciaJogo);
});


/*
Função responsavel por carregar os textos baseado na dificuldade selecionada.
*/
$(document).on('input', "#difficulty-level-range", function () { 
    if(this.value == 2){

        $("#texto-digitar").load('/Files/text/facil/facil.txt', function(text) {
            $(this).html(text);
            $("#currentResponse").html(text);
            verifySpecialWords();
            atualizaTamanhoFrase();
            reiniciaJogo();
            inicializaMarcadores();
        });
    }
    else if(this.value == 4){
        $("#texto-digitar").load('/Files/text/medio/medio.txt', function(text) {
            $(this).html(text);
            $("#currentResponse").html(text);
            verifySpecialWords();
            atualizaTamanhoFrase();
            reiniciaJogo();
            inicializaMarcadores();
        });
    }
    else if(this.value == 6){
        $("#texto-digitar").load('/Files/text/dificil/dificil.txt', function(text) {
            $(this).html(text);
            $("#currentResponse").html(text);
            verifySpecialWords();
            atualizaTamanhoFrase();
            inicializaMarcadores();
        });
    }
    else if(this.value == 8){
        $("#texto-digitar").load('/Files/text/extremo/extremo.txt', function(text) {
            $(this).html(text);
            $("#currentResponse").html(text);
            verifySpecialWords();
            atualizaTamanhoFrase();
            inicializaMarcadores();
        });
    }
});


/*
Função responsavel por realizar a alteração das cores para as palavras especiais.
*/
 function verifySpecialWords(){
    var texto = $("#texto-digitar").html();
    var currentResponse = texto;
    palavrasDoTexto = texto.trim().split(/[\s,]+/);
    for(i = 0; i < palavrasDoTexto.length; i++){
        
        var currentText = palavrasDoTexto[i];
        if(currentText.startsWith("{!")){ // escrever primeira letra maiscula.
            
            var currentIndex = texto.indexOf("{!");
            var currentLenght = currentText.length;
            var newWord = currentText.substring(2, currentLenght-1);
            var firstLetterupperCaseWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)

            currentResponse = currentResponse.substring(0, currentIndex) + firstLetterupperCaseWord + currentResponse.substring(currentIndex + currentLenght, currentResponse.length);
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-firstMaiscula\" href="#" data-toggle="tooltip" data-placement="top" title="Resposta: '+ firstLetterupperCaseWord +' ">' + newWord + '</span>' + texto.substring(currentIndex + currentLenght, texto.length);   
        }
        
        else if(currentText.startsWith("{-")){ // escrever toda a palavra maiscula.
            var currentIndex = texto.indexOf("{-");
            var currentLenght = currentText.length;
            var newWord = currentText.substring(2, currentLenght-1);
            var allUpperCaseWord = newWord.toUpperCase();

            currentResponse = currentResponse.substring(0, currentIndex) + allUpperCaseWord + currentResponse.substring(currentIndex + currentLenght, currentResponse.length); 
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-fullMaiscula\" href="#" data-toggle="tooltip" data-placement="top" title="Resposta: '+ allUpperCaseWord +'">' + newWord + '</span>'+texto.substring(currentIndex + currentLenght, texto.length);   
        }

        else if(currentText.startsWith("{#")){ // escrever a ultima letra maiscula.
            var currentIndex = texto.indexOf("{#");
            var currentLenght = currentText.length;
            var newWord = currentText.substring(2, currentLenght-1);
            var lastLetterupperCaseWord = newWord.substring(0, newWord.length-1) + newWord.charAt(newWord.length-1).toUpperCase()
            
            currentResponse = currentResponse.substring(0, currentIndex) + lastLetterupperCaseWord +currentResponse.substring(currentIndex + currentLenght, currentResponse.length); 
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-lastMaiscula\" href="#" data-toggle="tooltip" data-placement="top" title="Resposta: '+ lastLetterupperCaseWord +' ">' + newWord + '</span>' + texto.substring(currentIndex + currentLenght, texto.length);   
        }

        else if(currentText.startsWith("{@")){ // repetir a palavra duas vezes.
            var currentIndex = texto.indexOf("{@");
            var currentLenght = currentText.length;
            var newWord = currentText.substring(2, currentLenght-1);
            var doubleWord = newWord+newWord;
            var newLen = doubleWord.length+3;

            currentResponse = currentResponse.substring(0, currentIndex) + doubleWord + currentResponse.substring(currentIndex + newLen, currentResponse.length); 
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-double\" href="#" data-toggle="tooltip" data-placement="top" title="Resposta: '+ doubleWord +' ">' + newWord + '</span>' + texto.substring(currentIndex + currentLenght, texto.length);   
        }

        else if(currentText.startsWith("{%")){ // escrever palavra inversa.
            var currentIndex = texto.indexOf("{%");
            var currentLenght = currentText.length;
            var newWord = currentText.substring(2, currentLenght-1);
            var reverseWord = newWord.split('').reverse().join('');
            console.log("{%:" + reverseWord);

            currentResponse = currentResponse.substring(0, currentIndex) + reverseWord + currentResponse.substring(currentIndex + currentLenght, currentResponse.length); 
            texto = texto.substring(0, currentIndex) + '<span class=\"texto-inverse\" href="#" data-toggle="tooltip" data-placement="top" title="Resposta: '+ reverseWord +' ">' + newWord + '</span>' + texto.substring(currentIndex + currentLenght, texto.length);   
        }
    }
    $("#texto-digitar").html(texto);
    $("#currentResponse").html(currentResponse);
 }


/*
Função responsavel por realizar a alteração das palavras baseado nos textos armazenados.
*/
function changeTextWords(){
    var texto = $("#texto-digitar").html();
    palavrasDoTexto = texto.trim().split(/[\s,]+/);
    for(i = 0; i < palavrasDoTexto.length; i++){
        
        var currentText = palavrasDoTexto[i];
        if(currentText.startsWith("{!")){ // escrever primeira letra maiscula.
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
    $("#texto-digitar").html(texto);
}


/*
Função responsavel por realizar a alteração do numeros de palavras atuais.
*/
function atualizaTamanhoFrase() {
    var texto = $("#texto-digitar").text();
    var numPalavras  = texto.split(" ").length;
    $("#h5Palavra").text(numPalavras + ' palavras');
}


