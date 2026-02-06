/* SCREEN NAVIGATION */
function goTo(n) {
  document.querySelector(".card.active").classList.remove("active");
  document.getElementById(`screen-${n + 1}`).classList.add("active");
}

function acceptCase() {
  document.querySelector(".card.active").classList.remove("active");
  document.getElementById("screen-final").classList.add("active");
}

function rejectCase() {
  document.querySelector(".card.active").classList.remove("active");
  document.getElementById("screen-oath").classList.add("active");
}

function forceAccept() {
  document.querySelector(".card.active").classList.remove("active");
  document.getElementById("screen-final").classList.add("active");
}

/* RANDOM FLOATING HEARTS */
const heartLayer = document.getElementById("heart-layer");

function spawnHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "♥";

  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 20;

  const driftX = (Math.random() - 0.5) * 200;
  const duration = 10 + Math.random() * 10;

  heart.style.left = `${startX}px`;
  heart.style.top = `${startY}px`;
  heart.style.animationDuration = `${duration}s`;

  heart.style.animationName = "float";
  heart.style.animationTimingFunction = "linear";

  heartLayer.appendChild(heart);

  heart.animate(
    [
      { transform: "translate(0, 0)", opacity: 0 },
      { opacity: 0.9 },
      { transform: `translate(${driftX}px, -${window.innerHeight + 200}px)`, opacity: 0 }
    ],
    { duration: duration * 1000, easing: "linear" }
  );

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(spawnHeart, 600);
