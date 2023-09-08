function forceLandscape() {
    if (window.innerWidth < window.innerHeight) {
        document.body.style.transform = "rotate(-90deg)";
        document.body.style.width = "100vh";
        document.body.style.height = "100vw";
        document.body.style.overflow = "hidden";
        document.body.style.position = "absolute";
        document.body.style.top = "50%";
        document.body.style.left = "50%";
        document.body.style.marginTop = "-50vw";
        document.body.style.marginLeft = "-50vh";
    } else {
        document.body.style.transform = "";
        document.body.style.width = "";
        document.body.style.height = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.marginTop = "";
        document.body.style.marginLeft = "";
    }
}

window.addEventListener('resize', forceLandscape);
