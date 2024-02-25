
var clickme = document.querySelectorAll(".drum").length;



for(var i = 0; i < clickme; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        

        var buttoninnerhtml = this.innerHTML;
        clicked(buttoninnerhtml);
    }); }

    document.addEventListener("keypress" , function(event){
        clicked(event.key)
;    });

    function clicked(key){

        switch(key){
            case "w":
                var crash1 = new Audio("sounds/crash.mp3");
                crash1.play();
                break;

            case "a":
                var kick1 = new Audio("sounds/kick-bass.mp3");
                kick1.play();
                break;

            case "s":
                var snare1 = new Audio("sounds/snare.mp3");
                snare1.play();
                break;

            case "d":
                var tom11 = new Audio("sounds/tom-1.mp3");
                tom11.play();
                break;

            case "j":
                var tom21 = new Audio("sounds/tom-2.mp3");
                tom21.play();
                break;

            case "k":
                var tom31 = new Audio("sounds/tom-3.mp3");
                tom31.play();
                break;

            case "l":
                var tom41 = new Audio("sounds/tom-4.mp3");
                tom41.play();
                break;

            default:
                console.log(clicked12);
        }
    }