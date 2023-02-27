let score1 = 0;
let score2 = 0;


function home1() {
  console.log('clicked home +1');
  score1 += 1;
  console.log(score1);
  drawHomeScore1()
}

function away1() {
  console.log('clicked away +1');
  score2 += 1;
  console.log(score2);
  drawAwayScore2()
}

function home3() {
  console.log('clicked home +3');
  score1 += 3;
  console.log(score1);
  drawHomeScore1()
}

function away3() {
  console.log('clicked away +3');
  score2 += 3;
  console.log(score2);
  drawAwayScore2()
}

function drawHomeScore1() {
  let scoreWindow1 = document.getElementById('home-score');
  if (score1 < 10) {
    scoreWindow1.innerText = '0' + score1.toString()
  } else {
    scoreWindow1.innerText = score1
  }
}

function drawAwayScore2() {
  let scoreWindow2 = document.getElementById('away-score');
  scoreWindow2.innerText = score2
  if (score2 < 10) {
    scoreWindow2.innerText = '0' + score2.toString()
  } else {
    scoreWindow2.innerText = score2
  }
}

function resetScore() {
  score1 = 0;
  score2 = 0;
  console.log(score1, score2)
  drawHomeScore1()
  drawAwayScore2()
}


