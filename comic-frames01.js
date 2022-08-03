function selectElement(selector) {
    let element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check "${selector}" is correct`);
}
let root = selectElement(":root")

let sectionGrid = selectElement(".section-grid");


window.addEventListener("scroll", ()=> {
    root.style.setProperty("--scroll-y", scrollY);
    console.log(scrollY);
})


// window.onscroll = function (e) {
//     console.log(e);
//     // var vertical_position = 0;
//     // if (pageYOffset)//usual
//     //   vertical_position = pageYOffset;
//     // else if (document.documentElement.clientHeight)//ie
//     //   vertical_position = document.documentElement.scrollTop;
//     // else if (document.body)//ie quirks
//     //   vertical_position = document.body.scrollTop;
  
//     // var your_div = document.getElementById('some_div');
//     // your_div.style.top = (vertical_position + 200) + 'px';//200 is arbitrary.. just to show you could now position it how you want
  
// }

console.log("It Works!");