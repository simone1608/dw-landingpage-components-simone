export default function Facilities(facilities) {

    let facilitiesElement = document.createElement("section");
    facilitiesElement.classList.add("facilities");


    facilitiesElement.innerHTML = `
        <h2 class="facilities-headline">${facilities.headline}</h2>
    `

    facilities.options.forEach(function (facilitie) {
        facilitiesElement.innerHTML += `
            <div class="facilitie">
                <img src="${facilitie.icon}" alt="" class="facilitie-icon">
                <h2 class="facilitie-headline">${facilitie.headline}</h2>
                <p class="facilitie-text">${facilitie.text}</p>
                
            </div>
        `
    })

    return facilitiesElement
}