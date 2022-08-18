function selectElement(selector) {
    let element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check "${selector}" is correct`);
}

function createShadow(element) {
    let shadowLength = parseInt(element.dataset.shadowLength);
    let shadowColor = element.dataset.shadowColor;
    let textShadowContent = "";


    [...Array(shadowLength + 1)].forEach((_, i) => {
        textShadowContent = textShadowContent + 
       `${i+1}px ${i+1}px 0 ${shadowColor},` ;
    });

    textShadowContent = textShadowContent.slice(0, -1);
    return textShadowContent
}

// Apply all stretch shadows 
let allJSShadow = document.querySelectorAll(".js-shadow");

allJSShadow.forEach((element) => {

    element.parentNode.addEventListener("mouseenter", ()=> {
        element.style.textShadow = createShadow(element)
    });

    element.parentNode.addEventListener("mouseleave", ()=> {
        element.style.transition = "all 500ms ease"
        element.style.textShadow = ""
    });
});


