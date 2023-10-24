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
    const isNarrowScreen = window.matchMedia("(max-aspect-ratio: 97/100)").matches;
    const mainLayout = document.getElementById("main-layout");
    const rightProjects = document.querySelectorAll(".right-div-elements");
    const leftProjects = document.querySelectorAll(".left-div-elements");
  
    if (isNarrowScreen) {
      mainLayout.classList.remove("container");
      mainLayout.classList.add("container-phone");
      rightProjects.forEach(element => {
        element.classList.remove("right-div");
      });

      leftProjects.forEach(element => {
        element.classList.remove("left-div");
      });
    } else {
      mainLayout.classList.remove("container-phone");
      mainLayout.classList.add("container");
      rightProjects.forEach(element => {
        element.classList.add("right-div");
      });

      leftProjects.forEach(element => {
        element.classList.add("left-div");
      });
    }
  }
  
  // load
  updateContainerClass();
  
  // Call when window is resized
  window.addEventListener("resize", updateContainerClass);
  
  
