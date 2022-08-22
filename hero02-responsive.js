function selectElement(selector) {
    let element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check "${selector}" is correct`);
}

let root = selectElement(":root")
let bodyStyles = window.getComputedStyle(document.body);

let heroContainer = selectElement(".hero-container")
let heroContainerMax= 1000;
let heroContainerMin = 340

function getDimensions(element) {
    let width = element.offsetWidth
    let height = element.offsetHeight;
    return [width, height]
}

// Calculation to reset values based in MIn Max 
function calculateNewValues(current, width) {
    let result = (current - 1)  - ((width - heroContainerMin) / (660 / current));
    return Math.round(result)
}

// Get currently set values 
let currentHero04LeftX = bodyStyles.getPropertyValue('--hero04-left-X');
let currentHero03RightX = bodyStyles.getPropertyValue('--hero03-right-X');
let currentHero05PersonX = bodyStyles.getPropertyValue('--hero05-person-X');
let currentDeskTranslateY = bodyStyles.getPropertyValue('--desk-translateY');
let currentDeskScale = bodyStyles.getPropertyValue('--desk-scale');

window.addEventListener('resize', ()=>{
    let [width, height] = getDimensions(heroContainer)

    root.style.setProperty('--hero04-left-X', calculateNewValues(currentHero04LeftX, width))

    root.style.setProperty('hero03-right-X', calculateNewValues(currentHero03RightX, width))

    root.style.setProperty('--hero05-person-X', calculateNewValues(currentHero05PersonX, width))
    
    root.style.setProperty('--desk-translateY', calculateNewValues(currentDeskTranslateY, width))

    let newDeskScale = calculateNewValues(currentDeskScale, width)
    if (newDeskScale > 100) root.style.setProperty('--desk-scale', Math.max(newDeskScale, 100))


})