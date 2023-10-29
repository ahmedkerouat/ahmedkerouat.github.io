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

// Function to handle intersection changes
function handleIntersection(entries) {
  const tvImage = document.querySelector(".tv-image");
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.classList.contains("hidden")) {
      entry.target.classList.add("show");
      if(entry.target.classList.contains("About-me"))
        tvImage.classList.add("tv-transition");
    } else {
      entry.target.classList.remove("show");
      if(entry.target.classList.contains("About-me"))
        tvImage.classList.remove("tv-transition");
    }
  });
}

// Get all elements with the "hidden" class and observe them
const hiddenElements = document.querySelectorAll(".hidden");
const intersectionObserver = new IntersectionObserver(handleIntersection);

hiddenElements.forEach(element => {
  intersectionObserver.observe(element);
});

const images = document.querySelectorAll(".col-grid img");

// Get the modal and the modal image
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("zoomedImage");
const closeButton = document.getElementById("closeButton");

function openModal(event) {
  modal.classList.add("open");
  modalImg.src = event.target.src;
  const title = event.target.getAttribute("data-title");
  document.getElementById("imageTitle").textContent = title;
}

function closeModal() {
  modal.classList.remove("open"); 
}

// Function to close the modal when the Escape key is pressed
function closeOnEscapeKey(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Attach click event listeners to the images
images.forEach((image) => {
  image.addEventListener("click", openModal);
});

// Attach click event listener to the close button
closeButton.addEventListener("click", closeModal);

// Attach event listener to close modal on the escape key press
document.addEventListener("keydown", closeOnEscapeKey);

function closeOnCrossClick() {
  closeModal();
}

// Attach event listener to the cross button
crossButton.addEventListener("click", closeOnCrossClick);



