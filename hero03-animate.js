const selectElement = (selector) => {
    let element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check "${selector}" is correct`);
}

const root = selectElement(":root")
const bodyStyles = window.getComputedStyle(document.body);

const heroContainer = selectElement(".hero-container")
const heroContainerMax = 880;
const heroContainerMin = 340
let heroContainerSpread = heroContainerMax - heroContainerMin


const throttle = (callback, interval)=> {
  let enableCall = true;

  return (...args) => {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => enableCall = true, interval);
  }
}


// const throttle = (callback, interval) => {
//     let enableCall = true;

//     return () => {
//         if (!enableCall) return;

//         enableCall = false;
//         callback();
//         setTimeout(() => enableCall = true, interval);
//     }
// }



const getDimensions = (element) => {
    let width = element.offsetWidth
    let height = element.offsetHeight;
    return { width, height }
}

const bindAnimationToWidth = () => {
    let { width, height } = getDimensions(heroContainer)
    let jsKeyframe = (width - heroContainerMin) / heroContainerSpread;
    root.style.setProperty("--js-keyframe", jsKeyframe)
}

window.addEventListener("resize", throttle(bindAnimationToWidth, 500));


// Run on Start 
bindAnimationToWidth()


// var offsetStart = 0;
// var offsetEnd = 0;

// window.addEventListener('scroll', () => {
//     let result = ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight )
//     console.log(result);
//   document.documentElement.style.setProperty('--scroll', result );
// }, false);

