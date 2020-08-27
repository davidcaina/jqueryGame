// Global variables:
var areaDigitacao = $("#areaDigitacao");
var intervals = [];


/*
On page loading.
*/
$(function() {
    abrePopupTutorial();
    fechaPopupTutorial();
    changeInputRangeColor();
    changeTextWords();
    inicializaMarcadores();
    inicializaContadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});



/*
Função responsavel por realizar a abertura do pop-up de tutorial.
*/
function abrePopupTutorial(){

    $("#btn-tutorial").click(function(){
        $("#main-div").toggleClass("custom-blur");
        $("#popup-tutorial").toggleClass("popup-desativado");
    });
}


/*
Função responsavel por realizar o fechamento do pop-up de tutorial.
*/
function fechaPopupTutorial(){
    $(document).mouseup(function(e){

        var container = $("#popup-tutorial");
        
        if(!container.hasClass("popup-desativado")){
            if ((!container.is(e.target) && container.has(e.target).length === 0)){
                $("#popup-tutorial").toggleClass("popup-desativado");
                $("#main-div").toggleClass("custom-blur");
            }
          
            $("#close-popup-tutorial").click(function(){
                $("#popup-tutorial").toggleClass("popup-desativado");
                $("#main-div").toggleClass("custom-blur");
            });
        }
    });
}


/*
Função responsavel por realizar a alteração das cores no quadro de dificuldades.
*/
function changeInputRangeColor(){
    $("#difficulty-level-range").click(function(){
        var currentValue = $(this).val();
        if(currentValue == 2){ 
            $("#label-facil").addClass("selected-facil");
            $("#label-medio").removeClass("selected-medio");
            $("#label-dificil").removeClass("selected-dificil");
            $("#label-extremo").removeClass("selected-extremo");
        }
        else if(currentValue == 4){
            $("#label-facil").removeClass("selected-facil");
            $("#label-medio").addClass("selected-medio");
            $("#label-dificil").removeClass("selected-dificil");
            $("#label-extremo").removeClass("selected-extremo");
        }
        else if(currentValue == 6){
            $("#label-facil").removeClass("selected-facil");
            $("#label-medio").removeClass("selected-medio");
            $("#label-dificil").addClass("selected-dificil");
            $("#label-extremo").removeClass("selected-extremo");
        }
        else if(currentValue == 8){
            $("#label-facil").removeClass("selected-facil");
            $("#label-medio").removeClass("selected-medio");
            $("#label-dificil").removeClass("selected-dificil");
            $("#label-extremo").addClass("selected-extremo");
        }
    });  
}


/*
Função responsavel por realizar 'ouvir' e realizar a mudança da cor do range do painel de dificuldade.
*/
$(document).on('input', "#difficulty-level-range", function () { 
    var currentColor = 'linear-gradient(to right, #008000 0%, #008000 ' + (this.value-this.min)/(this.max-this.min)*100 + '%, #fff ' + this.value + '%, white 100%)';
    
    if(this.value == 2){ 
        currentColor = 'linear-gradient(to right, #008000 0%, #008000 ' + (this.value-this.min)/(this.max-this.min)*100 + '%, #fff ' + this.value + '%, white 100%)';
    }
    else if(this.value == 4){ 
        currentColor = 'linear-gradient(to right, #FF9100 0%, #FF9100 ' + (this.value-this.min)/(this.max-this.min)*100 + '%, #fff ' + this.value + '%, white 100%)';
    }
    else if(this.value == 6){ 
        currentColor = 'linear-gradient(to right, #C8143C 0%, #C8143C ' + (this.value-this.min)/(this.max-this.min)*100 + '%, #fff ' + this.value + '%, white 100%)';
    }
    else if(this.value == 8){ 
        currentColor = 'linear-gradient(to right, #8B0000 0%, #8B0000 ' + (this.value-this.min)/(this.max-this.min)*100 + '%, #fff ' + this.value + '%, white 100%)';
    }
    this.style.background = currentColor;
});


/*
Função responsavel por travar o campo de digitação após o tempo acabar.
*/
function finalizaJogo() {
    areaDigitacao.attr("disabled", true);
    areaDigitacao.toggleClass("campo-desativado");
    inserePlacar();
}

/*
Função responsavel por reiniciar o jogo.
*/
function reiniciaJogo() {
    areaDigitacao.attr("disabled", false);
    areaDigitacao.val("");
    cleanIntervals();
    atualizaCronometro();
    inicializaCronometro();
    if(areaDigitacao.hasClass("campo-desativado")){
        areaDigitacao.removeClass("campo-desativado");
    }
    areaDigitacao.removeClass("borda-vermelha");
    areaDigitacao.removeClass("borda-verde");
}


/*
Função responsavel por realizar a alteração do tempo baseado na dificuldade escolhida.
*/
function atualizaCronometro() {
    
    var currentValue = $("#difficulty-level-range").value;
    console.log("Valor: " + currentValue);
    
    if(currentValue == 2 || currentValue == undefined){
        $("#tempoRestante").text(10);
    }
    else if(this.value == 4){
        $("#tempoRestante").text(20);
    }
    else if(this.value == 6){
        $("#tempoRestante").text(30);
    }
    else if(this.value == 8){
        $("#tempoRestante").text(35);
    }  
}


/*
Função responsavel por iniciar o cronometro do jogo ao começar a digitar
*/
function inicializaCronometro() {
    var tempoRestante = $("#tempoRestante").text();
    areaDigitacao.one("focus", function() {
        cleanIntervals();
    	var cronometroID = setInterval(function() {
    		//tempoRestante--;
    		$("#tempoRestante").text(tempoRestante);
    		if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
    		}
        }, 1000);
        intervals.push(cronometroID);
    });
}


/*
Função responsavel por limpar os intarvalos atuais.
*/
function cleanIntervals(){
    if(intervals.length > 0){
        clearInterval(intervals[0]);
        intervals.splice(0, 1);
    }
}


/*
Função responsavel por verificar o texto digitado.
*/
function inicializaMarcadores() {
    var frase = $("#texto-digitar").text().replace(/(\r\n|\n|\r)/gm, " ");
    areaDigitacao.on("input", function() {
        var digitado = areaDigitacao.val();
        var comparavel = frase.substr(0, digitado.length);

        console.log("digitado:" + digitado);
        console.log("comparavel: "+ comparavel);

        if (digitado == comparavel) {
            areaDigitacao.addClass("borda-verde");
            areaDigitacao.removeClass("borda-vermelha");
        } else {
            areaDigitacao.addClass("borda-vermelha");
            areaDigitacao.removeClass("borda-verde");
        }
    });
}

function inicializaContadores() {
    areaDigitacao.on("input", function() {

        var digitado = areaDigitacao.val();
        
        var numPalavras = digitado.split(/\S+/).length - 1;
        var numCaracters = digitado.length;

        $("#area_numeroCaracteres").text(numCaracters);
        $("#area_numeroPalavras").text(numPalavras);
    });
}