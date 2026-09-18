export default function Hero() {

    let heroElement = document.createElement("section");
    heroElement.classList.add("hero");


    heroElement.innerHTML = `
        <img class="hero-image" src="${hero.image}" alt="">
        <div class="hero-content">
            <h1 class="hero-headline">${hero.headline}</h1>
            <p class="hero-copy">${hero.copy}</p>
            <img src="${hero.icon}" alt="" class="hero-icon">
        </div>
        

    `

    return heroElement
}