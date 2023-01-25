var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0]; // this will select the first img that is encountered in our index.html file, means it will be the image that is with class img1
image1.setAttribute("src",randomImageSource); // we are changing the src attribute of image of class img1 as we have reached to it using query selector in html file

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);// this will select image with class img2 and change its source to the given source

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player2 wins";
}
else{
  document.querySelector("h1").innerHTML="Match is Draw!";
}
