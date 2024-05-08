
const button3 = document.getElementById("popup-button3");
const overlay3 = document.getElementById("overlay3");
const popup3 = document.getElementById("popup3");

button3.addEventListener("click", function () {
  overlay3.style.display = "block";
  popup3.style.display = "block";
});

overlay3.addEventListener("click", function () {
  overlay3.style.display = "none";
  popup3.style.display = "none";
});