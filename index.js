let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

homeScore.textContent = 0;
awayScore.textContent = 0;

function addHomeScore(points) {
   for (let i=1; i <= points; i++) {
       homeScore.textContent++;
   }
}

function addAwayScore(points) {
   for (let i=1; i <= points; i++) {
       awayScore.textContent++;
   }
}

function reset() {
    homeScore.textContent = 0;
    awayScore.textContent = 0;
}