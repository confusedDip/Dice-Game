var randomNumber1 =Math.floor(Math.random() * 6)+1 ;
var image1_name = "images\\dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",image1_name);
var randomNumber2 =Math.floor(Math.random() * 6)+1 ;
var image2_name = "images\\dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2_name);
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}
