let currentImageIndex = 0;
const images = [
    "./Images/beautiful-flowers-images.jpg",
    "./Images/cherry-blossom-delight.jpg",
    "./Images/easter-white-easter.jpg",
    "/Images/images-for-easter-white-easter.jpeg"
];

function openImage(index) {
    currentImageIndex = index - 1;
    document.getElementById("full-image").src = images[currentImageIndex];
    document.getElementById("image-viewer").style.display = "flex";
}

function closeImage() {
    document.getElementById("image-viewer").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("full-image").src = images[currentImageIndex];
}
