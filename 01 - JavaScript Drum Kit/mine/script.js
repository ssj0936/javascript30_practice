const CLASS_PLAYING = "playing";

//event keypress will separate uppercase and lowwercase to two different case
//but event keydown and keyup take uppercase and lowercase as same case 
window.addEventListener("keydown",keydownFunction);
var buttons = document.querySelectorAll('div.key');
buttons.forEach(function(element,index){
    element.addEventListener("transitionend",transitionEndFunction)
});

function transitionEndFunction(e){
    this.classList.remove(CLASS_PLAYING);
}

function keydownFunction(e){
    var keycode = e.keyCode;
    var audio = document.querySelector(`audio[data-key='${keycode}']`);
    audio.currentTime = 0;
    audio.play();
    
    var button = document.querySelector(`div.key[data-key="${keycode}"]`);
    console.log(button);
    button.classList.add(CLASS_PLAYING);
}