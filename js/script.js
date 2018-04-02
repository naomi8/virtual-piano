$(document).ready(function(){

    //toggles ember for charmander
    $("#ember").click(function(){
    	$("#flame").toggle();
    });

    //plays piano keys C to B when key is pressed
    $("button").keydown(function(event){
    	if(event.which==65) {
    		noteC.play();
    	}
      if(event.which==83) {
    		noteD.play();
    	}
      if(event.which==68) {
    		noteE.play();
    	}
      if(event.which==70) {
    		noteF.play();
    	}
      if(event.which==71) {
    		noteG.play();
    	}
      if(event.which==72) {
    		noteA.play();
    	}
      if(event.which==74) {
    		noteB.play();
    	}
    });



});
