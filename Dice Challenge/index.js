randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src",'images/dice'+randomNumber1+'.png');
randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector("img.img2").setAttribute("src",'images/dice'+randomNumber2+'.png');


if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML=("Draw");
}
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=("Player 1 wins! 🚩");
}
else{
    document.getElementsByTagName("h1")[0].innerHTML=("Player 2 wins! 🚩");
}
