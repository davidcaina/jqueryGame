// Global variables:
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");



// Main Functions:

// Init Function

$(function() {
    abrePopupTutorial();
    fechaPopupTutorial();
    changeInputRangeColor();
});

function abrePopupTutorial(){

    $("#btn-tutorial").click(function(){
        console.log("Teste");
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
        console.log(currentValue);
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
