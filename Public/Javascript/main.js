// Global variables:
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");



// Main Functions:

// Init Function

$(function() {
    abrePopupTutorial();
    fechaPopupTutorial();
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
