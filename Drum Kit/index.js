var i =document.getElementsByTagName("button").length;
for(let j=0;j<i;j++){
    document.getElementsByTagName("button")[j].addEventListener("click",handelclicked);
}
function handelclicked(){
    var i = this.innerHTML;
    playsound(i);
    buttonAnimation(i);
   
}

document.addEventListener("keydown",function(event){
    playsound(event.key);
    buttonAnimation(event.key);
})

function playsound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "a": 
            var audio1 = new Audio("sounds/kick-bass.mp3")
            audio1.play(); 
            break;
        case "s":
            var audio2 = new Audio("sounds/snare.mp3")
            audio2.play();
            break;
        case "d":
            var audio3 = new Audio("sounds/tom-1.mp3")
            audio3.play();
            break;
        case "j":
            var audio4 = new Audio("sounds/tom-2.mp3")
            audio4.play();
            break;
        case "k":
            var audio5 = new Audio("sounds/tom-3.mp3")
            audio5.play();
            break;
        case "l":
            var audio6 = new Audio("sounds/tom-4.mp3")
            audio6.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}
  