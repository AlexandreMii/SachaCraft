const player = document.getElementById("player");

let x = 50;   // position horizontale
let y = 0;    // position verticale (saut)
let speed = 10;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    x += speed;
  }
  if (e.key === "ArrowLeft") {
    x -= speed;
  }
  if (e.key === " " || e.key === "ArrowUp") {
    y = 80; // saut simple
    setTimeout(() => y = 0, 400); // redescend après 0.4s
  }
  updatePlayer();
});

function updatePlayer() {
  player.style.left = x + "px";
  player.style.bottom = y + "px";
}
