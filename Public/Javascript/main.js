// Global variables:
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
    abrePopupTutorial();
    fechaPopupTutorial();
    changeInputRangeColor();
    changeTextWords();
});

function abrePopupTutorial(){

    $("#btn-tutorial").click(function(){
        $("#main-div").toggleClass("custom-blur");
        $("#popup-tutorial").toggleClass("popup-desativado");
    });
}

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

