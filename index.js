for(var i=0; i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){     //Using mouse clicks on buttons
        var btnInnerHTML = this.innerHTML;
        switch (btnInnerHTML) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default:
                console.log(btnInnerHTML);
                break;
        }
        btnAnimation(btnInnerHTML);
    });
}

document.addEventListener("keydown",function (event){                 //using keyboard presses
    switch(event.key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(event);
            break;
    }
    if(event.ctrlKey){
        alert("Seems like you want to take 'control' over this site, huh?");
    }
    btnAnimation(event.key);
});

function btnAnimation(pressedKey){
    var activeBtn = document.querySelector("." + pressedKey);
    activeBtn.classList.add("pressed");
    setTimeout(function (){
        activeBtn.classList.remove("pressed");
    }, 100);
}

var myName = document.querySelector(".addName");
setTimeout(function (){
    myName.style.visibility = 'visible';
},4000);
