// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Example of simple interaction: toggle overlay visibility on hover
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const overlay = item.querySelector('.overlay');
            overlay.style.opacity = '1'; // Show the overlay
        });

        item.addEventListener('mouseout', () => {
            const overlay = item.querySelector('.overlay');
            overlay.style.opacity = '0'; // Hide the overlay
        });
    });
});

<script>
    
</script>
// Function to open image in lightbox
function openImage() {
    var img = event.target;
    var lightbox = document.getElementById("image-lightbox");
    var lightboxImage = document.getElementById("lightbox-image");
    
    // Set the source of the image in the lightbox
    lightboxImage.src = img.src;

    // Display the lightbox
    lightbox.style.display = "flex";
}

// Function to close the image lightbox
function closeImage(event) {
    if (event.target === event.currentTarget) {
        document.getElementById("image-lightbox").style.display = "none";
    }
}
