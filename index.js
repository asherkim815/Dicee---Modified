document.addEventListener('keyup', () => rollDice());
document.querySelector('button').addEventListener('click', () => {
  rollDice();
  document.activeElement.blur();
});

function rollDice() {
  // remove crown emoji with reload
  document.querySelector('.player1').innerText = 'Player 1';
  document.querySelector('.player2').innerText = 'Player 2';

  // generate pseudo-random numbers (i.e. roll dices)
  const player1RanNum = Math.floor(Math.random() * 6) + 1;
  const player2RanNum = Math.floor(Math.random() * 6) + 1;

  // change banner and give crown emoji to winner
  if (player1RanNum > player2RanNum) {
    document.querySelector('h1').innerText = 'Player 1 Wins';
    document.querySelector('.player1').innerText = 'Player 1 👑';
  } else if (player1RanNum < player2RanNum) {
    document.querySelector('h1').innerText = 'Player 2 Wins';
    document.querySelector('.player2').innerText = 'Player 2 👑';
  } else {
    document.querySelector('h1').innerText = 'Draw';
  }

  // change dice image with each roll
  const player1DiceImage = `images/dice${player1RanNum}.png`;
  const player2DiceImage = `images/dice${player2RanNum}.png`;
  document.querySelector('.img1').setAttribute('src', player1DiceImage);
  document.querySelector('.img2').setAttribute('src', player2DiceImage);
}
