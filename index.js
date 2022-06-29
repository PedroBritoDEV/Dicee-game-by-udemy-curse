var player_1 = Math.floor(Math.random() * 6)+1;
var player_2 = Math.floor(Math.random() * 6)+1;

var img_1 = document.querySelector('.img1')
var img_2 = document.querySelector('.img2')

var tittle = document.querySelector('h1')

switch (player_1) {
  case 1 :
    img_1.setAttribute('src', '/images/dice1.png')
    break
  case 2 :
    img_1.setAttribute('src', '/images/dice2.png')
    break
  case 3 :
    img_1.setAttribute('src', '/images/dice3.png')
    break
  case 4 :
    img_1.setAttribute('src', '/images/dice4.png')
    break
  case 5 :
    img_1.setAttribute('src', '/images/dice5.png')
    break
  case 6 :
    img_1.setAttribute('src', '/images/dice6.png')
}

switch (player_2) {
  case 1 :
    img_2.setAttribute('src', '/images/dice1.png')
    break
  case 2 :
    img_2.setAttribute('src', '/images/dice2.png')
    break
  case 3 :
    img_2.setAttribute('src', '/images/dice3.png')
    break
  case 4 :
    img_2.setAttribute('src', '/images/dice4.png')
    break
  case 5 :
    img_2.setAttribute('src', '/images/dice5.png')
    break
  case 6 :
    img_2.setAttribute('src', '/images/dice6.png')
}

if (player_1 > player_2){
  tittle.innerText = 'player 1 wins!'
}else if (player_1==player_2){
  tittle.innerText = 'draw!'
}else {
  tittle.innerText = 'player 2 wins'
}