function selectElement(selector) {
    let element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check "${selector}" is correct`);
}





console.log("It Works!");