var key = new Vue({
    el: ".mainPage",
    data: {
        containerClass: "keys",
        keyDatas: [{
                keycode: "65",
                key: "A",
                displayText: "clap"
                    },
            {
                keycode: "83",
                key: "S",
                displayText: "hihat"
                    },
            {
                keycode: "68",
                key: "D",
                displayText: "kick"
                    },
            {
                keycode: "70",
                key: "F",
                displayText: "openhat"
                    },
            {
                keycode: "71",
                key: "G",
                displayText: "boom"
                    },
            {
                keycode: "72",
                key: "H",
                displayText: "ride"
                    },
            {
                keycode: "74",
                key: "J",
                displayText: "snare"
                    },
            {
                keycode: "75",
                key: "K",
                displayText: "tom"
                    },
            {
                keycode: "76",
                key: "L",
                displayText: "tink"
                    }
                ]
    },
});

const CLASS_PLAYING = "playing";

//event keypress will separate uppercase and lowwercase to two different case
//but event keydown and keyup take uppercase and lowercase as same case 
window.addEventListener("keydown", keydownFunction);
var buttons = document.querySelectorAll('div.key');
buttons.forEach(function (element, index) {
    element.addEventListener("transitionend", transitionEndFunction)
});

function transitionEndFunction(e) {
    this.classList.remove(CLASS_PLAYING);
}

function keydownFunction(e) {
    var keycode = e.keyCode;
    var audio = document.querySelector(`audio[data-key='${keycode}']`);
    audio.currentTime = 0;
    audio.play();

    var button = document.querySelector(`div.key[data-key="${keycode}"]`);
    console.log(button);
    button.classList.add(CLASS_PLAYING);
}
