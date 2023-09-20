document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const zoomedImage = document.createElement('div');
    zoomedImage.className = 'zoomed-image';
    // Select the images with the class "zoomable-image"
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    // Event listener to open the zoomed view when any zoomable image is clicked
    zoomableImages.forEach(function (image) {
        image.addEventListener('click', function () {
            const clonedImage = image.cloneNode(true);
            zoomedImage.innerHTML = ''; // Clear any previous content
            zoomedImage.appendChild(clonedImage);
            document.body.appendChild(zoomedImage);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Event listener to close the zoomed view
    zoomedImage.addEventListener('click', function () {
        document.body.removeChild(zoomedImage);
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
});
