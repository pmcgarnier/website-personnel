


/* 1. Récupérer les éléments menu-btn, nav du dom */
var archives = document.querySelector("#archives");
var nav = document.querySelector("#nav");
/* 2. Ecouter le click sur le bouton */
archives.addEventListener("click", () => {
  /* 3. Ajouter la classe active au bouton et à la nav */
  nav.classList.toggle("active");
});
