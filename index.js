var randomNumber1 = Math.floor(Math.random()*6) + 1;
var image1 = "dice" +  randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var image2 = "dice" +  randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src" , image1);
document.querySelector(".img2").setAttribute("src" , image2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    document.querySelector("footer").innerHTML = "Congratulations! Player 1";
}
    
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector("footer").innerHTML = "Congratulations! Player 2";
}
    
else{
    document.querySelector("h1").innerHTML = "DRAW!";
    document.querySelector("footer").innerHTML = "Hard Luck! for both of You :(";
}



