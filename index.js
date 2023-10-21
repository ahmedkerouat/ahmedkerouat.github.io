const tvImage = document.getElementById("tv-image");
const tvShutdown = document.getElementById("shutdown-animation");

// Function to remove the animation class from the TV image
function removeImageAnimationClass() {
  tvImage.classList.remove("tv-animation");
  tvImage.removeEventListener("animationend", removeImageAnimationClass);
}

// Function to remove the animation class from the TV shutdown
function removeShutdownAnimationClass() {
  tvShutdown.classList.remove("shutdown-animation");
  tvShutdown.removeEventListener("animationend", removeShutdownAnimationClass);
}

// Add event listeners to detect when the animations have finished
tvImage.addEventListener("animationend", removeImageAnimationClass, { once: true });
tvShutdown.addEventListener("animationend", removeShutdownAnimationClass, { once: true });
