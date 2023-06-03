function showPopup(image) {
  var popup = image.nextElementSibling;
  popup.style.display = "block";
  setTimeout(function() {
    fadeOut(popup);
  }, 3000);
}

function fadeOut(element) {
  var opacity = 1;
  var timer = setInterval(function() {
    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 30);
}
