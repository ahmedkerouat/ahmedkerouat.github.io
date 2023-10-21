document.addEventListener("DOMContentLoaded", function() {
    const tvImage = document.querySelector(".tv-image");
    const tvShutdown = document.querySelector(".tv-shutdown");

    // Check if the animation has already been played
    const hasAnimationPlayed = sessionStorage.getItem("tvAnimationPlayed");

    if (!hasAnimationPlayed) {
        // If not, add the class to play the animation
        tvImage.classList.add("play-once");
        tvShutdown.style.animation = "shutdown 400ms linear 3s forwards";
        
        // Set a session storage item to mark that the animation has been played
        sessionStorage.setItem("tvAnimationPlayed", "true");
    }
});
