// Get the element with the specified class
var element = document.querySelector(".popup4");

// Create an array of background images
var images = ["../img/bg/1.jpg", "../img/bg/2.jpg", "../img/bg/3.jpg"];

// Set the onclick event handler for the element
element.onclick = function() {

  // Get a random background image from the array
  var image = images[Math.floor(Math.random() * images.length)];

  // Set the element's background image to the random image
  element.style.backgroundImage = "url(" + image + ")";
};