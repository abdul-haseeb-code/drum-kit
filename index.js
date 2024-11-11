




for (var i = 0; i<7 ; i++) {
    
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var trackk =this.innerHTML;
    makeSound(trackk)
    buttonAnimation(trackk)
})
}

document.addEventListener("keypress",function(event){
   makeSound(event.key)

   buttonAnimation(event.key)
 }
)


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
            break;
 
        case "a":
            var tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
            break;
    
        case "d":
            var tom1 = new Audio('/sounds/tom-4.mp3');
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio('/sounds/snare.mp3');
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio('/sounds/crash.mp3');
            tom1.play();
            break;
    
        case "l":
            var tom1 = new Audio('/sounds/kick-bass.mp3');
            tom1.play();
            break;

            default: alert("you have pressed wrong key")
    

    }

}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout( function () {
        activeButton.classList.remove("pressed")
    }, 100);
}




$(document).keypress(function(event){
    $("h1").text(event.key)

})