document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAnimation() {
        if (isInViewport(aboutImage)) {
            aboutImage.classList.add('in-view');
        }
        if (isInViewport(aboutText)) {
            aboutText.classList.add('in-view');
        }
    }

    // Initial check on load
    checkAnimation();

    // Check again when scrolling
    window.addEventListener('scroll', checkAnimation);
});

// Get elements
const popup = document.getElementById("videoPopup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

// Open the popup when the brand name is clicked
openPopup.onclick = function() {
    popup.style.display = "block";
}

// Close the popup when the "X" is clicked
closePopup.onclick = function() {
    popup.style.display = "none";
}

// Close the popup if the user clicks outside the popup content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
