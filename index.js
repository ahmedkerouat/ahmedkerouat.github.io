document.addEventListener("DOMContentLoaded", function () {
    const centeredText = document.querySelector(".centered-text");
    const tvShutdown = document.querySelector(".tv-shutdown");
    const tvImage = document.querySelector(".tv-image");
  
    // Function to remove the classes
    function removeAnimations() {
      tvShutdown.classList.remove("shutdown-animation");
      tvImage.classList.remove("tv-animation");
    }
  
    // Check if the opacity of centered-text is not 0 and remove animations
    function checkOpacity() {
      const centeredTextOpacity = getComputedStyle(centeredText).getPropertyValue("opacity");
      if (centeredTextOpacity !== "0") {
        removeAnimations();
      }
    }
    checkOpacity();
    setInterval(checkOpacity, 1000);
  });
  
