export default function Advantages(advantages) {

    let advantagesElement = document.createElement("section");
    advantagesElement.classList.add("advantages");

    advantages.forEach(function (advantages) {
        advantagesElement.innerHTML = `
    
        `
    });

    return advantagesElement
}