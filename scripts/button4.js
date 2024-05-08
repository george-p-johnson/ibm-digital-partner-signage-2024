
const button4 = document.getElementById("popup-button4");
const overlay4 = document.getElementById("overlay4");
const popup4 = document.getElementById("popup4");

button4.addEventListener("click", function () {
  overlay4.style.display = "block";
  popup4.style.display = "block";
});

overlay4.addEventListener("click", function () {
  overlay4.style.display = "none";
  popup4.style.display = "none";
});