function selectElement(selector) {
    let element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check "${selector}" is correct`);
}

let root = selectElement(":root")

let sideBox = selectElement(".sidebox")

function setBanner() {
    let width = sideBox.offsetWidth;
    let height = sideBox.offsetHeight;

    // get angle of triangle
    let angle = Math.round(Math.atan(height / width) * 180 / Math.PI);

    // get width of triangle side 
    let newWidth = Math.round(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

    root.style.setProperty('--banner-angle', "-" + angle + "deg")
    root.style.setProperty('--banner-width', newWidth + "px")
}

setBanner()

window.addEventListener('resize', setBanner);