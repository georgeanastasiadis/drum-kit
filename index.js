//Detection of button press
var buttons = document.querySelectorAll(".drum");

for (btn of buttons){
    btn.addEventListener('click', function(){
        GenerateSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

//Detectsion of keyboard press
document.addEventListener('keydown', (event) =>{
    GenerateSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());   
})

document.addEventListener('touchend', (event) =>{
    GenerateSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());   
})

//Function that generates the sounds
function GenerateSound(key){
    switch(key){
        case "w":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":    
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;       
    }
}

//Creating Animation for the pressed buttons
function buttonAnimation(key){
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}