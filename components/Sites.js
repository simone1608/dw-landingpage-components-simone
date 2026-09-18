export default function Sites(sites) {

    let sitesElement = document.createElement("section");
    sitesElement.classList.add("sites");


    sitesElement.innerHTML = `
        <div class="site">
            <h2 class="site-headline">${sites.headline}</h2>
            <p class="site-text">${sites.text}</p>
            <button class="site-btnicon">
                <img src="${sites.btnicon}" alt="" class="site-arrow">
            </button>
        </div>

        <div class="sites-places"></div>
    `

    let placesElement = sitesElement.querySelector(".sites-places");

    sites.places.forEach(function (site) {
        placesElement.innerHTML += `
            <div class="sites-div">
                <img src="${site.img}" alt="" class="sites-img">
                <h3 class="sites-name">${site.name}</h3>
                <p class="sites-city">${site.city}</p>
            </div>
        `
    })

    return sitesElement
}