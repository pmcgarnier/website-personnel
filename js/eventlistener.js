


/* 1. Récupérer les éléments menu-btn, nav du dom */
var archives = document.querySelector("#archives");
var nav = document.querySelector("#nav");
/* 2. Ecouter le click sur le bouton */
archives.addEventListener("click", () => {
  /* 3. Ajouter la classe active au bouton et à la nav */
  nav.classList.toggle("active");
});

var archives = document.querySelector("#button");
var ailes = document.querySelector("#ailes");
var wing = document.querySelector("#wing");
var wing2 = document.querySelector("#wing2");
/* 2. Ecouter le click sur le bouton */
button.addEventListener("click", () => {
  /* 3. Ajouter la classe active au bouton et à la nav */
  ailes.classList.toggle("active");
  wing.classList.toggle("active");
  wing.classList.toggle("active");
});
