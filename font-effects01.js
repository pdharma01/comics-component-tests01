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
        // element.style.transition = "all 500ms ease"
        element.style.textShadow = ""
    });
});


// Preload shadows 


function preloadShadow(element) {
    let varShadowName = "--js-shadow-" + element.dataset.varNumber;
    let varTransformName = "--js-translate3D-" + element.dataset.varNumber;
    let shadowLength = parseInt(element.dataset.shadowLength);
    let shadowColor = element.dataset.shadowColor;

    // Generate Transform
    let TransformContent = `translate3d(-${shadowLength}px, -${shadowLength}px, 0)`

    // Generate text shadow 
    let textShadowContent = "";
    [...Array(shadowLength + 1)].forEach((_, i) => {
        textShadowContent = textShadowContent + 
        `${i+1}px ${i+1}px 0 ${shadowColor},` ;
    });
    textShadowContent = textShadowContent.slice(0, -1);
    
    return [varTransformName, TransformContent, varShadowName, textShadowContent]
}


// Set all PreLoad Shadows 
let allJSPreLoadShadow = document.querySelectorAll(".js-preload-shadow");

allJSPreLoadShadow.forEach((element)=>{
    let [varTransformName, TransformContent, varShadowName, textShadowContent] = preloadShadow(element);
    document.documentElement.style.setProperty(varTransformName, TransformContent);
    document.documentElement.style.setProperty(varShadowName, textShadowContent);
})




// jsPreloadShadow.style.textShadow = createShadow(jsPreloadShadow)

// jsPreloadShadow.classList.remove("active")

// jsPreloadShadow.addEventListener("mouseenter", ()=>{
//     jsPreloadShadow.classList.toggle("active")
// })

// jsPreloadShadow.addEventListener("mouseleave", ()=>{
//     jsPreloadShadow.classList.toggle("active")
// })

