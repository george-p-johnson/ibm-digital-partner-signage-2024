
const button = document.getElementById("popup-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

button.addEventListener("click", function () {
  overlay.style.display = "block";
  popup.style.display = "block";
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  popup.style.display = "none";
});


