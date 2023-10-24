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

  function updateContainerClass() {
    const mainLayout = document.getElementById("main-layout");
  
    if (window.innerWidth <= 840) {
      mainLayout.classList.remove("container");
      mainLayout.classList.add("container-phone");
    } else {
      mainLayout.classList.remove("container-phone");
      mainLayout.classList.add("container");
    }
  }
  
  // load
  updateContainerClass();
  
  // Call when window is resized
  window.addEventListener("resize", updateContainerClass);
  
  
