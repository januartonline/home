document.addEventListener("DOMContentLoaded", function() {
    const buildingsDiv = document.getElementById("buildings");
    const menuDiv = document.getElementById("menu");
    const buildExpDiv = document.getElementById("build_exp");

    buildingsDiv.addEventListener("click", function() {
        // Fade out the menu div
        fadeOut(menuDiv, 500, function() {
            // After fading out, fade in the build_exp div
            fadeIn(buildExpDiv, 500);
        });
    });
});

function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = "grid";
    
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

function fadeOut(element, duration, callback) {
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = 1 - Math.min(progress / duration, 1);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            element.style.display = "none";
            if (callback) callback();
        }
    }
    window.requestAnimationFrame(step);
}