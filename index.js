function start(){
  document.querySelector(".btn").textContent = " Refresh🔄️";
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var source1 = "images/dice" + randomNumber1 + ".png";
  var dice1 = document.querySelectorAll("img")[0].setAttribute("src", source1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var source2 = "images/dice" + randomNumber2 + ".png";
  var dice2 = document.querySelectorAll("img")[1].setAttribute("src", source2);

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 1 Win!🏆");
  }
  else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = ("Player 2 Win!🏆");
  }
  else {
    document.querySelector("h1").innerHTML = ("🫂 Draw 🫂");
  }
}
