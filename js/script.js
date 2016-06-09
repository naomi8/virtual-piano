$(document).ready(function(){

    $("#ember").click(function(){
    	$("#flame").toggle();
    });

    $("button").keydown(function(event){
    	if(event.which==67) {
    		noteC.play();

    	}
    });

 	


});

