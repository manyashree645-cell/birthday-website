
function openGift() {
    showPage("wishPage");
}

function showMemories() {
    showPage("memoryPage");
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// Photos
let currentPhoto = 1;
const totalPhotos = 6;

function nextPhoto() {
    currentPhoto++;

    if (currentPhoto > totalPhotos) {
        currentPhoto = 1;
    }

    document.getElementById("memoryPhoto").src =
        "./images/photo" + currentPhoto + ".jpeg";

    const photoNumber = document.getElementById("photoNumber");

    if (photoNumber) {
        photoNumber.textContent = currentPhoto;
    }
}
