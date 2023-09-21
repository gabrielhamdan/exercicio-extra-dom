window.onscroll = () => loadMoreImages();

function loadMoreImages() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadImages();
    }
}

function randImage() {
    const rand = Math.floor(Math.random() * 15) + 1;

    return `images/${rand}.jpg`
}

function loadImages() {
    const divImages = document.getElementById("images");

    for(let i = 0; i < 15; i++) {
        const img = document.createElement("img");
        img.src = randImage();
        img.style.width = "500px";

        divImages.appendChild(img);
    }
}

loadImages();
